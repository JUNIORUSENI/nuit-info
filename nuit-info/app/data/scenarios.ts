import { Scenario } from '../types/game';

export const scenarios: Scenario[] = [
    // ============ DIRECTEUR ============
    {
        id: 'dir-1',
        roleId: 'directeur',
        title: 'La Facture Microsoft',
        situation: 'Le représentant Microsoft vous propose une réduction de 20% si vous signez un contrat cloud pour 5 ans. "C\'est une offre exceptionnelle !" dit-il avec un sourire commercial.',
        choices: [
            {
                id: 'dir-1-a',
                text: 'Signer immédiatement - C\'est une bonne affaire !',
                consequence: 'Vous êtes maintenant dépendant pendant 5 ans. Les données des élèves sont stockées aux USA.',
                impact: { money: -15000, co2: -500, nird: -30 },
                isGoodChoice: false,
            },
            {
                id: 'dir-1-b',
                text: 'Refuser et investir dans la formation aux logiciels libres',
                consequence: 'Autonomie acquise ! Les profs découvrent LibreOffice et adorent.',
                impact: { money: 8000, co2: 200, nird: 40 },
                isGoodChoice: true,
            },
            {
                id: 'dir-1-c',
                text: 'Demander un délai pour étudier les alternatives',
                consequence: 'Sage décision. Vous découvrez que la Forge des Communs propose des solutions gratuites.',
                impact: { money: 3000, co2: 100, nird: 20 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'dir-2',
        roleId: 'directeur',
        title: 'Les 200 PC Condamnés',
        situation: 'Windows 10 arrive en fin de vie. Vos 200 ordinateurs ne supportent pas Windows 11. Le fournisseur propose de tout remplacer pour 180 000€.',
        choices: [
            {
                id: 'dir-2-a',
                text: 'Commander les nouveaux PC - Pas le choix !',
                consequence: '200 PC parfaitement fonctionnels partent à la décharge. Budget explosé.',
                impact: { money: -180000, co2: -4000, nird: -50 },
                isGoodChoice: false,
            },
            {
                id: 'dir-2-b',
                text: 'Contacter le collectif NIRD pour une migration Linux',
                consequence: 'Les PC revivent sous Linux ! Les élèves du club info aident à l\'installation.',
                impact: { money: 175000, co2: 3800, nird: 80 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'dir-3',
        roleId: 'directeur',
        title: 'L\'Audit Numérique',
        situation: 'La région propose un audit gratuit de votre infrastructure numérique. Le rapport recommande de passer à des solutions souveraines.',
        choices: [
            {
                id: 'dir-3-a',
                text: 'Ignorer le rapport - On n\'a pas le temps',
                consequence: 'Quelques mois plus tard, une fuite de données fait scandale...',
                impact: { money: -5000, co2: 0, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'dir-3-b',
                text: 'Lancer un plan de transition numérique responsable',
                consequence: 'Votre établissement devient un exemple régional !',
                impact: { money: 12000, co2: 500, nird: 60 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'dir-4',
        roleId: 'directeur',
        title: 'Le Cloud Éducatif',
        situation: 'Google propose gratuitement Google Workspace for Education. "C\'est gratuit et tout le monde l\'utilise !"',
        choices: [
            {
                id: 'dir-4-a',
                text: 'Accepter - C\'est gratuit après tout',
                consequence: 'Les données des élèves alimentent les algorithmes publicitaires de Google.',
                impact: { money: 0, co2: -200, nird: -40 },
                isGoodChoice: false,
            },
            {
                id: 'dir-4-b',
                text: 'Choisir les Apps Education de l\'État français',
                consequence: 'Données hébergées en France, respect du RGPD, indépendance garantie.',
                impact: { money: 2000, co2: 150, nird: 50 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'dir-5',
        roleId: 'directeur',
        title: 'La Salle Informatique',
        situation: 'La salle info a besoin d\'être rénovée. Deux propositions : équipement neuf classique ou reconditionnement avec Linux.',
        choices: [
            {
                id: 'dir-5-a',
                text: 'Équipement neuf standard (Windows)',
                consequence: 'Classique mais coûteux. Obsolète dans 4 ans.',
                impact: { money: -45000, co2: -800, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'dir-5-b',
                text: 'PC reconditionnés + Linux',
                consequence: 'Économique et écologique ! Les élèves apprennent le vrai fonctionnement d\'un ordinateur.',
                impact: { money: 35000, co2: 600, nird: 70 },
                isGoodChoice: true,
            },
        ],
    },

    // ============ TECHNICIEN ============
    {
        id: 'tech-1',
        roleId: 'technicien',
        title: 'Le PC Mourant',
        situation: 'Un Dell de 2014 rame sous Windows 10. Le directeur veut le jeter. Mais vous, vous voyez du potentiel...',
        choices: [
            {
                id: 'tech-1-a',
                text: 'Le mettre à la poubelle - Il est trop vieux',
                consequence: 'Un PC parfaitement fonctionnel finit à la décharge. 50kg de déchets électroniques.',
                impact: { money: -400, co2: -50, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'tech-1-b',
                text: 'Installer Linux Mint et lui donner une seconde vie',
                consequence: 'Le PC est plus rapide qu\'avant ! Il servira encore 5 ans.',
                impact: { money: 400, co2: 45, nird: 40 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'tech-2',
        roleId: 'technicien',
        title: 'La Migration Massive',
        situation: '50 postes doivent être migrés vers Linux ce week-end. Seul, c\'est impossible.',
        choices: [
            {
                id: 'tech-2-a',
                text: 'Abandonner - C\'est trop de travail',
                consequence: 'Les PC restent sous Windows obsolète. Failles de sécurité garanties.',
                impact: { money: -2000, co2: -100, nird: -30 },
                isGoodChoice: false,
            },
            {
                id: 'tech-2-b',
                text: 'Organiser une "Install Party" avec le club Linux',
                consequence: 'Les élèves adorent ! 50 PC migrés en une journée, ambiance pizza et musique.',
                impact: { money: 5000, co2: 200, nird: 60 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'tech-3',
        roleId: 'technicien',
        title: 'Le Serveur Local',
        situation: 'L\'établissement paie 500€/mois pour un cloud externe. Vous avez une vieille tour qui pourrait servir...',
        choices: [
            {
                id: 'tech-3-a',
                text: 'Continuer avec le cloud - C\'est plus simple',
                consequence: 'Les factures continuent. Les données sont hébergées on ne sait où.',
                impact: { money: -6000, co2: -300, nird: -15 },
                isGoodChoice: false,
            },
            {
                id: 'tech-3-b',
                text: 'Monter un serveur Nextcloud local',
                consequence: 'Indépendance numérique acquise ! Plus de frais mensuels.',
                impact: { money: 6000, co2: 250, nird: 55 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'tech-4',
        roleId: 'technicien',
        title: 'Les Imprimantes Capricieuses',
        situation: 'Les imprimantes HP refusent les cartouches compatibles. Le fabricant veut vous forcer à acheter ses cartouches hors de prix.',
        choices: [
            {
                id: 'tech-4-a',
                text: 'Acheter les cartouches originales',
                consequence: '80€ la cartouche au lieu de 15€. Le budget fond comme neige.',
                impact: { money: -2000, co2: -50, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'tech-4-b',
                text: 'Flasher le firmware et libérer les imprimantes',
                consequence: 'Victoire ! Les cartouches génériques fonctionnent maintenant.',
                impact: { money: 1800, co2: 40, nird: 35 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'tech-5',
        roleId: 'technicien',
        title: 'La Documentation',
        situation: 'Vous avez accumulé des années de savoir-faire. Si vous partez, tout sera perdu.',
        choices: [
            {
                id: 'tech-5-a',
                text: 'Garder les secrets - C\'est mon pouvoir',
                consequence: 'Quand vous serez malade, personne ne saura réparer quoi que ce soit.',
                impact: { money: 0, co2: 0, nird: -25 },
                isGoodChoice: false,
            },
            {
                id: 'tech-5-b',
                text: 'Créer un wiki et former les collègues',
                consequence: 'Le savoir est partagé ! L\'équipe devient autonome.',
                impact: { money: 3000, co2: 100, nird: 50 },
                isGoodChoice: true,
            },
        ],
    },

    // ============ ÉLÈVE ============
    {
        id: 'eleve-1',
        roleId: 'eleve',
        title: 'Le Logiciel de Retouche',
        situation: 'Pour ton projet d\'arts plastiques, il te faut un logiciel de retouche photo. Photoshop coûte 24€/mois...',
        choices: [
            {
                id: 'eleve-1-a',
                text: 'Demander l\'abonnement Photoshop aux parents',
                consequence: 'Ça fait 288€ par an. Et tu es pisté par Adobe.',
                impact: { money: -288, co2: -20, nird: -15 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-1-b',
                text: 'Télécharger GIMP, c\'est gratuit et libre !',
                consequence: 'Tu découvres que GIMP fait tout ce dont tu as besoin. Et c\'est gratuit à vie !',
                impact: { money: 288, co2: 15, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'eleve-2',
        roleId: 'eleve',
        title: 'Le Réseau Social',
        situation: 'Tous tes amis sont sur Instagram et TikTok. Mais tu as entendu parler des problèmes de vie privée...',
        choices: [
            {
                id: 'eleve-2-a',
                text: 'S\'inscrire partout - FOMO oblige !',
                consequence: 'Tes données personnelles nourrissent les algorithmes. Tu passes 4h/jour à scroller.',
                impact: { money: 0, co2: -50, nird: -25 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-2-b',
                text: 'Créer un compte sur Mastodon et limiter le reste',
                consequence: 'Tu découvres une communauté plus saine. Moins de temps perdu !',
                impact: { money: 0, co2: 30, nird: 35 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'eleve-3',
        roleId: 'eleve',
        title: 'Le Travail Collaboratif',
        situation: 'Ton groupe de projet utilise Google Docs. Mais le prof a mentionné des alternatives souveraines...',
        choices: [
            {
                id: 'eleve-3-a',
                text: 'Rester sur Google - Tout le monde connaît',
                consequence: 'Pratique, mais Google analyse tous vos documents.',
                impact: { money: 0, co2: -15, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-3-b',
                text: 'Proposer Cryptpad ou les Pads de l\'éducation nationale',
                consequence: 'Le prof est impressionné ! Bonus pour l\'initiative.',
                impact: { money: 0, co2: 10, nird: 40 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'eleve-4',
        roleId: 'eleve',
        title: 'L\'Ordinateur pour les Études',
        situation: 'Tu as besoin d\'un nouvel ordi pour le lycée. MacBook ou PC gamer, ton cœur balance...',
        choices: [
            {
                id: 'eleve-4-a',
                text: 'MacBook dernier cri - Pour le style !',
                consequence: 'Joli mais irréparable. Dans 3 ans, il sera obsolète.',
                impact: { money: -1500, co2: -80, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-4-b',
                text: 'ThinkPad reconditionné avec Linux',
                consequence: 'Indestructible, réparable, et tu apprends plein de trucs !',
                impact: { money: 1200, co2: 60, nird: 50 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'eleve-5',
        roleId: 'eleve',
        title: 'Le Code Source',
        situation: 'Ton projet de NSI est terminé. Tu pourrais le garder secret ou le partager...',
        choices: [
            {
                id: 'eleve-5-a',
                text: 'Garder le code pour moi - C\'est mon travail',
                consequence: 'Personne n\'en profite. L\'an prochain, tu auras oublié comment ça marche.',
                impact: { money: 0, co2: 0, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-5-b',
                text: 'Le publier sur la Forge des Communs sous licence libre',
                consequence: 'D\'autres élèves améliorent ton code ! Tu es mentionné comme contributeur.',
                impact: { money: 0, co2: 5, nird: 45 },
                isGoodChoice: true,
            },
        ],
    },

    // ============ PARENT ============
    {
        id: 'parent-1',
        roleId: 'parent',
        title: 'Le Dilemme de Noël',
        situation: 'Votre enfant veut un ordinateur pour le collège. Les catalogues vantent les dernières nouveautés à 800€...',
        choices: [
            {
                id: 'parent-1-a',
                text: 'Acheter le dernier modèle à crédit',
                consequence: 'Stress financier. Et dans 3 ans, l\'ordi rame déjà.',
                impact: { money: -800, co2: -60, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'parent-1-b',
                text: 'Récupérer l\'ancien PC du bureau et installer Linux ensemble',
                consequence: 'Moment de partage magique ! Votre enfant apprend vraiment l\'informatique.',
                impact: { money: 800, co2: 55, nird: 50 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'parent-2',
        roleId: 'parent',
        title: 'Le Contrôle Parental',
        situation: 'Vous voulez protéger vos enfants sur Internet. Les solutions commerciales coûtent 100€/an...',
        choices: [
            {
                id: 'parent-2-a',
                text: 'Acheter Norton Family ou Qustodio',
                consequence: 'Ça marche, mais ça scanne aussi TOUTES les activités de vos enfants pour les revendre.',
                impact: { money: -100, co2: -10, nird: -15 },
                isGoodChoice: false,
            },
            {
                id: 'parent-2-b',
                text: 'Configurer un DNS familial avec OpenDNS ou Pi-hole',
                consequence: 'Gratuit, respectueux de la vie privée, et vous apprenez des choses !',
                impact: { money: 100, co2: 8, nird: 40 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'parent-3',
        roleId: 'parent',
        title: 'La Suite Office',
        situation: 'L\'école demande que les devoirs soient rendus au format Word. Microsoft 365 coûte 99€/an...',
        choices: [
            {
                id: 'parent-3-a',
                text: 'S\'abonner à Microsoft 365',
                consequence: 'Ça fonctionne mais c\'est un abonnement à vie.',
                impact: { money: -99, co2: -15, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'parent-3-b',
                text: 'Installer LibreOffice et exporter en .docx',
                consequence: 'Gratuit à vie ! Et ça fait exactement la même chose.',
                impact: { money: 99, co2: 12, nird: 35 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'parent-4',
        roleId: 'parent',
        title: 'Le Smartphone de Rentrée',
        situation: 'Votre ado réclame le dernier iPhone. Tous ses copains l\'ont, dit-il...',
        choices: [
            {
                id: 'parent-4-a',
                text: 'Céder à la pression - Il sera heureux',
                consequence: '1200€ plus tard, le téléphone aura un écran cassé dans 6 mois.',
                impact: { money: -1200, co2: -40, nird: -25 },
                isGoodChoice: false,
            },
            {
                id: 'parent-4-b',
                text: 'Proposer un Fairphone reconditionné',
                consequence: 'Réparable, éthique, et votre ado apprend la valeur des choses.',
                impact: { money: 900, co2: 35, nird: 45 },
                isGoodChoice: true,
            },
        ],
    },
    {
        id: 'parent-5',
        roleId: 'parent',
        title: 'L\'Imprimante Familiale',
        situation: 'L\'imprimante HP affiche "cartouche non reconnue" alors qu\'elle est neuve. Le service client propose de racheter des originales.',
        choices: [
            {
                id: 'parent-5-a',
                text: 'Commander les cartouches HP officielles',
                consequence: '50€ la cartouche. Le business model des imprimantes vous piège.',
                impact: { money: -150, co2: -20, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'parent-5-b',
                text: 'Acheter une Brother sans DRM et des génériques',
                consequence: 'L\'imprimante coûte le même prix mais les cartouches sont 5x moins chères.',
                impact: { money: 200, co2: 15, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },
];

export function getScenariosByRole(roleId: string): Scenario[] {
    return scenarios.filter(s => s.roleId === roleId);
}
