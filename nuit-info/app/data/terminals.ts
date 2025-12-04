import { TerminalChallenge } from '../types/game';

export type { TerminalChallenge };

export const terminalChallenges: TerminalChallenge[] = [
    {
        id: 'term-1',
        roleId: 'technicien',
        title: 'La Résurrection',
        problem: 'Ce vieux PC de 2015 est trop lent pour Windows 11. Il va partir à la poubelle...',
        mission: 'Voir ce qui consomme toute la mémoire et les ressources.',
        expectedCommand: 'htop',
        hint: 'Une commande pour voir les processus en temps réel...',
        successMessage: 'Parfait ! Tu vois maintenant chaque processus. Le coupable : un antivirus qui mange 80% de la RAM !',
        lesson: '💡 htop permet de voir l\'intérieur du moteur. Avec Linux, TU as le contrôle.',
        impact: { money: 400, co2: 45, nird: 30 },
    },
    {
        id: 'term-2',
        roleId: 'eleve',
        title: 'L\'Installation Express',
        problem: 'Il te faut un logiciel de retouche photo pour le devoir d\'Arts Plastiques. La licence Adobe coûte 24€/mois...',
        mission: 'Installer une alternative libre et gratuite immédiatement.',
        expectedCommand: 'sudo apt install gimp',
        hint: 'apt permet d\'installer des logiciels. Le logiciel s\'appelle GIMP...',
        successMessage: 'GIMP s\'installe en quelques secondes ! Pas de compte, pas de pub, pas d\'abonnement.',
        lesson: '💡 Sous Linux, on installe des logiciels sûrs en une ligne de commande. C\'est magique.',
        impact: { money: 288, co2: 15, nird: 35 },
    },
    {
        id: 'term-3',
        roleId: 'directeur',
        title: 'La Grande Mise à Jour',
        problem: 'Les 200 PC du lycée ont besoin d\'être mis à jour. Windows Update prendrait des heures...',
        mission: 'Lancer la mise à jour de tous les logiciels en une commande.',
        expectedCommand: 'sudo apt upgrade',
        hint: 'apt upgrade met à jour tous les logiciels installés...',
        successMessage: 'Tous les logiciels sont à jour ! Sécurité maximale, sans redémarrage intempestif.',
        lesson: '💡 Sous Linux, les mises à jour sont rapides, silencieuses et respectent votre travail.',
        impact: { money: 5000, co2: 200, nird: 50 },
    },
    {
        id: 'term-4',
        roleId: 'parent',
        title: 'Le Nettoyage de Printemps',
        problem: 'L\'ordinateur familial est plein de fichiers temporaires et de caches inutiles.',
        mission: 'Nettoyer les paquets inutilisés et libérer de l\'espace.',
        expectedCommand: 'sudo apt autoremove',
        hint: 'autoremove nettoie les dépendances orphelines...',
        successMessage: '2.5 Go libérés ! Le PC respire à nouveau.',
        lesson: '💡 autoremove supprime proprement les logiciels dont on n\'a plus besoin.',
        impact: { money: 50, co2: 10, nird: 20 },
    },
    {
        id: 'term-5',
        roleId: 'technicien',
        title: 'Le Réseau Mystérieux',
        problem: 'Un appareil inconnu utilise la bande passante. Qui squatte le réseau ?',
        mission: 'Scanner le réseau local pour identifier les appareils connectés.',
        expectedCommand: 'nmap -sn 192.168.1.0/24',
        hint: 'nmap scanne le réseau. -sn fait un ping scan. Le réseau local est souvent en 192.168.1.x...',
        successMessage: 'Trouvé ! C\'est le vieux Chromecast oublié qui télécharge des mises à jour.',
        lesson: '💡 nmap est l\'outil des administrateurs réseau. Connais ton réseau !',
        impact: { money: 100, co2: 5, nird: 25 },
    },
    {
        id: 'term-6',
        roleId: 'eleve',
        title: 'La Recherche de Fichiers',
        problem: 'Tu as perdu ton exposé quelque part dans tes dossiers. Il s\'appelait "exposé_histoire"...',
        mission: 'Retrouver le fichier perdu dans tout le système.',
        expectedCommand: 'find / -name "*exposé*"',
        hint: 'find cherche des fichiers. Le / cherche partout. -name filtre par nom...',
        successMessage: 'Fichier trouvé dans ~/Documents/2024/Rendu_final/ ! Ouf !',
        lesson: '💡 find est ultra puissant pour retrouver n\'importe quel fichier.',
        impact: { money: 0, co2: 2, nird: 15 },
    },
];

export function getTerminalsByRole(roleId: string): TerminalChallenge[] {
    return terminalChallenges.filter(t => t.roleId === roleId);
}

export function getRandomTerminalForRole(roleId: string): TerminalChallenge | null {
    const terminals = getTerminalsByRole(roleId);
    if (terminals.length === 0) {
        // Retourner un terminal générique si aucun n'est disponible pour ce rôle
        return terminalChallenges[Math.floor(Math.random() * terminalChallenges.length)];
    }
    return terminals[Math.floor(Math.random() * terminals.length)];
}
