'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getScenariosForRole } from '../data/questionsHelper';
import { Choice, RoleType, Scenario } from '../types/game';
import ResultScreen from './ResultScreen';
import { useGame } from '../contexts/GameContext';
import { roles } from '../data/roles';

interface GamePageProps {
    roleId: RoleType;
}

export default function GamePage({ roleId }: GamePageProps) {
    const { gameState, selectRole, makeChoice, resetGame } = useGame();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastChoice, setLastChoice] = useState<Choice | null>(null);

    const scenarios = getScenariosForRole(roleId);
    const currentScenario: Scenario | null = scenarios[currentIndex] || null;
    const selectedRole = roles.find(r => r.id === roleId);

    useEffect(() => {
        selectRole(roleId);
    }, [roleId, selectRole]);

    const handleChoiceClick = (choice: Choice) => {
        console.log('🎯 CLIC sur:', choice.text);

        // Éviter double clic
        if (showFeedback) return;

        // Mettre à jour le score immédiatement
        makeChoice(choice);

        // Afficher le feedback
        setLastChoice(choice);
        setShowFeedback(true);

        // Passer à la suite après 2s
        setTimeout(() => {
            setShowFeedback(false);
            setLastChoice(null);

            if (currentIndex + 1 >= scenarios.length) {
                setIsGameOver(true);
            } else {
                setCurrentIndex(prev => prev + 1);
            }
        }, 2000);
    };

    const handleRestart = () => {
        resetGame();
        setCurrentIndex(0);
        setIsGameOver(false);
        setShowFeedback(false);
        setLastChoice(null);
    };

    if (isGameOver) {
        return <ResultScreen onRestart={handleRestart} />;
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0d0d0d', padding: '20px' }}>
            {/* Header simple */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px',
                padding: '15px 20px',
                backgroundColor: '#1a1a1a',
                borderRadius: '20px',
                border: '1px solid #2a2a2a'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#00ff88',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: 'black'
                    }}>N</div>
                    <span style={{ color: '#00ff88', fontWeight: 'bold', fontSize: '18px' }}>
                        Opération N.I.R.D
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Scores */}
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ color: gameState.score.money >= 0 ? '#00ff88' : '#ff4444' }}>
                            💰 {gameState.score.money}€
                        </span>
                        <span style={{ color: gameState.score.co2 >= 0 ? '#00ff88' : '#ff4444' }}>
                            🌍 {gameState.score.co2}kg
                        </span>
                        <span style={{ color: '#00ff88' }}>
                            ⚡ {gameState.score.nird} pts
                        </span>
                    </div>

                    {/* Progression */}
                    <span style={{ color: 'white' }}>
                        Question {currentIndex + 1}/{scenarios.length}
                    </span>
                </div>
            </div>

            {/* Retour */}
            <Link href="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#888',
                marginBottom: '20px',
                textDecoration: 'none'
            }}>
                ← Changer de Rôle
            </Link>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {/* Questions - Colonne gauche */}
                <div style={{ flex: '2', minWidth: '300px' }}>
                    {currentScenario && (
                        <div style={{
                            backgroundColor: '#1a1a1a',
                            borderRadius: '24px',
                            border: '1px solid #2a2a2a',
                            padding: '30px'
                        }}>
                            {/* Badge */}
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                backgroundColor: 'rgba(0,255,136,0.1)',
                                border: '1px solid rgba(0,255,136,0.3)',
                                borderRadius: '20px',
                                color: '#00ff88',
                                fontSize: '14px',
                                marginBottom: '20px'
                            }}>
                                Question {String(currentIndex + 1).padStart(2, '0')}
                            </div>

                            {/* Titre */}
                            <h2 style={{ color: 'white', fontSize: '28px', marginBottom: '15px' }}>
                                {currentScenario.title}
                            </h2>

                            {/* Situation */}
                            <p style={{ color: '#888', fontSize: '16px', lineHeight: '1.6', marginBottom: '25px' }}>
                                {currentScenario.situation}
                            </p>

                            {/* Choix ou Feedback */}
                            {!showFeedback ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {currentScenario.choices.map((choice, index) => (
                                        <button
                                            key={choice.id}
                                            onClick={() => handleChoiceClick(choice)}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '18px 20px',
                                                backgroundColor: '#0d0d0d',
                                                border: '1px solid #2a2a2a',
                                                borderRadius: '16px',
                                                color: '#ccc',
                                                fontSize: '15px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '15px',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.borderColor = '#00ff88';
                                                e.currentTarget.style.color = 'white';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.borderColor = '#2a2a2a';
                                                e.currentTarget.style.color = '#ccc';
                                            }}
                                        >
                                            <span style={{
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '10px',
                                                backgroundColor: '#1a1a1a',
                                                border: '1px solid #2a2a2a',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#00ff88',
                                                fontWeight: 'bold',
                                                flexShrink: 0
                                            }}>
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                            <span style={{ lineHeight: '1.5' }}>{choice.text}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : lastChoice && (
                                <div style={{
                                    padding: '25px',
                                    backgroundColor: lastChoice.isGoodChoice ? 'rgba(0,255,136,0.1)' : 'rgba(255,68,68,0.1)',
                                    border: `1px solid ${lastChoice.isGoodChoice ? 'rgba(0,255,136,0.3)' : 'rgba(255,68,68,0.3)'}`,
                                    borderRadius: '16px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                        <span style={{ fontSize: '28px' }}>
                                            {lastChoice.isGoodChoice ? '✅' : '⚠️'}
                                        </span>
                                        <span style={{
                                            fontWeight: 'bold',
                                            fontSize: '18px',
                                            color: lastChoice.isGoodChoice ? '#00ff88' : '#ff4444'
                                        }}>
                                            {lastChoice.isGoodChoice ? 'Excellent choix !' : 'Pas idéal...'}
                                        </span>
                                    </div>
                                    <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.5' }}>
                                        {lastChoice.consequence}
                                    </p>
                                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                        <span style={{
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            backgroundColor: lastChoice.impact.money >= 0 ? 'rgba(0,255,136,0.2)' : 'rgba(255,68,68,0.2)',
                                            color: lastChoice.impact.money >= 0 ? '#00ff88' : '#ff4444',
                                            fontSize: '14px'
                                        }}>
                                            {lastChoice.impact.money >= 0 ? '+' : ''}{lastChoice.impact.money}€
                                        </span>
                                        <span style={{
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            backgroundColor: lastChoice.impact.co2 >= 0 ? 'rgba(0,255,136,0.2)' : 'rgba(255,150,0,0.2)',
                                            color: lastChoice.impact.co2 >= 0 ? '#00ff88' : '#ff9600',
                                            fontSize: '14px'
                                        }}>
                                            {lastChoice.impact.co2 >= 0 ? '+' : ''}{lastChoice.impact.co2}kg CO₂
                                        </span>
                                        <span style={{
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            backgroundColor: 'rgba(0,255,136,0.2)',
                                            color: '#00ff88',
                                            fontSize: '14px'
                                        }}>
                                            +{lastChoice.impact.nird} NIRD
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Avatar - Colonne droite */}
                <div style={{ flex: '1', minWidth: '250px' }}>
                    <div style={{
                        backgroundColor: '#1a1a1a',
                        borderRadius: '24px',
                        border: '1px solid #2a2a2a',
                        padding: '25px',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundColor: '#0d0d0d',
                            border: `2px solid ${gameState.avatarLevel >= 3 ? '#00ff88' : '#2a2a2a'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 15px',
                            fontSize: '50px'
                        }}>
                            {selectedRole?.emoji || '🤖'}
                        </div>
                        <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px' }}>
                            {selectedRole?.title}
                        </p>
                        <p style={{ color: '#888', fontSize: '14px', marginBottom: '15px' }}>
                            Niveau {gameState.avatarLevel}/5
                        </p>
                        <div style={{
                            height: '8px',
                            backgroundColor: '#0d0d0d',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${(gameState.avatarLevel / 5) * 100}%`,
                                height: '100%',
                                backgroundColor: '#00ff88',
                                transition: 'width 0.5s'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
