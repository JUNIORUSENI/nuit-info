'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { GameState, RoleType, Choice, Scenario } from '../types/game';
import { getScenariosForRole, getQuestionCountForRole } from '../data/questionsHelper';
import { getRandomTerminalForRole, TerminalChallenge } from '../data/terminals';

interface GameContextType {
    gameState: GameState;
    selectRole: (role: RoleType) => void;
    makeChoice: (choice: Choice) => void;
    completeTerminal: (challenge: TerminalChallenge) => void;
    nextScenario: () => void;
    getCurrentScenario: () => Scenario | null;
    getTerminalChallenge: () => TerminalChallenge | null;
    resetGame: () => void;
    shouldShowTerminal: () => boolean;
    getTotalQuestions: () => number;
    updateScore: (impact: { money: number; co2: number; nird: number }) => void;
}

const initialState: GameState = {
    role: null,
    currentScenarioIndex: 0,
    score: {
        money: 0,
        co2: 0,
        nird: 0,
    },
    avatarLevel: 1,
    decisions: [],
    isGameOver: false,
    terminalCompleted: 0,
};

const STORAGE_KEY = 'nird-game-state';

// Charger l'état depuis localStorage
const loadStateFromStorage = (): GameState => {
    if (typeof window === 'undefined') return initialState;

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            return { ...initialState, ...parsed };
        }
    } catch (e) {
        console.error('Erreur de chargement localStorage:', e);
    }
    return initialState;
};

// Sauvegarder l'état dans localStorage
const saveStateToStorage = (state: GameState) => {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Erreur de sauvegarde localStorage:', e);
    }
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
    const [gameState, setGameState] = useState<GameState>(initialState);
    const [isHydrated, setIsHydrated] = useState(false);

    // Charger l'état depuis localStorage au montage
    useEffect(() => {
        const savedState = loadStateFromStorage();
        setGameState(savedState);
        setIsHydrated(true);
    }, []);

    // Sauvegarder dans localStorage à chaque changement
    useEffect(() => {
        if (isHydrated) {
            saveStateToStorage(gameState);
        }
    }, [gameState, isHydrated]);

    const selectRole = useCallback((role: RoleType) => {
        setGameState((prev) => ({
            ...prev,
            role,
            currentScenarioIndex: 0,
            isGameOver: false,
        }));
    }, []);

    const updateScore = useCallback((impact: { money: number; co2: number; nird: number }) => {
        setGameState((prev) => {
            const newScore = {
                money: prev.score.money + impact.money,
                co2: prev.score.co2 + impact.co2,
                nird: prev.score.nird + impact.nird,
            };
            return {
                ...prev,
                score: newScore,
            };
        });
    }, []);

    const makeChoice = useCallback((choice: Choice) => {
        setGameState((prev) => {
            const newScore = {
                money: prev.score.money + choice.impact.money,
                co2: prev.score.co2 + choice.impact.co2,
                nird: prev.score.nird + choice.impact.nird,
            };

            // Calculer le niveau d'avatar
            let newAvatarLevel = prev.avatarLevel;
            if (choice.isGoodChoice && newAvatarLevel < 5) {
                newAvatarLevel++;
            } else if (!choice.isGoodChoice && newAvatarLevel > 1) {
                newAvatarLevel--;
            }

            console.log('Choice made:', choice.id, 'Impact:', choice.impact, 'New score:', newScore);

            return {
                ...prev,
                score: newScore,
                avatarLevel: newAvatarLevel,
                decisions: [...prev.decisions, choice.id],
            };
        });
    }, []);

    const completeTerminal = useCallback((challenge: TerminalChallenge) => {
        setGameState((prev) => ({
            ...prev,
            score: {
                money: prev.score.money + challenge.impact.money,
                co2: prev.score.co2 + challenge.impact.co2,
                nird: prev.score.nird + challenge.impact.nird,
            },
            avatarLevel: Math.min(5, prev.avatarLevel + 1),
            terminalCompleted: prev.terminalCompleted + 1,
        }));
    }, []);

    const getTotalQuestions = useCallback(() => {
        if (!gameState.role) return 5;
        return getQuestionCountForRole(gameState.role);
    }, [gameState.role]);

    const nextScenario = useCallback(() => {
        setGameState((prev) => {
            if (!prev.role) return prev;

            const totalQuestions = getQuestionCountForRole(prev.role);
            const nextIndex = prev.currentScenarioIndex + 1;

            if (nextIndex >= totalQuestions) {
                return {
                    ...prev,
                    isGameOver: true,
                };
            }

            return {
                ...prev,
                currentScenarioIndex: nextIndex,
            };
        });
    }, []);

    const getCurrentScenario = useCallback((): Scenario | null => {
        if (!gameState.role) return null;
        const scenarios = getScenariosForRole(gameState.role);
        return scenarios[gameState.currentScenarioIndex] || null;
    }, [gameState.role, gameState.currentScenarioIndex]);

    const getTerminalChallenge = useCallback(() => {
        if (!gameState.role) return null;
        return getRandomTerminalForRole(gameState.role);
    }, [gameState.role]);

    const shouldShowTerminal = useCallback(() => {
        const terminalTriggers = [2, 4];
        return terminalTriggers.includes(gameState.currentScenarioIndex) &&
            gameState.terminalCompleted < terminalTriggers.filter(t => t <= gameState.currentScenarioIndex).length;
    }, [gameState.currentScenarioIndex, gameState.terminalCompleted]);

    const resetGame = useCallback(() => {
        const newState = {
            ...initialState,
            role: gameState.role,
        };
        setGameState(newState);
        saveStateToStorage(newState);
    }, [gameState.role]);

    return (
        <GameContext.Provider
            value={{
                gameState,
                selectRole,
                makeChoice,
                completeTerminal,
                nextScenario,
                getCurrentScenario,
                getTerminalChallenge,
                resetGame,
                shouldShowTerminal,
                getTotalQuestions,
                updateScore,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
