'use client';

import { useState, useRef, useEffect } from 'react';
import { TerminalChallenge } from '../data/terminals';

interface TerminalProps {
    challenge: TerminalChallenge;
    onComplete: () => void;
}

export default function Terminal({ challenge, onComplete }: TerminalProps) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedInput = input.trim().toLowerCase();
        const expectedCommand = challenge.expectedCommand.toLowerCase();

        setHistory(prev => [...prev, `$ ${input}`]);

        if (trimmedInput === expectedCommand || trimmedInput.includes(expectedCommand.split(' ')[0])) {
            setIsSuccess(true);
            setHistory(prev => [...prev, challenge.successMessage, '', challenge.lesson]);

            setTimeout(() => {
                onComplete();
            }, 3000);
        } else {
            setAttempts(prev => prev + 1);
            setHistory(prev => [...prev, `bash: ${input}: commande non reconnue`, '']);

            if (attempts >= 1) {
                setShowHint(true);
            }
        }

        setInput('');
    };

    return (
        <div className="animate-fadeIn">
            {/* En-tête du défi */}
            <div className="bg-[#1a1a1a] rounded-t-3xl p-6 border border-[#2a2a2a] border-b-0">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/30
                        flex items-center justify-center">
                        <span className="text-3xl">💻</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">{challenge.title}</h2>
                        <p className="text-[#00ff88] text-sm">Défi Terminal Linux</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#0d0d0d] border border-red-500/20">
                        <p className="text-red-400 text-sm font-medium mb-1">⚠️ Problème</p>
                        <p className="text-gray-300">{challenge.problem}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#0d0d0d] border border-[#00ff88]/20">
                        <p className="text-[#00ff88] text-sm font-medium mb-1">🎯 Mission</p>
                        <p className="text-gray-300">{challenge.mission}</p>
                    </div>
                </div>

                {showHint && !isSuccess && (
                    <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 animate-fadeIn">
                        <p className="text-amber-400 text-sm">
                            💡 <strong>Indice :</strong> {challenge.hint}
                        </p>
                    </div>
                )}
            </div>

            {/* Terminal */}
            <div className="bg-[#0d0d0d] rounded-b-3xl border border-[#2a2a2a] border-t-0 overflow-hidden">
                {/* Barre de titre du terminal */}
                <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-3 border-b border-[#2a2a2a]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-500 text-sm font-mono ml-2">nird@resistance:~</span>
                </div>

                {/* Zone de sortie */}
                <div className="p-5 font-mono text-sm h-48 overflow-y-auto">
                    <div className="text-[#00ff88] mb-3">
                        Bienvenue dans le terminal NIRD ! Tape la bonne commande...
                    </div>

                    {history.map((line, index) => (
                        <div
                            key={index}
                            className={`${line.startsWith('$') ? 'text-[#00ff88]' :
                                    line.startsWith('bash:') ? 'text-red-400' :
                                        line.startsWith('💡') ? 'text-amber-400 bg-amber-500/10 p-3 rounded-xl mt-2' :
                                            'text-gray-300'
                                }`}
                        >
                            {line}
                        </div>
                    ))}

                    {isSuccess && (
                        <div className="mt-4 p-5 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/30 animate-pulse">
                            <div className="flex items-center gap-3 text-[#00ff88] mb-3">
                                <span className="text-2xl">✨</span>
                                <span className="font-bold">Mission accomplie !</span>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <span className="px-3 py-1.5 bg-[#00ff88]/20 rounded-full text-[#00ff88] text-xs font-medium">
                                    +{challenge.impact.money}€
                                </span>
                                <span className="px-3 py-1.5 bg-[#00ff88]/20 rounded-full text-[#00ff88] text-xs font-medium">
                                    +{challenge.impact.co2}kg CO₂
                                </span>
                                <span className="px-3 py-1.5 bg-[#00ff88]/20 rounded-full text-[#00ff88] text-xs font-medium">
                                    +{challenge.impact.nird} NIRD
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Zone de saisie */}
                {!isSuccess && (
                    <form onSubmit={handleSubmit} className="border-t border-[#2a2a2a]">
                        <div className="flex items-center p-4 gap-3">
                            <span className="text-[#00ff88] font-mono">$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent text-white font-mono outline-none placeholder-gray-600"
                                placeholder="Tape ta commande ici..."
                                autoComplete="off"
                                spellCheck={false}
                            />
                            <button
                                type="submit"
                                className="px-5 py-2 bg-[#00ff88] hover:bg-[#00cc6a] rounded-full
                         text-black text-sm font-bold transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
                            >
                                Exécuter
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
