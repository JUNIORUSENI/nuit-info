'use client';

import Link from 'next/link';
import { roles } from '../data/roles';

export default function RoleSelector() {
    // Mapping des rôles vers leurs routes
    const roleRoutes: Record<string, string> = {
        'directeur': '/game/directeur',
        'technicien': '/game/technicien',
        'eleve': '/game/eleve',
        'parent': '/game/parent',
    };

    return (
        <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center p-6">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center justify-between bg-[#0d0d0d]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00ff88] flex items-center justify-center text-black font-bold text-lg">
                        N
                    </div>
                    <span className="text-[#00ff88] font-bold text-xl">Opération N.I.R.D</span>
                </div>
            </header>

            {/* Contenu principal */}
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">

                {/* Colonne gauche - Sélection du rôle */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Choisis ton <span className="text-[#00ff88]">Avatar</span>
                        </h1>
                        <p className="text-gray-400">
                            Sélectionne un rôle pour commencer ta mission de résistance numérique.
                        </p>
                    </div>

                    {/* Cartes des rôles */}
                    <div className="space-y-4">
                        {roles.map((role) => (
                            <Link
                                key={role.id}
                                href={roleRoutes[role.id] || '/game'}
                                className="block w-full text-left p-5 rounded-3xl bg-[#1a1a1a] border border-[#2a2a2a] 
                                         hover:border-[#00ff88] hover:bg-[#1a1a1a]/80
                                         transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#0d0d0d] border border-[#2a2a2a] 
                                                flex items-center justify-center text-2xl">
                                        {role.emoji}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold text-lg">
                                            {role.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{role.subtitle}</p>
                                    </div>
                                    <svg
                                        className="w-5 h-5 text-gray-600"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Colonne droite - Avatar */}
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-500 text-sm mb-6">
                        Incarnation : <span className="text-[#00ff88]">En attente</span>
                    </p>

                    {/* Avatar circulaire */}
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 rounded-full border-2 border-[#00ff88] opacity-50" />
                        <div className="absolute inset-4 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                            <span className="text-6xl opacity-30">🤖</span>
                        </div>
                        {/* Badge */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2">
                            <div className="px-4 py-2 rounded-full bg-[#0d0d0d] border border-[#00ff88] 
                                        text-[#00ff88] text-xs font-medium flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                                IA Connectée
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
