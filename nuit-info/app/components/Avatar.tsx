'use client';

import { useGame } from '../contexts/GameContext';
import { roles } from '../data/roles';

const avatarStates = {
    1: { emoji: '😰', label: 'Épuisé', status: 'Système compromis' },
    2: { emoji: '😐', label: 'Fatigué', status: 'Connexion instable' },
    3: { emoji: '🙂', label: 'Motivé', status: 'Synchronisation...' },
    4: { emoji: '😊', label: 'Confiant', status: 'IA Optimisée' },
    5: { emoji: '🦸', label: 'Héros NIRD', status: 'Mode Résistance' },
};

export default function Avatar() {
    const { gameState } = useGame();
    const level = gameState.avatarLevel;
    const avatar = avatarStates[level as keyof typeof avatarStates];
    const selectedRole = roles.find(r => r.id === gameState.role);

    return (
        <div className="flex flex-col items-center">
            {/* Label du rôle */}
            <p className="text-gray-500 text-sm mb-4">
                Incarnation : <span className="text-[#00ff88]">{selectedRole?.title || 'Directeur'}</span>
            </p>

            {/* Avatar hexagonal avec bordure néon */}
            <div className="hexagon-container">
                {/* Coins décoratifs */}
                <div className="corner-bracket top-left" />
                <div className="corner-bracket top-right" />
                <div className="corner-bracket bottom-left" />
                <div className="corner-bracket bottom-right" />

                {/* Cercle extérieur avec glow animé */}
                <div
                    className="hexagon-border"
                    style={{
                        borderColor: level >= 4 ? '#00ff88' : level >= 2 ? 'rgba(0, 255, 136, 0.5)' : 'rgba(0, 255, 136, 0.3)',
                    }}
                />

                {/* Cercle intérieur */}
                <div className="hexagon-inner">
                    {/* Effet de scan */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                        <div
                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30"
                            style={{
                                animation: 'scan-line 3s linear infinite',
                            }}
                        />
                    </div>

                    {/* Avatar emoji */}
                    <div className={`text-7xl transition-all duration-500 ${level >= 4 ? 'animate-pulse' : ''}`}>
                        {avatar.emoji}
                    </div>
                </div>

                {/* Badge de statut */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className={`px-4 py-2 rounded-full bg-[#0d0d0d] border 
                        text-xs font-medium flex items-center gap-2 whitespace-nowrap
                        ${level >= 4
                            ? 'border-[#00ff88] text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.5)]'
                            : 'border-[#2a2a2a] text-gray-400'
                        }`}>
                        <div className={`w-2 h-2 rounded-full ${level >= 4 ? 'bg-[#00ff88] animate-pulse' : 'bg-gray-500'}`} />
                        {avatar.status}
                    </div>
                </div>
            </div>

            {/* Barre de progression */}
            <div className="w-full max-w-[280px] mt-6">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>{avatar.label}</span>
                    <span>Niveau {level}/5</span>
                </div>
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#2a2a2a]">
                    <div
                        className="h-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] transition-all duration-700 rounded-full"
                        style={{
                            width: `${(level / 5) * 100}%`,
                            boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                        }}
                    />
                </div>
            </div>

            {/* Badge spécial niveau max */}
            {level === 5 && (
                <div className="mt-4 px-5 py-2 rounded-full bg-[#00ff88] text-black text-sm font-bold 
                      animate-pulse shadow-[0_0_20px_rgba(0,255,136,0.5)]">
                    🏆 Résistant Légendaire
                </div>
            )}
        </div>
    );
}
