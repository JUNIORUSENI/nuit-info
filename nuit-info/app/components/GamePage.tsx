'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getScenariosForRole } from '../data/questionsHelper';
import { Choice, RoleType, Scenario } from '../types/game';
import ResultScreen from './ResultScreen';
import { useGame } from '../contexts/GameContext';
import { roles } from '../data/roles';
import ScenarioCard from './ScenarioCard';
import Avatar from './Avatar';

interface GamePageProps {
    roleId: RoleType;
}

export default function GamePage({ roleId }: GamePageProps) {
    const { gameState, selectRole, makeChoice, resetGame } = useGame();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const scenarios = getScenariosForRole(roleId);
    const currentScenario: Scenario | null = scenarios[currentIndex] || null;
    const selectedRole = roles.find(r => r.id === roleId);

    useEffect(() => {
        selectRole(roleId);
    }, [roleId, selectRole]);

    const handleChoice = (choice: Choice) => {
        // Mettre à jour le score
        makeChoice(choice);

        // Passer à la question suivante
        if (currentIndex + 1 >= scenarios.length) {
            setIsGameOver(true);
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleRestart = () => {
        resetGame();
        setCurrentIndex(0);
        setIsGameOver(false);
    };

    if (isGameOver) {
        return <ResultScreen onRestart={handleRestart} />;
    }

    return (
        <div className="min-h-screen bg-[#0d0d0d] p-4 md:p-8 font-sans text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-[#1a1a1a] p-6 rounded-3xl border border-[#2a2a2a]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#00ff88] flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                            N
                        </div>
                        <span className="text-[#00ff88] font-bold text-xl tracking-wide">
                            Opération N.I.R.D
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                        {/* Scores */}
                        <div className="flex gap-6 bg-[#0d0d0d] px-6 py-3 rounded-2xl border border-[#2a2a2a]">
                            <div className={`flex items-center gap-2 font-mono font-bold ${gameState.score.money >= 0 ? 'text-[#00ff88]' : 'text-red-500'}`}>
                                <span>💰</span>
                                <span>{gameState.score.money}€</span>
                            </div>
                            <div className={`flex items-center gap-2 font-mono font-bold ${gameState.score.co2 >= 0 ? 'text-[#00ff88]' : 'text-orange-500'}`}>
                                <span>🌍</span>
                                <span>{gameState.score.co2}kg</span>
                            </div>
                            <div className="flex items-center gap-2 font-mono font-bold text-[#00ff88]">
                                <span>⚡</span>
                                <span>{gameState.score.nird} pts</span>
                            </div>
                        </div>

                        {/* Progression */}
                        <div className="text-gray-400 font-medium bg-[#0d0d0d] px-4 py-3 rounded-2xl border border-[#2a2a2a]">
                            Question <span className="text-white">{currentIndex + 1}</span>
                            <span className="text-gray-600 mx-1">/</span>
                            <span>{scenarios.length}</span>
                        </div>
                    </div>
                </header>

                {/* Retour */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00ff88] transition-colors mb-8 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    Changer de Rôle
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Questions - Colonne gauche */}
                    <div className="lg:col-span-8">
                        {currentScenario && (
                            <ScenarioCard
                                scenario={currentScenario}
                                onChoice={handleChoice}
                                scenarioNumber={currentIndex + 1}
                            />
                        )}
                    </div>

                    {/* Avatar - Colonne droite */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#1a1a1a] rounded-3xl border border-[#2a2a2a] p-8 text-center sticky top-8">
                            <div className="mb-6">
                                <Avatar />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                {selectedRole?.title}
                            </h3>
                            <p className="text-gray-500 mb-6">
                                {selectedRole?.subtitle}
                            </p>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Niveau d'évolution</span>
                                    <span className="text-[#00ff88] font-bold">{gameState.avatarLevel}/5</span>
                                </div>
                                <div className="h-3 bg-[#0d0d0d] rounded-full overflow-hidden border border-[#2a2a2a]">
                                    <div
                                        className="h-full bg-[#00ff88] transition-all duration-500 ease-out shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                                        style={{ width: `${(gameState.avatarLevel / 5) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
