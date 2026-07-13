import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { client } from "../lib/microcms";
import type { Member } from "../types/member";

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function Members({ searchParams }: Props) {
  const { category } = await searchParams;

  const data = await client.get({
    endpoint: "members",
    queries: {
      orders: "name",
      ...(category && category !== "ALL"
        ? {
            filters: `category[equals]${category}`,
          }
        : {}),
    },
  });

  const categories = [
    { label: "ALL", slug: "" },
    { label: "APEX LEGENDS", slug: "APEX" },
    { label: "STREET FIGHTER", slug: "STREET FIGHTER" },
    { label: "STREAMER", slug: "STREAMER" },
    { label: "VALORANT", slug: "VALORANT" },
    { label: "VALORANT ACADEMY", slug: "VALORANT ACADEMY" },
    { label: "VALORANT GC", slug: "VALORANT GC" },
    { label: "STAFF", slug: "STAFF" },
    { label: "CREATOR", slug: "CREATOR" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-[170px] pb-[120px]">
        {/* CATEGORY */}
        <section className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={item.slug ? `/members?category=${item.slug}` : "/members"}
                className={`px-7 h-[46px] rounded-full font-bold text-[14px] duration-300 flex items-center justify-center ${
                  (!category && item.slug === "") || category === item.slug
                    ? "bg-[#D9B600] text-black"
                    : "bg-neutral-200 hover:bg-[#D9B600]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        {/* MEMBER GRID */}
        <section className="max-w-[1320px] mx-auto px-4 sm:px-6 mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {data.contents.map((member: Member) => (
              <Link
                key={member.id}
                href={`/members/${member.slug}`}
                className="flex flex-col items-center w-full max-w-[170px] group"
              >
                <div className="relative w-full aspect-square rounded-[28px] overflow-hidden bg-neutral-100">
                  <Image
                    src={member.image.url}
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
