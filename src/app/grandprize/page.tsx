"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

export default function Home() {
  const router = useRouter();
  const [currentParticipant, setCurrentParticipant]: any = useState(null);
  const [currentParticipantDummy, setCurrentParticipantDummy]: any =
    useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [tunaiCounter, setCounter]: any = useState<number>(100);
  const [participants, setParticipants]: any = useState([]);
  const [participantsDummy, setParticipantsDummy]: any = useState([]);
  const [audio, setAudio]: any = useState(null);
  const [confettiAudio, setConfettiAudio]: any = useState(null);
  const [yehawAudio, setYehawAudio]: any = useState(null);
  const [winners, setWinners]: any = useState(
    JSON.parse(localStorage.getItem("winnersGrandprize") || "[]")
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCounter(
        localStorage.getItem("Grand Prize")
          ? parseInt(localStorage.getItem("Grand Prize")!)
          : 100
      );
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCounter(
        localStorage.getItem("Grand Prize")
          ? parseInt(localStorage.getItem("Grand Prize")!)
          : 100
      );
      setParticipants(
        JSON.parse(localStorage.getItem("participantsNPP") || "[]")
      );
      setParticipantsDummy(
        JSON.parse(localStorage.getItem("participants") || "[]")
      );

      setAudio(new Audio("/efek_undian.mp3"));
      setConfettiAudio(new Audio("/efek_confetti.mp3"));
      setYehawAudio(new Audio("/yehaaw.mp3"));
    }
  }, []);

  const startRandomizerDummy = () => {
    const intervalTime = 5;
    let choosenIndex = 0;

    const interval = setInterval(() => {
      choosenIndex = Math.floor(Math.random() * participantsDummy.length);
      setCurrentParticipantDummy(participantsDummy[choosenIndex]);
    }, intervalTime);
  };

  const startRandomizer = () => {
    audio.play();
    setIsAnimating(true);
    let choosenIndex = 0;
    let winners: any[] = [];

    const totalWinners = 1;
    const totalIterations = 1000;
    const intervalTime = 4;

    const pickOne = () => {
      let counter = 0;

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

              // Simpan pemenang
              const winner = participants[choosenIndex];
              setWinners((prev: any) => [...prev, winner]);

              winners.push(winner);

              // Hapus dari peserta
              participants.splice(choosenIndex, 1);
              localStorage.setItem(
                "participantsNPP",
                JSON.stringify(participants)
              );

              // Efek animasi
              confetti({
                particleCount: 300,
                spread: 120,
                startVelocity: 50,
                ticks: 200,
                origin: { y: 0.6 },
                colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
              });

              // Cek apakah sudah 30 orang
              if (winners.length < totalWinners && participants.length > 0) {
                setTimeout(() => {
                  pickOne(); // lanjut ke sesi randomizer berikutnya
                }, 1000); // jeda antar pemenang
              } else {
                setIsAnimating(false);
                audio.pause();
                audio.currentTime = 0;
                if (winners.length == totalWinners) {
                  yehawAudio.play();
                }
                setTimeout(() => {
                  confettiAudio.pause();
                  confettiAudio.currentTime = 0;
                }, 5000);

                // Simpan semua pemenang
                localStorage.setItem(
                  "winnersGrandprize",
                  JSON.stringify(winners)
                );
              }
            }
          }, intervalTime * 2);
        }
      }, intervalTime);
    };

    pickOne(); // mulai sesi pertama
  };

  return (
    <>
      <img
        src="/border-new.png"
        alt="Border"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAEFD9]">
        <h1 className="text-4xl font-bold mt-28 mb-4 text-[#401606]">
          Undian Grand Prize
        </h1>
        <div className="mb-6 relative">
          <img src="/smarttv.png" alt="Grand Prize" className="w-60 h-60" />
        </div>
        {!isAnimating ? (
          <div className="text-5xl font-extrabold text-gray-800 h-24 w-[300px] flex flex-col items-center justify-center border-4 border-green-700 rounded-lg bg-white shadow-lg mb-6">
            {currentParticipant !== null ? currentParticipant?.number : "?"}
            <div className="text-lg">{currentParticipant?.nama}</div>
          </div>
        ) : (
          <div className="text-5xl font-extrabold text-gray-800 h-24 w-[300px] flex flex-col items-center justify-center border-4 border-red-700 rounded-lg bg-white shadow-lg mb-6">
            {currentParticipantDummy !== null
              ? currentParticipantDummy?.number
              : "?"}
            <div className="text-lg">{currentParticipantDummy?.nama}</div>
          </div>
        )}
        <div className="w-[63%] flex gap-2 flex-wrap justify-center mb-6">
          {winners.length > 0 &&
            winners.map((w: any, idx: any) => {
              return (
                <div
                  key={idx}
                  className="bg-[#008109] text-white py-1 px-2 rounded-lg font-semibold"
                >
                  {w?.nama}
                </div>
              );
            })}
        </div>
        {tunaiCounter > 0 && (
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors ${
              isAnimating
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#008109] hover:bg-[#429F00]"
            }`}
            onClick={() => {
              startRandomizer();
              startRandomizerDummy();
            }}
            disabled={isAnimating}
          >
            {isAnimating ? "Mengundi..." : "Mulai Undian"}
          </button>
        )}
        <button
          className={`mt-20 px-6 py-3 text-lg text-white rounded-lg transition-colors bg-orange-500 hover:bg-orange-400 z-20`}
          onClick={() => router.back()}
        >
          Back To Main Menu
        </button>
      </div>
    </>
  );
}
