
"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

const participantsDataNPP = [
  {
    "nama": "Bu Nur",
    "number": "01",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Tiwi",
    "number": "02",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Sukmo",
    "number": "03",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Zafran",
    "number": "04",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Hafidz",
    "number": "05",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Wulan",
    "number": "06",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Arif",
    "number": "07",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Fathan",
    "number": "08",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Aisyah",
    "number": "09",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Kenzie",
    "number": "10",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Endah",
    "number": "11",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Tinton",
    "number": "12",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Sarah",
    "number": "13",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Windah",
    "number": "14",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Didit",
    "number": "15",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Sagara",
    "number": "16",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Asti",
    "number": "17",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Agung",
    "number": "18",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Kanza",
    "number": "19",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Aira",
    "number": "20",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Siti",
    "number": "21",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Mualif",
    "number": "22",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Iga",
    "number": "23",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Anggi",
    "number": "24",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Anis",
    "number": "25",
    "status": "NPP",
    "one_year": true
  }
];

const participantsDataNonNPP = [
  {
    "nama": "Febrianti ",
    "number": "01",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Akbar Nandito Prasetia ",
    "number": "03",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Fachry Dhany",
    "number": "06",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Muhammad Fikri Ahsanandi",
    "number": "10",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Sri Rahayu Utami",
    "number": "12",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Yofanny Amanda",
    "number": "13",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Tarri Namira Erfarda",
    "number": "15",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Irwan",
    "number": "16",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Shevia Zulva Salsabila",
    "number": "20",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Hesa Alfathona",
    "number": "32",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Mokhamad Hijriawan",
    "number": "34",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Muhammad Syah Fadhel",
    "number": "35",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Raszi Hanitra",
    "number": "37",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Ayu Endah Pratiwi",
    "number": "41",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Irfan",
    "number": "46",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Ivan Fabriano Syahputra",
    "number": "48",
    "status": "NON NPP",
    "one_year": true
  },
  {
    "nama": "Muhammad Alfatian",
    "number": "50",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Siti Niken Rahmi Maulida",
    "number": "54",
    "status": "NON NPP",
    "one_year": false
  },
  {
    "nama": "Nanang",
    "number": "56",
    "status": "NON NPP",
    "one_year": true
  }
];

const participantsData = [
  {
    "nama": "Bu Nur",
    "number": "01",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Tiwi",
    "number": "02",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Sukmo",
    "number": "03",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Zafran",
    "number": "04",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Hafidz",
    "number": "05",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Wulan",
    "number": "06",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Arif",
    "number": "07",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Fathan",
    "number": "08",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Aisyah",
    "number": "09",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Kenzie",
    "number": "10",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Endah",
    "number": "11",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Tinton",
    "number": "12",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Sarah",
    "number": "13",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Windah",
    "number": "14",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Didit",
    "number": "15",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Sagara",
    "number": "16",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Asti",
    "number": "17",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Agung",
    "number": "18",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Kanza",
    "number": "19",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Aira",
    "number": "20",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Siti",
    "number": "21",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Pak Mualif",
    "number": "22",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Iga",
    "number": "23",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Anggi",
    "number": "24",
    "status": "NPP",
    "one_year": true
  },
  {
    "nama": "Bu Anis",
    "number": "25",
    "status": "NPP",
    "one_year": true
  }
]


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

    setParticipants(storedParticipants ? JSON.parse(storedParticipants) : participantsDataNPP.concat(participantsDataNonNPP));
    setParticipantsNPP(storedParticipantsNPP ? JSON.parse(storedParticipantsNPP) : participantsDataNPP);
    setParticipantsNonNPP(storedParticipantsNonNPP ? JSON.parse(storedParticipantsNonNPP) : participantsDataNonNPP);

    localStorage.setItem("participants", JSON.stringify(participantsDataNPP.concat(participantsDataNonNPP)));
    localStorage.setItem("participantsNPP", JSON.stringify(participantsDataNPP));
    localStorage.setItem("participantsNonNPP", JSON.stringify(participantsDataNonNPP));
  }, []);

  const navigateToPage = (path: any) => {
    router.push(path);
  };


  return (
    <div className='bg-black'>
      <img
        src="/border.png"
        alt="Border"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEDFB6]">
        <h1 className="text-6xl font-bold mb-6 text-[#401606]">Undian Gathering Keluarga</h1>
        <div className="flex gap-2 mt-3">
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/smarttv")}
          >
            {/* <img src="/smarttv.png" alt="Cash 200K" className="w-32 h-32" /> */}
            Dinner Set
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/smartwatch")}
          >
            {/* <img src="/smartwatch.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Blanket
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/tws")}
          >
            {/* <img src="/tws.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Coffe Cup
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/corkcicle")}
          >
            {/* <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Blander Portable
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/powerbank")}
          >
            {/* <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Power Bank
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/tableclock")}
          >
            {/* <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Table Clock
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/jamdinding")}
          >
            {/* <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Jam Dinding
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/mouse")}
          >
            {/* <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Mouse
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/earphone")}
          >
            {/* <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Earphone
          </button>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-[#008109] hover:bg-[#429F00] font-bold flex flex-col justify-center items-center`}
            onClick={() => navigateToPage("/kaosrunning")}
          >
            {/* <img src="/corkcicle.png" alt="Cash 200K" className="w-20 h-20" /> */}
            Kaos Running
          </button>
        </div>
        <div className='mt-16'>
          <button
            className={`px-6 py-3 text-lg text-white rounded-lg transition-colors bg-orange-500 hover:bg-orange-400 font-bold flex flex-col justify-center items-center`}
            onClick={() => { localStorage.clear() }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}


