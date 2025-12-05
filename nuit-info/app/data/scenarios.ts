import { Scenario } from '../types/game';

export const scenarios: Scenario[] = [
    // ============ DIRECTEUR ============
    
    // Q1 : L'ULTIMATUM WINDOWS (Budget vs Vision)
    {
        id: 'dir-1',
        roleId: 'directeur',
        title: 'L\'Ultimatum Windows',
        situation: 'Fin du support de Windows 10. Vos 200 PC fonctionnent encore physiquement, mais Microsoft déclare qu\'ils sont "obsolètes" pour Windows 11. Le commercial vous met la pression pour tout changer.',
        choices: [
            {
                id: 'dir-1-a',
                text: 'Signer pour 200 PC neufs (-20% ce soir)',
                consequence: 'Le budget fond. Une benne à ordures pleine de PC fonctionnels trône dans la cour.',
                impact: { money: -30000, co2: -4000, nird: -10 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'dir-1-b',
                text: 'Payer l\'extension de support (ESU) pour gagner 1 an',
                consequence: 'Vous gagnez du temps, mais vous perdez de l\'argent à fond perdu. L\'école ne progresse pas.',
                impact: { money: -5000, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false, // Pas "Good" mais pas catastrophique
            },
            {
                id: 'dir-1-c',
                text: 'Refuser et installer Linux sur le parc actuel',
                consequence: 'Budget sauvé ! Le matériel est prolongé de 5 ans. L\'école commence sa transition verte.',
                impact: { money: 0, co2: 3800, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },
   // Q2 : LA FACTURE ÉLECTRIQUE
    {
        id: 'dir-2',
        roleId: 'directeur',
        title: 'Surcharge Système',
        // type: 'terminal',  <-- LIGNE SUPPRIMÉE
        situation: 'La facture d\'énergie explose. Les serveurs chauffent. Quelle commande lancez-vous pour nettoyer les processus ?',
        choices: [
            {
                id: 'dir-2-a',
                text: 'sudo rm -rf / (Tout effacer)', 
                consequence: 'CATASTROPHE ! Vous avez tout effacé. L\'école est à l\'arrêt.',
                impact: { money: -10000, co2: 0, nird: -60 },
                isGoodChoice: false,
            },
            {
                id: 'dir-2-b',
                text: 'ls -la (Lister les fichiers)',
                consequence: 'Vous listez les fichiers... C\'est bien rangé, mais ça ne règle rien.',
                impact: { money: 0, co2: -100, nird: 0 },
                isGoodChoice: false,
            },
            {
                id: 'dir-2-c',
                text: 'htop (Voir les processus)',
                consequence: 'Bingo ! Vous identifiez le processus gourmand et le tuez.',
                impact: { money: 2000, co2: 500, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },

    // Q3 : LES DONNÉES ÉLÈVES (Souveraineté)
    {
        id: 'dir-3',
        roleId: 'directeur',
        title: 'Le Cloud Gratuit ?',
        situation: 'Une GAFAM propose d\'héberger gratuitement tous les dossiers scolaires sur leur "Cloud Éducation". Les serveurs sont en Californie.',
        choices: [
            {
                id: 'dir-3-a',
                text: 'Accepter (C\'est gratuit et pratique)',
                consequence: 'Les données sont pillées pour entraîner des IA. Des caméras de surveillance virtuelles apparaissent.',
                impact: { money: 0, co2: -200, nird: -10 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'dir-3-b',
                text: 'Accepter mais crypter les données',
                consequence: 'C\'est sécurisé, mais très lourd à gérer pour les équipes au quotidien.',
                impact: { money: -1000, co2: 0, nird: 10 }, // Neutral
                isGoodChoice: true,
            },
            {
                id: 'dir-3-c',
                text: 'Refuser et héberger en local (Nextcloud)',
                consequence: 'Souveraineté totale. Vos élèves sont protégés par un bouclier numérique. RGPD respecté.',
                impact: { money: -2000, co2: 100, nird: 30 }, // Good (Coût initial mais gain NIRD)
                isGoodChoice: true,
            },
        ],
    },

    // Q4 : LE MATÉRIEL CASSÉ (Réemploi)
    {
        id: 'dir-4',
        roleId: 'directeur',
        title: 'Obsolescence Programmée',
        situation: '30 tablettes ont la batterie HS. Le fabricant déclare qu\'elles sont "irréparables" et propose une reprise pour du neuf.',
        choices: [
            {
                id: 'dir-4-a',
                text: 'Accepter l\'offre de reprise',
                consequence: 'Vous alimentez la montagne de déchets électroniques. Solution de facilité.',
                impact: { money: -5000, co2: -1000, nird: -10 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'dir-4-b',
                text: 'Stocker dans un placard en attendant',
                consequence: 'Les élèves n\'ont rien lundi. C\'est un déchet dormant.',
                impact: { money: 0, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'dir-4-c',
                text: 'Atelier Réparation (Batteries génériques)',
                consequence: 'Matériel sauvé ! Le club info apprend à réparer. Esprit "Maker" activé.',
                impact: { money: -500, co2: 800, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // Q5 : LA CONNEXION (Sobriété)
    {
        id: 'dir-5',
        roleId: 'directeur',
        title: 'La Pression du Wifi',
        situation: 'Les élèves et parents réclament du Wifi ultra-rapide partout, y compris dans la cour de récré et à la cantine.',
        choices: [
            {
                id: 'dir-5-a',
                text: 'Installer du Wifi 6 partout à fond',
                consequence: 'Les élèves deviennent des zombies sur leurs écrans à la récré. Plus de lien social.',
                impact: { money: -8000, co2: -500, nird: -10 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'dir-5-b',
                text: 'Wifi partout mais coupé le midi',
                consequence: 'Une solution technique autoritaire qui contourne le problème éducatif.',
                impact: { money: -8000, co2: 0, nird: 10 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'dir-5-c',
                text: 'Créer des "Zones Blanches" conviviales',
                consequence: 'La cour reste un lieu de déconnexion. Des arbres poussent, les élèves discutent.',
                impact: { money: 0, co2: 200, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // Q6 : VISION 2030 (Boss Final)
    {
        id: 'dir-6',
        roleId: 'directeur',
        title: 'L\'Avenir de l\'École',
        situation: 'Le Ministère demande votre plan stratégique pour 2030. Quelle identité pour votre établissement ?',
        choices: [
            {
                id: 'dir-6-a',
                text: 'École "Smart-City" (Tout IA & GAFAM)',
                consequence: 'L\'école devient une usine futuriste froide. Vous n\'êtes plus qu\'un gestionnaire d\'abonnements.',
                impact: { money: -50000, co2: -2000, nird: -10 }, // Bad End
                isGoodChoice: false,
            },
            {
                id: 'dir-6-b',
                text: 'École Hybride (Au cas par cas)',
                consequence: 'L\'école tourne, mais c\'est toujours la galère budgétaire. Pas de véritable identité.',
                impact: { money: -10000, co2: -500, nird: 10 }, // Neutral End
                isGoodChoice: false,
            },
            {
                id: 'dir-6-c',
                text: 'Village NIRD (Autonome & Libre)',
                consequence: 'Votre établissement est un modèle ! Élèves citoyens, budget excédentaire, label Or.',
                impact: { money: 20000, co2: 5000, nird: 50 }, // Good End
                isGoodChoice: true,
            },
        ],
    },

    // ============ TECHNICIEN ============

    // Q1 : LE MUR DU MATÉRIEL (TPM 2.0)
    {
        id: 'tech-1',
        roleId: 'technicien',
        title: 'Windows 11 Incompatible',
        situation: 'Microsoft impose la puce TPM 2.0 pour Windows 11. 80% de votre parc est déclaré "incompatible" alors que les PC sont puissants.',
        choices: [
            {
                id: 'tech-1-a',
                text: 'Forcer l\'installation (Hack Registre)',
                consequence: 'Ça passe, mais c\'est instable. Les futures mises à jour feront planter les PC un par un.',
                impact: { money: -2000, co2: 0, nird: -10 }, // Bad (Dette technique)
                isGoodChoice: false,
            },
            {
                id: 'tech-1-b',
                text: 'Rester sous Windows 10 (Attentisme)',
                consequence: 'Vous repoussez le problème. Dans 6 mois, à la fin du support, ce sera la panique totale.',
                impact: { money: 0, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'tech-1-c',
                text: 'Passer les PC sous Linux (Xubuntu)',
                consequence: 'Problème matériel contourné ! Les PC sont rapides, sécurisés et repartis pour 5 ans.',
                impact: { money: 50000, co2: 2000, nird: 30 }, // Good (Matériel sauvé)
                isGoodChoice: true,
            },
        ],
    },

    // Q2 : LE BSOD DU JOUR D'EXAMEN (La Bascule)
    {
        id: 'tech-2',
        roleId: 'technicien',
        title: 'Panne Critique Serveur',
        situation: 'Matin des examens. Le serveur Windows crash (Écran Bleu). Il redémarre en boucle. Les profs attendent les sujets PDF dans 10 minutes.',
        choices: [
            {
                id: 'tech-2-a',
                text: 'Tenter une "Réparation Automatique" Windows',
                consequence: 'Ça tourne dans le vide pendant 1 heure. Les examens sont annulés. Vous passez pour un incompétent.',
                impact: { money: 0, co2: 0, nird: -20 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'tech-2-b',
                text: 'Appeler le support Dell (Délai 48h)',
                consequence: 'Vous êtes inutile sur le moment. La crise n\'est pas gérée.',
                impact: { money: -500, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'tech-2-c',
                text: 'Booter sur clé USB Linux & Sauver les fichiers',
                consequence: 'Héroïque ! Vous accédez au disque, récupérez les PDF et imprimez. Linux a sauvé la journée.',
                impact: { money: 0, co2: 100, nird: 40 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // Q3 : LE DÉPLOIEMENT MASSIF (Challenge Terminal)
    {
        id: 'tech-3',
        roleId: 'technicien',
        title: 'Automatisation',
        // type: 'terminal', <-- SUPPRIMÉ
        situation: 'Vous devez installer LibreOffice sur 50 machines. Quelle commande choisissez-vous ?',
        choices: [
            {
                id: 'tech-3-a',
                text: 'sudo chmod -R 777 /', 
                consequence: 'MALHEUR ! Vous avez cassé la sécurité de tout le parc.',
                impact: { money: -20000, co2: 0, nird: -60 },
                isGoodChoice: false,
            },
            {
                id: 'tech-3-b',
                text: 'Boucle SSH manuelle', 
                consequence: 'Ça marche, mais c\'est lent et fragile.',
                impact: { money: 0, co2: 0, nird: 10 },
                isGoodChoice: false,
            },
            {
                id: 'tech-3-c',
                text: 'ansible-playbook deploy.yml', 
                consequence: 'Propre. Déploiement parallèle et robuste.',
                impact: { money: 5000, co2: 200, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },

    // Q4 : LE DILEMME DE L'IMPRIMANTE (Sacrifice)
    {
        id: 'tech-4',
        roleId: 'technicien',
        title: 'Pilote Manquant',
        situation: 'La grosse photocopieuse fonctionne, mais le pilote Windows 11 n\'existe pas. Sous Linux, le pilote Libre ne gère pas l\'agrafage auto.',
        choices: [
            {
                id: 'tech-4-a',
                text: 'Louer une neuve (5000€/an)',
                consequence: 'Matériel fonctionnel jeté pour du confort. Obsolescence validée.',
                impact: { money: -5000, co2: -500, nird: -10 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'tech-4-b',
                text: 'Monter un serveur d\'impression Windows',
                consequence: 'Usine à gaz. Vous gaspillez des ressources serveur juste pour une fonctionnalité.',
                impact: { money: -1000, co2: -100, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'tech-4-c',
                text: 'Utiliser le pilote Libre (Sans agrafage)',
                consequence: 'Machine sauvée ! L\'administration râle un peu pour l\'agrafage manuel, mais le budget est préservé.',
                impact: { money: 5000, co2: 300, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // Q5 : RÉSEAU SATURÉ (Challenge Terminal)
    {
        id: 'tech-5',
        roleId: 'technicien',
        title: 'Lag Réseau',
        // type: 'terminal', <-- SUPPRIMÉ
        situation: 'Le réseau est saturé. Quelle commande pour analyser ?',
        choices: [
            {
                id: 'tech-5-a',
                text: 'sudo iptables -F (Vider pare-feu)', 
                consequence: 'Le réseau accélère... car les virus entrent librement !',
                impact: { money: -5000, co2: 0, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'tech-5-b',
                text: 'Reboot physique du switch', 
                consequence: 'Ça coupe tout le monde et le problème revient.',
                impact: { money: 0, co2: 0, nird: 0 },
                isGoodChoice: false,
            },
            {
                id: 'tech-5-c',
                text: 'sudo iftop -i eth0 (Monitoring)', 
                consequence: 'Vous identifiez et bloquez la source du problème. Chirurgical.',
                impact: { money: 0, co2: 100, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },
    // Q6 : ARCHITECTURE FUTURE (Boss Final)
    {
        id: 'tech-6',
        roleId: 'technicien',
        title: 'Stratégie 2030',
        situation: 'Le Rectorat vous demande votre vision technique pour l\'avenir de l\'infrastructure.',
        choices: [
            {
                id: 'tech-6-a',
                text: 'Tout Cloud (AWS/Azure)',
                consequence: 'Perte de souveraineté. Vous devenez un simple gestionnaire de factures GAFAM.',
                impact: { money: -20000, co2: -1000, nird: -20 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'tech-6-b',
                text: 'Serveurs Windows Locaux',
                consequence: 'C\'est lourd et cher en licences, mais vous avez l\'habitude. Pas d\'innovation.',
                impact: { money: -10000, co2: -500, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'tech-6-c',
                text: 'Infra Hybride Libre & Reconditionnée',
                consequence: 'Modèle résilient ! Auto-hébergement, scripts d\'automatisation, matériel durable. Vous êtes l\'Architecte.',
                impact: { money: 15000, co2: 2000, nird: 50 }, // Good
                isGoodChoice: true,
            },
        ],
    },

// ============ ÉLÈVE ============

    // Q1 : LE CHOIX DU MATÉRIEL (Branchement)
    {
        id: 'eleve-1',
        roleId: 'eleve',
        title: 'La Rentrée',
        situation: 'Ton ordinateur portable a 5 ans et rame énormément. Tes parents n\'ont pas le budget pour un neuf. Que fais-tu ?',
        choices: [
            {
                id: 'eleve-1-a',
                text: 'Faire une crise pour un MacBook à crédit',
                consequence: 'Tes parents s\'endettent. Tu as un bel objet, mais tu es enfermé dans l\'écosystème Apple.',
                impact: { money: -1500, co2: -200, nird: -20 }, // Bad (Dette)
                isGoodChoice: false,
                
            },
            {
                id: 'eleve-1-b',
                text: 'Garder le vieux Windows qui rame',
                consequence: 'C\'est gratuit, mais tu perds du temps à chaque clic. C\'est frustrant.',
                impact: { money: 0, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
                
            },
            {
                id: 'eleve-1-c',
                text: 'Installer Linux (Xubuntu) dessus',
                consequence: 'Le PC redémarre en 10 secondes ! C\'est gratuit, rapide et tu apprends l\'informatique.',
                impact: { money: 0, co2: 200, nird: 40 }, // Good
                isGoodChoice: true,
                
        ],
    },

   // Q2 : LE SERVICE RENDU
    {
        id: 'eleve-2',
        roleId: 'eleve',
        title: 'Le Hack de Jade',
        // type: 'terminal', <-- SUPPRIMÉ
        situation: 'Le PC de Jade est bloqué. Elle te demande de lancer la mise à jour. Tu cliques sur quoi ?',
        choices: [
            {
                id: 'eleve-2-a',
                text: 'sudo rm -rf /', 
                consequence: 'HORREUR ! Tu as effacé tout son disque dur. Elle te déteste.',
                impact: { money: 0, co2: 0, nird: -60 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-2-b',
                text: 'echo "Update please"', 
                consequence: 'Rien ne se passe... La honte.',
                impact: { money: 0, co2: 0, nird: 0 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-2-c',
                text: 'sudo apt update && upgrade', 
                consequence: 'Matrix Style ! Le PC se met à jour. L\'exposé est sauvé.',
                impact: { money: 0, co2: 0, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },

    // Q3 : LE FORMAT DE FICHIER (Inclusion)
    {
        id: 'eleve-3',
        roleId: 'eleve',
        title: 'Travail de Groupe',
        situation: 'Tes camarades utilisent tous Word (payant) et t\'envoient des fichiers .docx qui cassent ta mise en page.',
        choices: [
            {
                id: 'eleve-3-a',
                text: 'Télécharger un crack de Word',
                consequence: 'Tu chopes un Ransomware qui crypte tes photos. Mauvaise idée.',
                impact: { money: -200, co2: 0, nird: -20 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'eleve-3-b',
                text: 'Utiliser Word Online (Gratuit)',
                consequence: 'Ça dépanne, mais Microsoft analyse tout ce que tu écris pour ses IA.',
                impact: { money: 0, co2: 0, nird: -10 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'eleve-3-c',
                text: 'Les convaincre d\'utiliser LibreOffice',
                consequence: 'Victoire ! Vous passez au format ouvert .odt. Plus de problème de compatibilité.',
                impact: { money: 0, co2: 0, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // ============ Q4 : VARIATIONS GAMING (À filtrer selon Q1) ============

    // Q4 - VARIATION LINUX
    {
        id: 'eleve-4-linux',
        roleId: 'eleve',
        title: 'Session Gaming (Linux)',
        situation: 'Tes potes t\'invitent à jouer. "Linux c\'est nul, tu peux pas jouer avec nous !"',
        
        choices: [
            {
                id: 'eleve-4-linux-a',
                text: 'Réinstaller Windows piraté',
                consequence: 'Retour à la case départ. Tu perds ton indépendance pour un jeu.',
                impact: { money: 0, co2: 0, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-4-linux-b',
                text: 'Utiliser Proton/Steam Play',
                consequence: 'Ça marche ! Tu prouves à tout le monde que Linux fait tourner les jeux AAA.',
                impact: { money: 0, co2: 0, nird: 30 },
                isGoodChoice: true,
            },
            {
                id: 'eleve-4-linux-c',
                text: 'Ne pas jouer (Triste)',
                consequence: 'Tu restes seul ce soir-là. Dommage.',
                impact: { money: 0, co2: 0, nird: 0 },
                isGoodChoice: false,
            },
        ],
    },
    // Q4 - VARIATION MAC
    {
        id: 'eleve-4-mac',
        roleId: 'eleve',
        title: 'Session Gaming (Mac)',
        situation: 'Le jeu de tes potes n\'est pas compatible Mac. Ta machine à 1500€ ne sert à rien.',
       
        choices: [
            {
                id: 'eleve-4-mac-a',
                text: 'Payer un abonnement Cloud Gaming',
                consequence: 'Encore payer... Tu es une vache à lait.',
                impact: { money: -240, co2: -50, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-4-mac-b',
                text: 'Revendre le Mac pour un PC Linux',
                consequence: 'Le Pivot ! Tu as compris que le matériel doit servir l\'usage.',
                impact: { money: 500, co2: 100, nird: 30 },
                isGoodChoice: true,
            },
            {
                id: 'eleve-4-mac-c',
                text: 'Essayer d\'émuler (3 FPS)',
                consequence: 'Injouable. Ton Mac brûle.',
                impact: { money: 0, co2: -10, nird: 0 },
                isGoodChoice: false,
            },
        ],
    },
    // Q4 - VARIATION WINDOWS
    {
        id: 'eleve-4-windows',
        roleId: 'eleve',
        title: 'Session Gaming (Vieux PC)',
        situation: 'Ton vieux Windows lague trop. Tes potes hurlent : "Tu nous fais perdre !"',
        
        choices: [
            {
                id: 'eleve-4-win-a',
                text: 'Acheter un PC Gamer neuf (1200€)',
                consequence: 'Obsolescence validée. Tu jettes un PC réparable.',
                impact: { money: -1200, co2: -500, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-4-win-b',
                text: 'Installer Linux en Dual-Boot',
                consequence: 'Tu gagnes des FPS car l\'OS est léger. Tu sauves la partie et ton PC !',
                impact: { money: 0, co2: 100, nird: 30 },
                isGoodChoice: true,
            },
            {
                id: 'eleve-4-win-c',
                text: 'Jouer en 360p et souffrir',
                consequence: 'Expérience horrible. Tu ne t\'amuses pas.',
                impact: { money: 0, co2: 0, nird: 0 },
                isGoodChoice: false,
            },
        ],
    },

    // ============ Q5 : VARIATIONS WIFI (À filtrer selon Q1) ============

    // Q5 - VARIATION LINUX (Déjà sécurisé)
    {
        id: 'eleve-5-linux',
        roleId: 'eleve',
        title: 'Wifi Public (Linux)',
        situation: 'Au fast-food, le Wifi demande tes données personnelles. Tu es sous Linux.',
        
        choices: [
            {
                id: 'eleve-5-lin-a',
                text: 'Tout accepter quand même',
                consequence: 'Dommage, tu avais un OS sûr mais tu donnes tes infos au portail Wifi.',
                impact: { money: 0, co2: 0, nird: -10 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-5-lin-b',
                text: 'Partage de connexion 4G',
                consequence: 'Autonomie totale. Tu contournes le tracking du fast-food.',
                impact: { money: 0, co2: 0, nird: 30 },
                isGoodChoice: true,
            },
            {
                id: 'eleve-5-lin-c',
                text: 'Utiliser un faux email',
                consequence: 'Malin, mais fastidieux à chaque fois.',
                impact: { money: 0, co2: 0, nird: 10 },
                isGoodChoice: false, // Neutral
            },
        ],
    },
    // Q5 - VARIATION WINDOWS/MAC (Pas sécurisé)
    {
        id: 'eleve-5-other',
        roleId: 'eleve',
        title: 'Wifi Public (Danger)',
        situation: 'Wifi du fast-food + Ton OS (Windows/Mac) qui t\'espionne déjà. C\'est le festival des mouchards.',
       
        choices: [
            {
                id: 'eleve-5-oth-a',
                text: 'Accepter (Naïveté)',
                consequence: 'Siphonage total de tes données par le Fast-Food et Microsoft/Apple.',
                impact: { money: 0, co2: 0, nird: -20 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-5-oth-b',
                text: 'Installer un VPN "Gratuit"',
                consequence: 'PIÈGE ! Le VPN gratuit revend tes données. C\'est pire que tout.',
                impact: { money: 0, co2: 0, nird: -30 },
                isGoodChoice: false,
            },
            {
                id: 'eleve-5-oth-c',
                text: 'Booter sur clé USB Linux (Live)',
                consequence: 'Le déclic ! Tu surfes incognito sans toucher à ton disque dur. Résistance activée.',
                impact: { money: 0, co2: 0, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },

    // Q6 : BOSS FINAL (Vision)
    {
        id: 'eleve-6',
        roleId: 'eleve',
        title: 'Parcoursup',
        situation: 'Tu dois écrire ta lettre de motivation. Quel citoyen numérique veux-tu devenir ?',
        choices: [
            {
                id: 'eleve-6-a',
                text: 'Consommateur Passif',
                consequence: 'Tu veux juste que ça marche en payant. Tu finiras dépendant des GAFAM.',
                impact: { money: -10000, co2: -500, nird: -20 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'eleve-6-b',
                text: 'Développeur Big Tech',
                consequence: 'Tu es compétent, mais tu sers le système Goliath. Carrière classique.',
                impact: { money: 50000, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'eleve-6-c',
                text: 'Héros NIRD (Contributeur)',
                consequence: 'Tu veux réparer, partager, libérer. Tu es l\'avenir du web libre !',
                impact: { money: 10000, co2: 1000, nird: 50 }, // Good
                isGoodChoice: true,
            },
        ],
    },

// ============ PARENT ============

    // Q1 : LE CADEAU DE NOËL (Le Choix Fondateur)
    {
        id: 'parent-1',
        roleId: 'parent',
        title: 'Le PC de Noël',
        situation: 'Votre ado entre au lycée et réclame un PC Gamer à 1500€ "comme les copains". Votre budget est de 400€.',
        choices: [
            {
                id: 'parent-1-a',
                text: 'Céder et prendre un crédit conso',
                consequence: 'Vous vous endettez sur 3 ans. L\'enfant apprend que le bonheur s\'achète à crédit.',
                impact: { money: -1500, co2: -200, nird: -20 }, // Bad
                isGoodChoice: false,
                nextBranch: 'windows' // Vers branche Windows
            },
            {
                id: 'parent-1-b',
                text: 'Acheter un PC premier prix au supermarché',
                consequence: 'C\'est du plastique. Il ramera dans 6 mois. Obsolescence programmée garantie.',
                impact: { money: -400, co2: -100, nird: 0 }, // Neutral
                isGoodChoice: false,
                nextBranch: 'windows'
            },
            {
                id: 'parent-1-c',
                text: 'ThinkPad reconditionné + Linux',
                consequence: 'Indestructible, puissant et pas cher. Vous l\'installez ensemble : un vrai moment éducatif.',
                impact: { money: -350, co2: 500, nird: 40 }, // Good
                isGoodChoice: true,
                nextBranch: 'linux' // Vers branche Linux
            },
        ],
    },

    // Q2 : L'ALERTE RANÇON (Gestion de Crise)
    {
        id: 'parent-2',
        roleId: 'parent',
        title: 'Virus & Panique',
        situation: 'Dimanche soir. Le petit dernier arrive en pleurant : "Y\'a un écran rouge qui demande 500€ !". C\'est un Ransomware sur le vieux PC familial.',
        choices: [
            {
                id: 'parent-2-a',
                text: 'Payer la rançon avec la CB',
                consequence: 'Arnaque ! Vous perdez 500€ et l\'ordi reste bloqué. Double peine.',
                impact: { money: -500, co2: 0, nird: -20 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'parent-2-b',
                text: 'Tout éteindre et appeler un dépanneur',
                consequence: 'Frais de réparation à prévoir. Les données du disque dur sont perdues.',
                impact: { money: -100, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'parent-2-c',
                text: 'Booter sur clé USB Linux (Sauvetage)',
                consequence: 'Vous récupérez les photos (le virus est inactif sous Linux) et vous formatez. Héroïque !',
                impact: { money: 0, co2: 0, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // ============ Q3 : VARIATIONS CONTRÔLE PARENTAL ============

 // Q3 - VARIATION LINUX
    {
        id: 'parent-3-linux',
        roleId: 'parent',
        title: 'Temps d\'écran (Linux)',
        // type: 'terminal', <-- SUPPRIMÉ
        situation: 'Votre ado passe ses nuits sur le PC. Quelle commande pour limiter l\'horaire ?',
       
        choices: [
            {
                id: 'parent-3-lin-a',
                text: 'sudo killall -u enfant', 
                consequence: 'BRUTAL ! Devoir perdu, crise de nerfs.',
                impact: { money: 0, co2: 0, nird: -60 },
                isGoodChoice: false,
            },
            {
                id: 'parent-3-lin-b',
                text: 'echo "Va dormir"', 
                consequence: 'Inutile. Il ignore le message.',
                impact: { money: 0, co2: 0, nird: 0 },
                isGoodChoice: false,
            },
            {
                id: 'parent-3-lin-c',
                text: 'sudo apt install timekpr-next', 
                consequence: 'Installé ! Horaires définis proprement.',
                impact: { money: 0, co2: 0, nird: 30 },
                isGoodChoice: true,
            },
        ],
    },
    // Q3 - VARIATION WINDOWS (Choix)
    {
        id: 'parent-3-windows',
        roleId: 'parent',
        title: 'Temps d\'écran (Windows)',
        situation: 'Votre ado joue trop tard. Comment limiter son temps sans transformer la maison en prison ?',
        choices: [
            {
                id: 'parent-3-win-a',
                text: 'Acheter un logiciel espion (50€/an)',
                consequence: 'Rupture de confiance. Vous surveillez le moindre de ses clics. C\'est malsain.',
                impact: { money: -50, co2: 0, nird: -20 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'parent-3-win-b',
                text: 'Activer Microsoft Family Safety',
                consequence: 'Ça marche, mais Microsoft récolte les données de votre enfant pour son profilage.',
                impact: { money: 0, co2: 0, nird: -10 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'parent-3-win-c',
                text: 'Couper le Wifi via la Box à 21h30',
                consequence: 'Gratuit, radical et sans mouchard. C\'est la règle de la maison, pas celle de Microsoft.',
                impact: { money: 0, co2: 0, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // Q4 : LA SMART TV (Vie Privée)
    {
        id: 'parent-4',
        roleId: 'parent',
        title: 'La TV Espionne',
        situation: 'Nouvelle TV au salon. Elle demande d\'activer le micro pour "l\'assistance vocale" et de lier un compte Google.',
        choices: [
            {
                id: 'parent-4-a',
                text: 'Tout accepter (Confort)',
                consequence: 'Big Brother est dans votre salon. Vos conversations privées sont analysées pour la pub.',
                impact: { money: 0, co2: 0, nird: -20 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'parent-4-b',
                text: 'Ne pas la connecter à Internet',
                consequence: 'Vie privée sauve, mais adieu Netflix et Replay. La famille râle.',
                impact: { money: 0, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'parent-4-c',
                text: 'Refuser et brancher un Raspberry Pi (Kodi)',
                consequence: 'Une TV intelligente, libre, sans pub et qui ne vous écoute pas. Le top.',
                impact: { money: -50, co2: 100, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // Q5 : L'ÉDUCATION (Apprendre à créer)
    {
        id: 'parent-5',
        roleId: 'parent',
        title: 'Futur Codeur ?',
        situation: 'Le petit veut "créer des jeux vidéo". On vous conseille une appli sur tablette.',
        choices: [
            {
                id: 'parent-5-a',
                text: 'Installer le jeu Freemium à la mode',
                consequence: 'Il n\'apprend rien, il veut juste acheter des skins à 5€. C\'est un consommateur.',
                impact: { money: -50, co2: 0, nird: -10 }, // Bad
                isGoodChoice: false,
            },
            {
                id: 'parent-5-b',
                text: 'Acheter un livre de code théorique',
                consequence: 'Trop austère. Il abandonne au bout de 2 jours.',
                impact: { money: -20, co2: 0, nird: 0 }, // Neutral
                isGoodChoice: false,
            },
            {
                id: 'parent-5-c',
                text: 'Installer Scratch ou Minetest',
                consequence: 'Il crée ses propres règles et comprend la logique. Il passe de spectateur à acteur.',
                impact: { money: 0, co2: 0, nird: 30 }, // Good
                isGoodChoice: true,
            },
        ],
    },

    // Q6 : L'HÉRITAGE (Boss Final)
    {
        id: 'parent-6',
        roleId: 'parent',
        title: 'Valeurs Familiales',
        situation: 'Vos enfants grandissent. Quel message clé voulez-vous leur transmettre sur le numérique ?',
        choices: [
            {
                id: 'parent-6-a',
                text: 'La Facilité (L\'argent résout tout)',
                consequence: 'Ils deviennent des consommateurs passifs et dépendants des marques.',
                impact: { money: -10000, co2: -500, nird: -20 }, // Bad End
                isGoodChoice: false,
            },
            {
                id: 'parent-6-b',
                text: 'La Peur (Interdiction)',
                consequence: 'Ils sont technophobes et seront désavantagés dans le monde pro.',
                impact: { money: 0, co2: 0, nird: 0 }, // Neutral End
                isGoodChoice: false,
            },
            {
                id: 'parent-6-c',
                text: 'L\'Autonomie (Savoir-faire)',
                consequence: 'Ils savent réparer, coder et se protéger. Des citoyens libres !',
                impact: { money: 5000, co2: 200, nird: 50 }, // Good End
                isGoodChoice: true,
            },
        ],
    },
];

export function getScenariosByRole(roleId: string): Scenario[] {
    return scenarios.filter(s => s.roleId === roleId);
}
