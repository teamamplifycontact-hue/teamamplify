"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const members = [
  {
    name: "Foxx",
    image: "/member/default.png",
    category: "APEX",
  },
  {
    name: "Tane",
    image: "/member/default.png",
    category: "VALORANT",
  },
  {
    name: "KENTARO",
    image: "/member/kentaro.png",
    category: "STREAMER",
  },
];

export default function Members() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-[110px] pb-[120px]">
        {/* CATEGORY */}
        <section className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-7 h-[46px] rounded-full bg-neutral-200 font-bold text-[14px] hover:bg-[#D9B600] duration-300">
              APEX LEGENDS
            </button>

            <button className="px-7 h-[46px] rounded-full bg-neutral-200 font-bold text-[14px] hover:bg-[#D9B600] duration-300">
              STREET FIGHTER
            </button>

            <button className="px-7 h-[46px] rounded-full bg-neutral-200 font-bold text-[14px] hover:bg-[#D9B600] duration-300">
              STREAMER
            </button>

            <button className="px-7 h-[46px] rounded-full bg-neutral-200 font-bold text-[14px] hover:bg-[#D9B600] duration-300">
              VALORANT
            </button>

            <button className="px-7 h-[46px] rounded-full bg-neutral-200 font-bold text-[14px] hover:bg-[#D9B600] duration-300">
              VALORANT ACADEMY
            </button>

            <button className="px-7 h-[46px] rounded-full bg-neutral-200 font-bold text-[14px] hover:bg-[#D9B600] duration-300">
              VALORANT GC
            </button>
          </div>
        </section>

        {/* MEMBER GRID */}

        <section className="max-w-[1320px] mx-auto px-6 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-10">
            {members.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-[170px] h-[170px] mx-auto rounded-[28px] overflow-hidden bg-neutral-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-5 text-[28px] font-black">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
