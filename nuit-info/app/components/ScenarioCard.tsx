'use client';

import { useState } from 'react';
import { Scenario, Choice } from '../types/game';

interface ScenarioCardProps {
    scenario: Scenario;
    onChoice: (choice: Choice) => void;
    scenarioNumber: number;
}

export default function ScenarioCard({ scenario, onChoice, scenarioNumber }: ScenarioCardProps) {
    const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleClick = (choice: Choice) => {
        // Éviter les doubles clics
        if (isProcessing) return;

        console.log('🎯 Choix cliqué:', choice.text);
        setIsProcessing(true);
        setSelectedChoice(choice);

        // Appeler onChoice après un délai pour montrer le feedback
        setTimeout(() => {
            console.log('✅ Envoi du choix au parent');
            onChoice(choice);
            // Reset local state
            setSelectedChoice(null);
            setIsProcessing(false);
        }, 2000);
    };

    return (
        <div className="bg-[#1a1a1a] rounded-3xl border border-[#2a2a2a] p-6 md:p-8">
            {/* Badge du scénario */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 
                  border border-[#00ff88]/30 text-[#00ff88] text-sm font-medium mb-6">
                <span>Question {String(scenarioNumber).padStart(2, '0')}</span>
            </div>

            {/* Titre */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{scenario.title}</h2>

            {/* Situation */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{scenario.situation}</p>

            {/* Affichage conditionnel : choix ou conséquence */}
            {!selectedChoice ? (
                // Afficher les choix
                <div className="space-y-3">
                    {scenario.choices.map((choice, index) => (
                        <button
                            key={choice.id}
                            type="button"
                            onClick={() => handleClick(choice)}
                            disabled={isProcessing}
                            className="w-full text-left p-4 md:p-5 rounded-2xl bg-[#0d0d0d] border border-[#2a2a2a]
                                     hover:border-[#00ff88] hover:bg-[#0d0d0d]/80
                                     transition-all duration-200 cursor-pointer
                                     disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]
                                             flex items-center justify-center text-[#00ff88] font-bold text-sm">
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className="text-gray-300 leading-relaxed">
                                    {choice.text}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                // Afficher la conséquence
                <div className={`p-6 rounded-2xl ${selectedChoice.isGoodChoice
                        ? 'bg-[#00ff88]/10 border border-[#00ff88]/30'
                        : 'bg-red-500/10 border border-red-500/30'
                    }`}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">
                            {selectedChoice.isGoodChoice ? '✅' : '⚠️'}
                        </span>
                        <span className={`font-bold text-lg ${selectedChoice.isGoodChoice ? 'text-[#00ff88]' : 'text-red-400'
                            }`}>
                            {selectedChoice.isGoodChoice ? 'Excellent choix !' : 'Hmm... pas idéal'}
                        </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        {selectedChoice.consequence}
                    </p>

                    {/* Impact */}
                    <div className="flex flex-wrap gap-3">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${selectedChoice.impact.money >= 0
                                ? 'bg-[#00ff88]/20 text-[#00ff88]'
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                            {selectedChoice.impact.money >= 0 ? '+' : ''}{selectedChoice.impact.money}€
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${selectedChoice.impact.co2 >= 0
                                ? 'bg-[#00ff88]/20 text-[#00ff88]'
                                : 'bg-orange-500/20 text-orange-400'
                            }`}>
                            {selectedChoice.impact.co2 >= 0 ? '+' : ''}{selectedChoice.impact.co2}kg CO₂
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${selectedChoice.impact.nird >= 0
                                ? 'bg-[#00ff88]/20 text-[#00ff88]'
                                : 'bg-pink-500/20 text-pink-400'
                            }`}>
                            {selectedChoice.impact.nird >= 0 ? '+' : ''}{selectedChoice.impact.nird} NIRD
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-4 text-center">
                        ⏳ Question suivante dans un instant...
                    </p>
                </div>
            )}
        </div>
    );
}
