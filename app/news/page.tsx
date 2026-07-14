import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../lib/microcms";
import Link from "next/link";
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
  const limit = 15;

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
  } else if (currentPage <= 2) {
    pages = [1, 2, 3];
  } else if (currentPage >= totalPages - 1) {
    pages = [totalPages - 2, totalPages - 1, totalPages];
  } else {
    pages = [currentPage - 1, currentPage, currentPage + 1];
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="w-full max-w-[1362px] mx-auto pt-[80px] pb-[120px] px-6 max-[931px]:px-5 max-[931px]:pt-[40px] max-[931px]:pb-[80px]">
        {/* Category */}
        <div
          className="
            flex justify-center
            gap-10
            mt-20
            mb-16
            max-[931px]:flex-wrap
            max-[931px]:gap-x-6
            max-[931px]:gap-y-4
            max-[931px]:mt-10
            max-[931px]:mb-10
          "
        >
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={item.slug ? `/news?category=${item.slug}` : "/news"}
              className={`font-bold transition max-[931px]:text-[14px]
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
        <div
          className="
            grid
            grid-cols-3
            gap-x-8
            gap-y-12
            mt-[141px]
            max-[931px]:grid-cols-1
            max-[931px]:gap-y-10
            max-[931px]:mt-10
          "
        >
          {data.contents.map((news: News) => (
            <Link
              href={`/news/${news.id}`}
              key={news.id}
              className="group w-full w-full mx-auto"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={news.eyecatch.url}
                  alt={news.title}
                  className="
                    w-full
                    aspect-[426/236]
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <h2 className="mt-5 text-[16px] leading-6 font-bold max-[931px]:text-[15px]">
                {news.title}
              </h2>

              <p className="mt-1 text-[14px] font-bold max-[931px]:text-[13px]">
                {new Date(news.publishedAt)
                  .toLocaleDateString("ja-JP")
                  .replace(/\//g, ".")}
              </p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div
          className="
            flex
            justify-center
            items-center
            gap-10
            mt-24
            max-[931px]:gap-5
            max-[931px]:mt-14
          "
        >
          {pages[0] > 1 && (
            <span className="text-[20px] font-bold text-[#A7A7A7] max-[931px]:text-[18px]">
              ...
            </span>
          )}

          {pages.map((page) => (
            <Link
              key={page}
              href={
                category
                  ? `/news?page=${page}&category=${category}`
                  : `/news?page=${page}`
              }
              className={`text-[20px] font-bold transition max-[931px]:text-[18px] ${
                page === currentPage
                  ? "text-black"
                  : "text-[#A7A7A7] hover:text-black"
              }`}
            >
              {page}
            </Link>
          ))}

          {pages[pages.length - 1] < totalPages && (
            <span className="text-[20px] font-bold text-[#A7A7A7] max-[931px]:text-[18px]">
              ...
            </span>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
