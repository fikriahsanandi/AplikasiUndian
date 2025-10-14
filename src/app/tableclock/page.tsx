
"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import confetti from "canvas-confetti";

export default function Home() {
    const router = useRouter();
    const [currentParticipant, setCurrentParticipant]: any = useState(null);
    const [currentParticipantDummy, setCurrentParticipantDummy]: any = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [tunaiCounter, setCounter]: any = useState<number>(100);
    const [participants, setParticipants]: any = useState([]);
    const [participantsDummy, setParticipantsDummy]: any = useState([]);
    const [audio, setAudio]: any = useState(null);
    const [confettiAudio, setConfettiAudio]: any = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCounter(localStorage.getItem("tableclock") ? parseInt(localStorage.getItem("tableclock")!) : 100);
            setParticipants(JSON.parse(localStorage.getItem("participantsNPP") || "[]"));
            setParticipantsDummy(JSON.parse(localStorage.getItem("participants") || "[]"));

            setAudio(new Audio("/efek_undian.mp3"));
            setConfettiAudio(new Audio("/efek_confetti.mp3"));
        }
    }, []);


    const startRandomizerDummy = () => {
        const intervalTime = 5;
        let choosenIndex = 0;

        const interval = setInterval(() => {
            choosenIndex = Math.floor(Math.random() * participantsDummy.length);
            setCurrentParticipantDummy(participantsDummy[choosenIndex]);
        }, intervalTime)
    }

    const startRandomizer = () => {
        audio.play();
        setIsAnimating(true);
        let counter = 0;
        const totalIterations = 1000;
        const intervalTime = 5;
        let choosenIndex = 0

        const interval = setInterval(() => {
            choosenIndex = Math.floor(Math.random() * participants.length);
            setCurrentParticipant(participants[choosenIndex]);
            counter++;

            if (counter > totalIterations * 0.8) {
                clearInterval(interval);
                const slowInterval = setInterval(() => {
                    choosenIndex = Math.floor(Math.random() * participants.length);
                    setCurrentParticipant(participants[choosenIndex]);
                    counter++;
                    if (counter >= totalIterations) {
                        clearInterval(slowInterval);
                        setIsAnimating(false);
                        participants.splice(choosenIndex, 1);
                        localStorage.setItem("participantsNPP", JSON.stringify(participants));
                        audio.pause();
                        audio.currentTime = 0;

                        confettiAudio.play();
                        setTimeout(() => {
                            confettiAudio.pause();
                            confettiAudio.currentTime = 0;
                        }, 5000);

                        confetti({
                            particleCount: 300,
                            spread: 120,
                            startVelocity: 50,
                            ticks: 200,
                            origin: { y: 0.6 },
                            colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]
                        });
                    }
                }, intervalTime * 2);
            }
        }, intervalTime);

        setCounter((prevCounter: any) => prevCounter - 1);
        localStorage.setItem("tableclock", (tunaiCounter - 1).toString());
    }

    return (
        <>
            <img
                src="/border.png"
                alt="Border"
                className="absolute inset-0 w-full h-full pointer-events-none"
            />
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEDFB6]">
                <h1 className="text-6xl font-bold mb-6 text-[#401606]">Undian 1 Unit Table Clock</h1>
                <div className="mb-10 relative">
                    <img src="/tableclock.jpg" alt="Cash 200K" className="w-60 h-60" />
                </div>
                {!isAnimating ?
                    <div className="text-5xl font-extrabold text-gray-800 h-24 w-[300px] flex flex-col items-center justify-center border-4 border-green-700 rounded-lg bg-white shadow-lg mb-6">
                        {currentParticipant !== null ? currentParticipant?.number : "?"}
                        <div className="text-lg">{currentParticipant?.nama}</div>
                    </div> :
                    <div className="text-5xl font-extrabold text-gray-800 h-24 w-[300px] flex flex-col items-center justify-center border-4 border-red-700 rounded-lg bg-white shadow-lg mb-6">
                        {currentParticipantDummy !== null ? currentParticipantDummy?.number : "?"}
                        <div className="text-lg">{currentParticipantDummy?.nama}</div>
                    </div>
                }
                {tunaiCounter > 0 &&
                    <button
                        className={`px-6 py-3 text-lg text-white rounded-lg transition-colors ${isAnimating ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#008109] hover:bg-[#429F00]'}`}
                        onClick={() => {
                            startRandomizer();
                            startRandomizerDummy();
                        }}
                        disabled={isAnimating}
                    >
                        {isAnimating ? "Mengundi..." : "Mulai Undian"}
                    </button>
                }
                <button
                    className={`mt-20 px-6 py-3 text-lg text-white rounded-lg transition-colors  bg-orange-500 hover:bg-orange-400`}
                    onClick={() => router.back()}
                >
                    Back To Main Menu
                </button>
            </div>
        </>
    );
}


