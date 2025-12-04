// Types pour le jeu Opération N.I.R.D

export type RoleType = 'directeur' | 'technicien' | 'eleve' | 'parent';

export interface Role {
  id: RoleType;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  color: string;
}

export interface Choice {
  id: string;
  text: string;
  consequence: string;
  impact: {
    money: number;      // € économisés (positif) ou perdus (négatif)
    co2: number;        // kg CO2 évités (positif) ou émis (négatif)
    nird: number;       // Points NIRD gagnés ou perdus
  };
  isGoodChoice: boolean;
}

export interface Scenario {
  id: string;
  roleId: RoleType;
  title: string;
  situation: string;
  choices: Choice[];
  isTerminal?: boolean;  // Si c'est un défi terminal
}

export interface TerminalChallenge {
  id: string;
  roleId: RoleType;
  title: string;
  problem: string;
  mission: string;
  expectedCommand: string;
  hint: string;
  successMessage: string;
  lesson: string;
  impact: {
    money: number;
    co2: number;
    nird: number;
  };
}

export interface GameState {
  role: RoleType | null;
  currentScenarioIndex: number;
  score: {
    money: number;
    co2: number;
    nird: number;
  };
  avatarLevel: number;  // 1-5
  decisions: string[];  // Historique des choix
  isGameOver: boolean;
  terminalCompleted: number;
}

export interface AvatarState {
  level: number;
  mood: 'tired' | 'neutral' | 'happy' | 'heroic';
  environment: 'polluted' | 'transitioning' | 'green' | 'solarpunk';
}
