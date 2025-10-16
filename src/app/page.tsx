"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const participantsDataNPP = [
  { nama: "Zakir Mursalin", number: "01", status: "NPP", one_year: true },
  { nama: "Mula Vidya Kusuma", number: "02", status: "NPP", one_year: true },
  { nama: "Daung Hadinata", number: "03", status: "NPP", one_year: true },
  { nama: "Ginanjar Ardiansyah", number: "04", status: "NPP", one_year: true },
  {
    nama: "Liesa Avianty Sagitawaty",
    number: "05",
    status: "NPP",
    one_year: true,
  },
  { nama: "Aqsha Suyudi Putra", number: "06", status: "NPP", one_year: true },
  { nama: "Ade Satria Elisman", number: "07", status: "NPP", one_year: true },
  { nama: "Wahyudi", number: "08", status: "NPP", one_year: true },
  { nama: "Agus Solihin", number: "09", status: "NPP", one_year: true },
  { nama: "Heri Iskandar", number: "11", status: "NPP", one_year: true },
  { nama: "Indira Milasari", number: "13", status: "NPP", one_year: true },
  { nama: "Benny Isma Yuadi", number: "15", status: "NPP", one_year: true },
  { nama: "Arif Nurul Wahid", number: "16", status: "NPP", one_year: true },
  { nama: "Arif Fadillah", number: "19", status: "NPP", one_year: true },
  { nama: "Fitri Nuraeni", number: "21", status: "NPP", one_year: true },
  { nama: "Syarif Ahmad", number: "23", status: "NPP", one_year: true },
  { nama: "Irval Mayiendra", number: "24", status: "NPP", one_year: true },
  {
    nama: "R. Muh Iqbal Sasraningrat",
    number: "25",
    status: "NPP",
    one_year: true,
  },
  {
    nama: "Aleksius Petrus Bella",
    number: "26",
    status: "NPP",
    one_year: true,
  },
  { nama: "Dendy Hendrafajri", number: "27", status: "NPP", one_year: true },
  { nama: "Afifah Anjany", number: "28", status: "NPP", one_year: true },
  { nama: "Reza Hendrawan", number: "29", status: "NPP", one_year: true },
  { nama: "Olga Chiquita Jacob", number: "30", status: "NPP", one_year: true },
  { nama: "Hesa Alfathona", number: "31", status: "NPP", one_year: true },
  { nama: "Anisa Novianti", number: "32", status: "NPP", one_year: true },
  {
    nama: "Luhut Pardamean Siahaan",
    number: "34",
    status: "NPP",
    one_year: true,
  },
  { nama: "Duwi Ari Wibowo", number: "36", status: "NPP", one_year: true },
  { nama: "Dzaky Nurhafizh", number: "37", status: "NPP", one_year: true },
  { nama: "Andriansyah", number: "38", status: "NPP", one_year: true },
  { nama: "Iga Novianti", number: "39", status: "NPP", one_year: true },
  // {
  //   nama: "Ivan Febriano Syahputra",
  //   number: "41",
  //   status: "NPP",
  //   one_year: true,
  // },
];
const participantsDataNonNPP = [
  {
    nama: "Akbar Nandito Prasetia",
    number: "42",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Rizki Kurniawan", number: "43", status: "NON NPP", one_year: true },
  {
    nama: "Mokhamad Hijriawan",
    number: "46",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Putri Dewi Rahma Ani",
    number: "47",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Tarri Namira Erfarda",
    number: "49",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Ayu Endah Pratiwi",
    number: "50",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Sri Rahayu Utami Ningtyas",
    number: "52",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Raszi Hanitra Prakasa",
    number: "53",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Yofanny Amanda", number: "54", status: "NON NPP", one_year: true },
  { nama: "Angga Saputra", number: "55", status: "NON NPP", one_year: true },
  {
    nama: "Muhammad Fikri Ahsanandi",
    number: "56",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Siti Niken Rahmi Maulida",
    number: "57",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Heru Katanda", number: "58", status: "NON NPP", one_year: true },
  {
    nama: "Shevia Zulfa Salsabila",
    number: "59",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Muhammad Syah Fadel",
    number: "60",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Muhammad Alfatian",
    number: "61",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Rifki Rizqullah Zamar",
    number: "67",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Wisnu Hanifanto", number: "68", status: "NON NPP", one_year: true },
  { nama: "Sulityo Basuki", number: "70", status: "NON NPP", one_year: true },
  { nama: "Siti Istiqomah", number: "71", status: "NON NPP", one_year: true },
  {
    nama: "Ifang Firman Elangsyah",
    number: "72",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Tarifa Fibula Falani",
    number: "73",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Rasyid Ihsan Putra Selian",
    number: "74",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Intan Halimatus Sadiyah",
    number: "75",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Nanang", number: "76", status: "NON NPP", one_year: true },
  { nama: "Irwan", number: "77", status: "NON NPP", one_year: true },
  { nama: "Nurzaman", number: "78", status: "NON NPP", one_year: true },
  { nama: "Jupri", number: "79", status: "NON NPP", one_year: true },
  { nama: "Adit", number: "80", status: "NON NPP", one_year: true },
  { nama: "Irvan", number: "81", status: "NON NPP", one_year: true },
];
const participantsData = [
  { nama: "Zakir Mursalin", number: "01", status: "NPP", one_year: true },
  { nama: "Mula Vidya Kusuma", number: "02", status: "NPP", one_year: true },
  { nama: "Daung Hadinata", number: "03", status: "NPP", one_year: true },
  { nama: "Ginanjar Ardiansyah", number: "04", status: "NPP", one_year: true },
  {
    nama: "Liesa Avianty Sagitawaty",
    number: "05",
    status: "NPP",
    one_year: true,
  },
  { nama: "Aqsha Suyudi Putra", number: "06", status: "NPP", one_year: true },
  { nama: "Ade Satria Elisman", number: "07", status: "NPP", one_year: true },
  { nama: "Wahyudi", number: "08", status: "NPP", one_year: true },
  { nama: "Agus Solihin", number: "09", status: "NPP", one_year: true },
  { nama: "Heri Iskandar", number: "11", status: "NPP", one_year: true },
  { nama: "Indira Milasari", number: "13", status: "NPP", one_year: true },
  { nama: "Benny Isma Yuadi", number: "15", status: "NPP", one_year: true },
  { nama: "Arif Nurul Wahid", number: "16", status: "NPP", one_year: true },
  { nama: "Arif Fadillah", number: "19", status: "NPP", one_year: true },
  { nama: "Fitri Nuraeni", number: "21", status: "NPP", one_year: true },
  { nama: "Syarif Ahmad", number: "23", status: "NPP", one_year: true },
  { nama: "Irval Mayiendra", number: "24", status: "NPP", one_year: true },
  {
    nama: "R. Muh Iqbal Sasraningrat",
    number: "25",
    status: "NPP",
    one_year: true,
  },
  {
    nama: "Aleksius Petrus Bella",
    number: "26",
    status: "NPP",
    one_year: true,
  },
  { nama: "Dendy Hendrafajri", number: "27", status: "NPP", one_year: true },
  { nama: "Afifah Anjany", number: "28", status: "NPP", one_year: true },
  { nama: "Reza Hendrawan", number: "29", status: "NPP", one_year: true },
  { nama: "Olga Chiquita Jacob", number: "30", status: "NPP", one_year: true },
  { nama: "Hesa Alfathona", number: "31", status: "NPP", one_year: true },
  { nama: "Anisa Novianti", number: "32", status: "NPP", one_year: true },
  {
    nama: "Luhut Pardamean Siahaan",
    number: "34",
    status: "NPP",
    one_year: true,
  },
  { nama: "Duwi Ari Wibowo", number: "36", status: "NPP", one_year: true },
  { nama: "Dzaky Nurhafizh", number: "37", status: "NPP", one_year: true },
  { nama: "Andriansyah", number: "38", status: "NPP", one_year: true },
  { nama: "Iga Novianti", number: "39", status: "NPP", one_year: true },
  {
    nama: "Akbar Nandito Prasetia",
    number: "42",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Rizki Kurniawan", number: "43", status: "NON NPP", one_year: true },
  {
    nama: "Mokhamad Hijriawan",
    number: "46",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Putri Dewi Rahma Ani",
    number: "47",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Tarri Namira Erfarda",
    number: "49",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Ayu Endah Pratiwi",
    number: "50",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Sri Rahayu Utami Ningtyas",
    number: "52",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Raszi Hanitra Prakasa",
    number: "53",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Yofanny Amanda", number: "54", status: "NON NPP", one_year: true },
  { nama: "Angga Saputra", number: "55", status: "NON NPP", one_year: true },
  {
    nama: "Muhammad Fikri Ahsanandi",
    number: "56",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Siti Niken Rahmi Maulida",
    number: "57",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Heru Katanda", number: "58", status: "NON NPP", one_year: true },
  {
    nama: "Shevia Zulfa Salsabila",
    number: "59",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Muhammad Syah Fadel",
    number: "60",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Muhammad Alfatian",
    number: "61",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Rifki Rizqullah Zamar",
    number: "67",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Wisnu Hanifanto", number: "68", status: "NON NPP", one_year: true },
  { nama: "Sulityo Basuki", number: "70", status: "NON NPP", one_year: true },
  { nama: "Siti Istiqomah", number: "71", status: "NON NPP", one_year: true },
  {
    nama: "Ifang Firman Elangsyah",
    number: "72",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Tarifa Fibula Falani",
    number: "73",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Rasyid Ihsan Putra Selian",
    number: "74",
    status: "NON NPP",
    one_year: true,
  },
  {
    nama: "Intan Halimatus Sadiyah",
    number: "75",
    status: "NON NPP",
    one_year: true,
  },
  { nama: "Nanang", number: "76", status: "NON NPP", one_year: true },
  { nama: "Irwan", number: "77", status: "NON NPP", one_year: true },
  { nama: "Nurzaman", number: "78", status: "NON NPP", one_year: true },
  { nama: "Jupri", number: "79", status: "NON NPP", one_year: true },
  { nama: "Adit", number: "80", status: "NON NPP", one_year: true },
  { nama: "Irvan", number: "81", status: "NON NPP", one_year: true },
];

export default function Home() {
  const router = useRouter();
  const [participants, setParticipants] = useState([]);
  const [participantsNPP, setParticipantsNPP] = useState([]);
  const [participantsNonNPP, setParticipantsNonNPP] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const storedParticipants = localStorage.getItem("participants");
    const storedParticipantsNPP = localStorage.getItem("participantsNPP");
    const storedParticipantsNonNPP = localStorage.getItem("participantsNonNPP");

    setParticipants(
      storedParticipants ? JSON.parse(storedParticipants) : participantsData
    );
    setParticipantsNPP(
      storedParticipantsNPP
        ? JSON.parse(storedParticipantsNPP)
        : participantsDataNPP
    );
    setParticipantsNonNPP(
      storedParticipantsNonNPP
        ? JSON.parse(storedParticipantsNonNPP)
        : participantsDataNonNPP
    );

    localStorage.setItem(
      "participants",
      JSON.stringify(participantsDataNPP.concat(participantsDataNonNPP))
    );
    localStorage.setItem(
      "participantsNPP",
      JSON.stringify(participantsDataNPP)
    );
    localStorage.setItem(
      "participantsNonNPP",
      JSON.stringify(participantsDataNonNPP)
    );
  }, []);

  const navigateToPage = (path: any) => {
    router.push(path);
  };

  return (
    <div className="bg-black">
      <img
        src="/border-new.png"
        alt="Border"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAEFD9]">
        <div className="flex gap-2 mt-3">
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/grandprize")}
          >
            <img src="/smarttv.png" alt="Cash 200K" className="w-32 h-32" />
            GRAND PRIZE
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/smartwatch")}
          >
            <img src="/smartwatch.png" alt="Cash 200K" className="w-20 h-20" />
            SMARTWATCH
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/tumbler")}
          >
            <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" />
            TUMBLER
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/speaker")}
          >
            <img src="/speaker.png" alt="Cash 200K" className="w-20 h-20" />
            SPEAKER
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/ewallet1")}
          >
            <img src="/250k.png" alt="Cash 200K" className="w-20 h-20" />E
            WALLET 1
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/ewallet2")}
          >
            <img src="/200k.png" alt="Cash 200K" className="w-20 h-20" />E
            WALLET 2
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/ewallet3")}
          >
            <img src="/100k.png" alt="Cash 200K" className="w-20 h-20" />E
            WALLET 3
          </button>
        </div>
        <div className="mt-4">
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-orange-500 hover:bg-orange-400 font-bold flex flex-col justify-center items-center`}
            onClick={() => {
              localStorage.clear();
            }}
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}
