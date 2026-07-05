"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const newsList = [
  {
    id: 1,
    title: "ストリーマー部門 新メンバー『neotex』加入のお知らせ",
    date: "2026.06.03",
    image: "/test01.png",
  },
  {
    id: 2,
    title: "VALORANT GC部門設立及び選手加入のお知らせ",
    date: "2026.06.01",
    image: "/test01.png",
  },
  {
    id: 3,
    title: "VALORANT部門コーチ加入のお知らせ",
    date: "2026.05.29",
    image: "/test01.png",
  },
  {
    id: 4,
    title: "eスポーツチーム『Amplify』始動のお知らせ",
    date: "2026.05.03",
    image: "/test01.png",
  },
  {
    id: 5,
    title: "VALORANT GC部門設立及び選手加入のお知らせ",
    date: "2026.06.01",
    image: "/test01.png",
  },
  {
    id: 6,
    title: "VALORANT部門コーチ加入のお知らせ",
    date: "2026.05.29",
    image: "/test01.png",
  },
  {
    id: 7,
    title: "ストリーマー部門 新メンバー『neotex』加入のお知らせ",
    date: "2026.06.03",
    image: "/test01.png",
  },
  {
    id: 8,
    title: "VALORANT GC部門設立及び選手加入のお知らせ",
    date: "2026.06.01",
    image: "/test01.png",
  },
  {
    id: 9,
    title: "VALORANT部門コーチ加入のお知らせ",
    date: "2026.05.29",
    image: "/test01.png",
  },
];

export default function News() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <main className="w-full max-w-[1362px] mx-auto pt-[80px] pb-[120px] px-6">
          {/* Grid */}
          <div className="grid  grid-cols-3 mt-[141px] mb-[452px] gap-x-8 gap-y-12 max-lg:grid-cols-2 max-md:grid-cols-1">
            {newsList.map((news) => (
              <Link
                href={`/news/${news.id}`}
                key={news.id}
                className="group w-[426px]"
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-[426px] h-[236px] object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <h2 className="mt-5 text-[16px] font-bold leading-6">
                  {news.title}
                </h2>

                <p className="mt-1 text-[14px] font-bold">{news.date}</p>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
