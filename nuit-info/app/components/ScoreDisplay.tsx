'use client';

import { useGame } from '../contexts/GameContext';

export default function ScoreDisplay() {
    const { gameState } = useGame();
    const { score } = gameState;

    const stats = [
        {
            label: 'Économies',
            value: score.money,
            unit: '€',
            isPositive: score.money >= 0,
            icon: '💰',
        },
        {
            label: 'CO₂ évité',
            value: score.co2,
            unit: 'kg',
            isPositive: score.co2 >= 0,
            icon: '🌍',
        },
        {
            label: 'Points NIRD',
            value: score.nird,
            unit: '',
            isPositive: score.nird >= 0,
            icon: '⚡',
        },
    ];

    return (
        <div className="bg-[#1a1a1a] rounded-3xl border border-[#2a2a2a] p-5">
            <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Statistiques</h3>
            <div className="space-y-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-[#0d0d0d] border border-[#2a2a2a] 
                            flex items-center justify-center text-lg">
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">{stat.label}</p>
                                <p className={`font-bold text-lg ${stat.isPositive ? 'text-[#00ff88]' : 'text-red-400'}`}>
                                    {stat.value >= 0 ? '+' : ''}{stat.value.toLocaleString('fr-FR')}{stat.unit}
                                </p>
                            </div>
                        </div>
                        {/* Mini graphique */}
                        <div className="w-16 h-6 relative">
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2a2a2a]" />
                            <svg className="w-full h-full" viewBox="0 0 64 24">
                                <path
                                    d={`M0,${stat.isPositive ? 20 : 12} Q16,${stat.isPositive ? 8 : 18} 32,${stat.isPositive ? 6 : 16} T64,${stat.isPositive ? 4 : 20}`}
                                    fill="none"
                                    stroke={stat.isPositive ? '#00ff88' : '#ef4444'}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
