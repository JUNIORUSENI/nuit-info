import { Scenario, Choice, RoleType } from '../types/game';
import questionsData from './questions.json';

export interface QuestionChoice {
    id: string;
    text: string;
    consequence: string;
    isGoodChoice: boolean;
    impact: {
        money: number;
        co2: number;
        nird: number;
    };
}

export interface Question {
    id: string;
    title: string;
    situation: string;
    choices: QuestionChoice[];
}

export interface RoleQuestions {
    roleId: string;
    roleName: string;
    questions: Question[];
}

// Type pour les données JSON
type QuestionsJSON = {
    [key in RoleType]: RoleQuestions;
};

const questions = questionsData as QuestionsJSON;

/**
 * Récupère toutes les questions pour un rôle donné
 */
export function getQuestionsForRole(roleId: RoleType): Question[] {
    const roleData = questions[roleId];
    if (!roleData) {
        console.warn(`Aucune question trouvée pour le rôle: ${roleId}`);
        return [];
    }
    return roleData.questions;
}

/**
 * Récupère une question spécifique par son index pour un rôle
 */
export function getQuestionByIndex(roleId: RoleType, index: number): Question | null {
    const roleQuestions = getQuestionsForRole(roleId);
    if (index < 0 || index >= roleQuestions.length) {
        return null;
    }
    return roleQuestions[index];
}

/**
 * Convertit une Question en Scenario (pour compatibilité avec le système existant)
 */
export function questionToScenario(question: Question, roleId: RoleType): Scenario {
    return {
        id: question.id,
        roleId: roleId,
        title: question.title,
        situation: question.situation,
        choices: question.choices.map((choice): Choice => ({
            id: choice.id,
            text: choice.text,
            consequence: choice.consequence,
            isGoodChoice: choice.isGoodChoice,
            impact: choice.impact,
        })),
    };
}

/**
 * Récupère tous les scénarios pour un rôle (convertis depuis les questions JSON)
 */
export function getScenariosForRole(roleId: RoleType): Scenario[] {
    const roleQuestions = getQuestionsForRole(roleId);
    return roleQuestions.map((q) => questionToScenario(q, roleId));
}

/**
 * Récupère le nombre total de questions pour un rôle
 */
export function getQuestionCountForRole(roleId: RoleType): number {
    return getQuestionsForRole(roleId).length;
}

/**
 * Récupère le nom du rôle
 */
export function getRoleName(roleId: RoleType): string {
    const roleData = questions[roleId];
    return roleData?.roleName || roleId;
}

export default questions;
