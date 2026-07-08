"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";
import { members } from "@/data/members";

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
        <section className="max-w-[1320px] mx-auto px-4 sm:px-6 mt-20">
          <div
            className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    xl:grid-cols-5
    gap-6
    justify-items-center
  "
          >
            {filteredMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/members/${member.slug}`}
                className="flex flex-col items-center w-full max-w-[170px] group"
              >
                <div
                  className="
          relative
          w-full
          aspect-square
          rounded-[28px]
          overflow-hidden
          bg-neutral-100
        "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-black text-center">
                  {member.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
