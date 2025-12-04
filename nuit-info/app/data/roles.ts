import { Role } from '../types/game';

export const roles: Role[] = [
    {
        id: 'directeur',
        title: 'Le Directeur',
        subtitle: 'Le Stratège',
        emoji: '🎓',
        description: 'Gérez le budget de l\'établissement et résistez à la pression commerciale des Big Tech.',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        id: 'technicien',
        title: 'Le Technicien',
        subtitle: 'Le Druide',
        emoji: '🔧',
        description: 'Faites des miracles avec du vieux matériel. Réparez plutôt que jeter !',
        color: 'from-emerald-500 to-teal-600',
    },
    {
        id: 'eleve',
        title: 'L\'Élève',
        subtitle: 'Le Futur',
        emoji: '🎒',
        description: 'Réussissez vos études tout en protégeant votre vie privée des Big Tech.',
        color: 'from-amber-500 to-orange-600',
    },
    {
        id: 'parent',
        title: 'Le Parent',
        subtitle: 'Le Gardien',
        emoji: '🏠',
        description: 'Gérez le budget familial et protégez vos enfants du pistage publicitaire.',
        color: 'from-pink-500 to-rose-600',
    },
];
