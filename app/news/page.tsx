import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { client } from "../lib/microcms";
import type { News } from "../types/news";

export default async function News() {
  const data = await client.get({
    endpoint: "news",
  });
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <main className="w-full max-w-[1362px] mx-auto pt-[80px] pb-[120px] px-6">
          {/* Grid */}
          <div className="grid  grid-cols-3 mt-[141px] mb-[452px] gap-x-8 gap-y-12 max-lg:grid-cols-2 max-md:grid-cols-1">
            {data.contents.map((news: News) => (
              <Link
                href={`/news/${news.id}`}
                key={news.id}
                className="group w-[426px]"
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={news.eyecatch.url}
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
