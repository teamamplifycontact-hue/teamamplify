import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { client } from "../lib/microcms";
import type { News } from "../types/news";

type Props = {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
};

export default async function News({ searchParams }: Props) {
  const { page, category } = await searchParams;

  const currentPage = Number(page) || 1;
  const limit = 2;

  const data = await client.get({
    endpoint: "news",
    queries: {
      limit,
      offset: (currentPage - 1) * limit,
      orders: "-publishedAt",
      ...(category
        ? {
            filters: `category[equals]${category}`,
          }
        : {}),
    },
  });

  const totalPages = Math.ceil(data.totalCount / limit);

  let pages: number[] = [];

  if (totalPages <= 3) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (currentPage === 1) {
    pages = [1, 2, 3];
  } else if (currentPage >= totalPages - 2) {
    pages = [totalPages - 2, totalPages - 1, totalPages];
  } else {
    pages = [currentPage, currentPage + 1, currentPage + 2];
  }

  const categories = [
    { label: "ALL", slug: "" },
    { label: "TEAM", slug: "team" },
    { label: "EVENT", slug: "event" },
    { label: "MEDIA", slug: "media" },
    { label: "RESULT", slug: "result" },
    { label: "PARTNER", slug: "partner" },
    { label: "STORE", slug: "store" },
    { label: "etc", slug: "etc" },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <main className="w-full max-w-[1362px] mx-auto pt-[80px] pb-[120px] px-6">
          <div className="flex justify-center gap-10 mt-20 mb-16">
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={item.slug ? `/news?category=${item.slug}` : "/news"}
                className={`font-bold transition
      ${
        category === item.slug || (!category && item.slug === "")
          ? "text-black"
          : "text-gray-400 hover:text-black"
      }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Grid */}
          <div className="grid  grid-cols-3 mt-[141px] gap-x-8 gap-y-12 max-lg:grid-cols-2 max-md:grid-cols-1">
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

                <p className="mt-1 text-[14px] font-bold">
                  {new Date(news.publishedAt)
                    .toLocaleDateString("ja-JP")
                    .replace(/\//g, ".")}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center gap-10 mt-24">
            {/* 左側の ... */}
            {pages[0] > 1 && (
              <span className="text-[20px] font-bold text-[#A7A7A7]">...</span>
            )}

            {pages.map((page) => (
              <Link
                key={page}
                href={
                  category
                    ? `/news?page=${page}&category=${category}`
                    : `/news?page=${page}`
                }
                className={`text-[20px] font-bold transition ${
                  page === currentPage
                    ? "text-black"
                    : "text-[#A7A7A7] hover:text-black"
                }`}
              >
                {page}
              </Link>
            ))}

            {/* 右側の ... */}
            {pages[pages.length - 1] < totalPages && (
              <span className="text-[20px] font-bold text-[#A7A7A7]">...</span>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
