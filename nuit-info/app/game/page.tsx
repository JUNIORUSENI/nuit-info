'use client';

import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import Avatar from '../components/Avatar';
import ScoreDisplay from '../components/ScoreDisplay';
import ScenarioCard from '../components/ScenarioCard';
import Terminal from '../components/Terminal';
import ResultScreen from '../components/ResultScreen';
import { roles } from '../data/roles';
import { Choice } from '../types/game';

export default function GamePage() {
    const {
        gameState,
        makeChoice,
        nextScenario,
        getCurrentScenario,
        getTerminalChallenge,
        shouldShowTerminal,
        completeTerminal,
        resetGame,
        getTotalQuestions
    } = useGame();

    const totalQuestions = getTotalQuestions();

    const [showTerminal, setShowTerminal] = useState(false);
    const [currentTerminal, setCurrentTerminal] = useState(getTerminalChallenge());

    if (!gameState.role) {
        if (typeof window !== 'undefined') {
            window.location.href = '/';
        }
        return null;
    }

    if (gameState.isGameOver) {
        return <ResultScreen onRestart={resetGame} />;
    }

    const currentScenario = getCurrentScenario();
    const selectedRole = roles.find(r => r.id === gameState.role);

    const handleChoice = (choice: Choice) => {
        makeChoice(choice);

        setTimeout(() => {
            if (shouldShowTerminal() && !showTerminal) {
                setCurrentTerminal(getTerminalChallenge());
                setShowTerminal(true);
            } else {
                nextScenario();
            }
        }, 500);
    };

    const handleTerminalComplete = () => {
        if (currentTerminal) {
            completeTerminal(currentTerminal);
        }
        setShowTerminal(false);
        nextScenario();
    };

    const handleChangeRole = () => {
        resetGame();
        if (typeof window !== 'undefined') {
            window.location.href = '/';
        }
    };

    return (
        <div className="min-h-screen bg-[#0d0d0d] relative">
            {/* Grille de fond */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#0d0d0d]/80 backdrop-blur-lg border-b border-[#2a2a2a]">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00ff88] flex items-center justify-center text-black font-bold text-lg">
                            N
                        </div>
                        <span className="text-[#00ff88] font-bold text-xl hidden sm:block">Opération N.I.R.D</span>
                    </div>

                    {/* Progression */}
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-gray-500 text-xs">Progression</p>
                            <p className="text-white font-bold">
                                {gameState.currentScenarioIndex + 1} / {totalQuestions}
                            </p>
                        </div>
                        <div className="w-24 h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#2a2a2a]">
                            <div
                                className="h-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] transition-all duration-500"
                                style={{
                                    width: `${((gameState.currentScenarioIndex + 1) / totalQuestions) * 100}%`,
                                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                                }}
                            />
                        </div>
                        <button
                            onClick={handleChangeRole}
                            className="btn-neon text-sm hidden md:block"
                        >
                            Lancer la Simulation
                        </button>
                    </div>
                </div>
            </header>

            {/* Contenu principal */}
            <main className="relative z-10 pt-24 pb-8 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Bouton changer de rôle */}
                    <button
                        onClick={handleChangeRole}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#00ff88] transition-colors mb-6 text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Changer de Rôle
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Colonne gauche : Avatar et Score */}
                        <div className="lg:col-span-1 space-y-6">
                            <Avatar />
                            <ScoreDisplay />
                        </div>

                        {/* Colonne droite : Scénario ou Terminal */}
                        <div className="lg:col-span-2">
                            {showTerminal && currentTerminal ? (
                                <Terminal
                                    challenge={currentTerminal}
                                    onComplete={handleTerminalComplete}
                                />
                            ) : currentScenario ? (
                                <ScenarioCard
                                    scenario={currentScenario}
                                    onChoice={handleChoice}
                                    scenarioNumber={gameState.currentScenarioIndex + 1}
                                />
                            ) : (
                                <div className="text-center text-gray-500 py-20">
                                    Chargement...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Bouton chat flottant */}
            <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]
                       hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]
                       flex items-center justify-center transition-all duration-300 z-50">
                <span className="text-2xl">🤖</span>
            </button>

            {/* Alerte urgence au premier scénario */}
            {gameState.currentScenarioIndex === 0 && !showTerminal && (
                <div className="fixed bottom-24 right-6 w-80 z-40 animate-fadeIn">
                    <div className="bg-[#1a1a1a] border border-red-500/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                        <div className="flex items-start gap-3">
                            <span className="text-xl animate-pulse">⚠️</span>
                            <div>
                                <p className="text-red-400 font-bold text-sm">ALERTE SYSTÈME</p>
                                <p className="text-gray-400 text-xs mt-1">
                                    Fin de support Windows 10 : vos ordinateurs seront bientôt obsolètes !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
