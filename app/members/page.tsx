"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

const members = [
  {
    name: "トマケチャ",
    image: "/members_tomakecha.jpg",
    category: "CREATOR",
  },
  {
    name: "Foxx",
    image: "/member_default.png",
    category: "VALORANT",
  },
  {
    name: "Tane",
    image: "/member_default.png",
    category: "VALORANT ACADEMY",
  },
  {
    name: "KENTARO",
    image: "/member_kentaro.png",
    category: "STREAMER",
  },
  {
    name: "Larme",
    image: "/member_larme.png",
    category: "STAFF",
  },
  {
    name: "むちきん",
    image: "/member_muchikin.png",
    category: "VALORANT",
  },
  {
    name: "tori",
    image: "/member_default.png",
    category: "VALORANT",
  },
  {
    name: "Hary",
    image: "/member_default.png",
    category: "VALORANT",
  },
  {
    name: "Kurikinton",
    image: "/member_default.png",
    category: "VALORANT",
  },
  {
    name: "Ru4hreyli",
    image: "/member_default.png",
    category: "VALORANT",
  },
  {
    name: "Akar1i",
    image: "/member_default.png",
    category: "VALORANT",
  },
  {
    name: "neotex",
    image: "/member_neotex.png",
    category: "STREAMER",
  },
  {
    name: "蛇灰華まがの",
    image: "/member_magano.png",
    category: "STREAMER",
  },
  {
    name: "甘噛のあ",
    image: "/member_amagami-noa.png",
    category: "STREAMER",
  },
  {
    name: "柏餅ういろー",
    image: "/member_uilow.png",
    category: "STREET FIGHTER",
  },
  {
    name: "がくさい",
    image: "/member_gakusai.png",
    category: "VALORANT ACADEMY",
  },
  {
    name: "pixie",
    image: "/member_default.png",
    category: "VALORANT ACADEMY",
  },
  {
    name: "だいち",
    image: "/member_default.png",
    category: "VALORANT ACADEMY",
  },
  {
    name: "なこた。",
    image: "/member_default.png",
    category: "VALORANT ACADEMY",
  },
  {
    name: "ねお",
    image: "/member_default.png",
    category: "VALORANT ACADEMY",
  },
  {
    name: "ハンマーカンマー",
    image: "/member_default.png",
    category: "VALORANT ACADEMY",
  },
  {
    name: "そらしゃろ",
    image: "/member_default.png",
    category: "VALORANT GC",
  },
  {
    name: "Xsi",
    image: "/member_default.png",
    category: "VALORANT GC",
  },
  {
    name: "もえちゃん",
    image: "/member_default.png",
    category: "VALORANT GC",
  },
  {
    name: "WataJam",
    image: "/member_default.png",
    category: "STREET FIGHTER",
  },
  {
    name: "azin",
    image: "/member_default.png",
    category: "STAFF",
  },
];

export default function Members() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredMembers = (
    activeCategory === "ALL"
      ? members
      : members.filter((member) => member.category === activeCategory)
  ).sort((a, b) => a.name.localeCompare(b.name, "ja"));

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-[170px] pb-[120px]">
        {/* CATEGORY */}
        <section className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory("ALL")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "ALL"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              ALL
            </button>

            <button
              onClick={() => setActiveCategory("APEX")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "APEX"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              APEX LEGENDS
            </button>

            <button
              onClick={() => setActiveCategory("STREET FIGHTER")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "STREET FIGHTER"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              STREET FIGHTER
            </button>

            <button
              onClick={() => setActiveCategory("STREAMER")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "STREAMER"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              STREAMER
            </button>

            <button
              onClick={() => setActiveCategory("VALORANT")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "VALORANT"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              VALORANT
            </button>

            <button
              onClick={() => setActiveCategory("VALORANT ACADEMY")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "VALORANT ACADEMY"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              VALORANT ACADEMY
            </button>

            <button
              onClick={() => setActiveCategory("VALORANT GC")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "VALORANT GC"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              VALORANT GC
            </button>

            <button
              onClick={() => setActiveCategory("STAFF")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "STAFF"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              STAFF
            </button>

            <button
              onClick={() => setActiveCategory("CREATOR")}
              className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 ${
                activeCategory === "CREATOR"
                  ? "bg-[#D9B600] text-black"
                  : "bg-neutral-200 hover:bg-[#D9B600]"
              }`}
            >
              CREATOR
            </button>
          </div>
        </section>

        {/* MEMBER GRID */}
        <section className="max-w-[1320px] mx-auto px-6 mt-20">
          <div className="grid grid-cols-3 min-[960px]:grid-cols-4 min-[1280px]:grid-cols-5 gap-[25px] justify-items-center">
            {filteredMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-[170px] h-[170px] mx-auto rounded-[28px] overflow-hidden bg-neutral-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-5 text-[24px] font-black">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
