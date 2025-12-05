'use client';

import { useGame } from '../contexts/GameContext';
import { roles } from '../data/roles';
import Image from 'next/image';

// 1. ICI : On liste tes fichiers tels qu'ils sont dans ton dossier
// Pas besoin de les renommer, écris juste leur nom ici !
const avatarFiles: Record<string, string[]> = {
    // Rôle ID : [Image Niv 1, Image Niv 2, ..., Image Niv 6]
    directeur: [
        'DIRECTEUR1.png', 'DIRECTEUR2.png', 'DIRECTEUR3.png', 
        'DIRECTEUR4.png', 'DIRECTEUR5.png', 'DIRECTEUR6.png'
    ],
    technicien: [
        'TECH1.png', 'TECH2.png', 'TECH3.png', 
        'TECH4.png', 'TECH5.png', 'TECH6.png'
    ],
    eleve: [
        'ELEVE1.png', 'ELEVE2.png', 'ELEVE3.png', 
        'ELEVE4.png', 'ELEVE5.png', 'ELEVE6.png'
    ],
    parent: [
        'PARENT1.png', 'PARENT2.png', 'PARENT3.png', // Assure-toi d'avoir PARENT2, PARENT3...
        'PARENT4.png', 'PARENT5.png', 'PARENT6.png' 
    ]
};

const levelConfig = {
    1: { label: 'Épuisé', status: 'Système compromis' },
    2: { label: 'Fatigué', status: 'Connexion instable' },
    3: { label: 'Motivé', status: 'Synchronisation...' },
    4: { label: 'Expert', status: 'Pare-feu actif' },
    5: { label: 'Héros NIRD', status: 'Mode Résistance' },
    6: { label: 'Légende', status: 'Souveraineté Totale' },
};

export default function Avatar() {
    const { gameState } = useGame();
    
    // Sécurise le niveau (entre 1 et 6)
    // On fait -1 car les tableaux commencent à l'index 0
    const level = Math.min(Math.max(gameState.avatarLevel, 1), 6);
    const arrayIndex = level - 1; 

    // Récupère l'ID du rôle (technicien, eleve, etc.)
    const currentRoleId = gameState.role || 'directeur';
    
    // 2. On va chercher le bon nom de fichier dans la liste ci-dessus
    const fileName = avatarFiles[currentRoleId]?.[arrayIndex] || 'DIRECTEUR1.png';
    const imagePath = `/assets/avatars/${fileName}`;
    
    const config = levelConfig[level as keyof typeof levelConfig];
    const selectedRole = roles.find(r => r.id === currentRoleId);

    return (
        <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-4">
                Incarnation : <span className="text-[#00ff88]">{selectedRole?.title}</span>
            </p>

            <div className="hexagon-container relative w-48 h-48 flex items-center justify-center">
                <div className="corner-bracket top-left" />
                <div className="corner-bracket top-right" />
                <div className="corner-bracket bottom-left" />
                <div className="corner-bracket bottom-right" />

                <div
                    className="hexagon-border absolute inset-0 rounded-full border-2 transition-all duration-500"
                    style={{
                        borderColor: level >= 5 ? '#00ff88' : level >= 3 ? 'rgba(0, 255, 136, 0.5)' : 'rgba(0, 255, 136, 0.3)',
                        boxShadow: level >= 5 ? '0 0 20px rgba(0, 255, 136, 0.3)' : 'none'
                    }}
                />

                <div className="hexagon-inner relative w-40 h-40 rounded-full overflow-hidden bg-black/50 border border-white/10">
                    <div className="absolute inset-0 z-20 pointer-events-none rounded-full">
                        <div
                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-20"
                            style={{ animation: 'scan-line 3s linear infinite' }}
                        />
                    </div>

                    <div className={`relative w-full h-full transition-all duration-500 ${level >= 5 ? 'scale-105 filter-none' : 'grayscale opacity-80'}`}>
                        <Image
                            src={imagePath}
                            alt={`Avatar ${currentRoleId} niveau ${level}`}
                            fill
                            style={{ objectFit: 'cover' }} // <--- C'EST CETTE LIGNE QUI FAIT LE ZOOM
                            className="rounded-full"       // Ajouté pour être sûr que l'image reste ronde
                            priority
                            // Correction de l'erreur ligne 91 : on type 'e' ou on supprime la ligne
                            onError={() => console.error("Image introuvable :", imagePath)} 
                        />
                    </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30">
                    <div className={`px-4 py-2 rounded-full bg-[#0d0d0d] border 
                        text-xs font-medium flex items-center gap-2 whitespace-nowrap shadow-xl transition-all duration-300
                        ${level >= 5
                            ? 'border-[#00ff88] text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.5)]'
                            : 'border-[#2a2a2a] text-gray-400'
                        }`}>
                        <div className={`w-2 h-2 rounded-full ${level >= 5 ? 'bg-[#00ff88] animate-pulse' : 'bg-gray-500'}`} />
                        {config.status}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[280px] mt-10">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>{config.label}</span>
                    <span>Niveau {level}/6</span>
                </div>
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#2a2a2a]">
                    <div
                        className="h-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] transition-all duration-700 rounded-full"
                        style={{
                            width: `${(level / 6) * 100}%`,
                            boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                        }}
                    />
                </div>
            </div>

            {level === 6 && (
                <div className="mt-4 px-5 py-2 rounded-full bg-[#00ff88] text-black text-sm font-bold 
                      animate-pulse shadow-[0_0_20px_rgba(0,255,136,0.5)]">
                    🏆 Résistant Légendaire
                </div>
            )}
        </div>
    );
}