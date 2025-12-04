'use client';

import { useGame } from '../contexts/GameContext';
import { roles } from '../data/roles';

interface ResultScreenProps {
    onRestart: () => void;
}

export default function ResultScreen({ onRestart }: ResultScreenProps) {
    const { gameState } = useGame();
    const { score, avatarLevel, role } = gameState;

    const totalScore = score.nird;
    const isVictory = totalScore >= 100;
    const selectedRole = roles.find(r => r.id === role);

    const learnedCommands = [
        { cmd: 'htop', desc: 'Visualiser les processus' },
        { cmd: 'sudo apt install', desc: 'Installer des logiciels' },
        { cmd: 'sudo apt upgrade', desc: 'Mettre à jour le système' },
        { cmd: 'sudo apt autoremove', desc: 'Nettoyer le système' },
    ];

    return (
        <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Grille de fond */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Particules de célébration */}
            {isVictory && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-2xl animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                            }}
                        >
                            {['✨', '🌟', '💚', '🌿'][Math.floor(Math.random() * 4)]}
                        </div>
                    ))}
                </div>
            )}

            {/* Carte principale */}
            <div className="max-w-2xl w-full bg-[#1a1a1a] rounded-3xl border border-[#2a2a2a] p-8 relative z-10 animate-fadeIn">
                {/* En-tête */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 
                        flex items-center justify-center mx-auto mb-4
                        shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                        <span className="text-4xl">{isVictory ? '🏆' : '🎮'}</span>
                    </div>
                    <h1 className={`text-4xl font-black mb-2 ${isVictory ? 'neon-text' : 'text-white'}`}>
                        {isVictory ? 'VICTOIRE !' : 'Partie terminée'}
                    </h1>
                    <p className="text-gray-400">
                        {isVictory
                            ? 'Tu as rejoint la Résistance Numérique !'
                            : 'Continue de t\'entraîner pour devenir un résistant !'}
                    </p>
                    {selectedRole && (
                        <p className="text-sm text-gray-500 mt-2">
                            {selectedRole.emoji} {selectedRole.title} • Niveau {avatarLevel}/5
                        </p>
                    )}
                </div>

                {/* Stats finales */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#0d0d0d] rounded-2xl p-4 text-center border border-[#2a2a2a]">
                        <div className="text-2xl mb-2">💰</div>
                        <div className="text-2xl font-bold text-[#00ff88]">
                            {score.money >= 0 ? '+' : ''}{score.money.toLocaleString('fr-FR')}€
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Économies</div>
                    </div>

                    <div className="bg-[#0d0d0d] rounded-2xl p-4 text-center border border-[#2a2a2a]">
                        <div className="text-2xl mb-2">🌍</div>
                        <div className="text-2xl font-bold text-[#00ff88]">
                            {score.co2 >= 0 ? '+' : ''}{score.co2}kg
                        </div>
                        <div className="text-xs text-gray-500 mt-1">CO₂ évité</div>
                    </div>

                    <div className="bg-[#0d0d0d] rounded-2xl p-4 text-center border border-[#2a2a2a]">
                        <div className="text-2xl mb-2">⚡</div>
                        <div className="text-2xl font-bold text-[#00ff88]">
                            {score.nird}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Points NIRD</div>
                    </div>
                </div>

                {/* Bilan écologique */}
                {isVictory && (
                    <div className="bg-[#00ff88]/5 rounded-2xl p-5 mb-8 border border-[#00ff88]/20">
                        <h3 className="text-[#00ff88] font-bold mb-3 flex items-center gap-2">
                            <span>🌿</span> Ton impact positif
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-gray-400">
                                <span className="text-[#00ff88] font-bold text-lg">
                                    {Math.max(1, Math.round(score.co2 / 10))}
                                </span> arbres équivalents
                            </div>
                            <div className="text-gray-400">
                                <span className="text-[#00ff88] font-bold text-lg">
                                    {Math.max(1, Math.round(score.money / 100))}
                                </span> PC sauvés
                            </div>
                        </div>
                    </div>
                )}

                {/* Cheat Sheet Linux */}
                <div className="bg-[#0d0d0d] rounded-2xl p-5 mb-8 border border-[#2a2a2a]">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <span>📋</span> Cheat Sheet du Résistant
                    </h3>
                    <div className="space-y-3 font-mono text-sm">
                        {learnedCommands.map((cmd) => (
                            <div key={cmd.cmd} className="flex items-center justify-between py-2 border-b border-[#2a2a2a] last:border-0">
                                <code className="text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-lg">{cmd.cmd}</code>
                                <span className="text-gray-500 text-xs">{cmd.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onRestart}
                        className="flex-1 py-4 px-6 bg-[#00ff88] hover:bg-[#00cc6a] rounded-2xl 
                     text-black font-bold transition-all duration-300 
                     hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
                    >
                        🔄 Rejouer
                    </button>
                    <a
                        href="https://nird.forge.apps.education.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 px-6 bg-[#0d0d0d] border border-[#2a2a2a] 
                     hover:border-[#00ff88] rounded-2xl text-white font-bold text-center
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                    >
                        🌐 Découvrir NIRD
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-gray-600 text-sm relative z-10">
                <p>🏴 Opération N.I.R.D - Le Village Résiste</p>
                <p className="mt-1 text-xs">Nuit de l&apos;Info 2025 • Licence Libre GPLv3</p>
            </div>
        </div>
    );
}
