import { FaXTwitter, FaYoutube, FaTwitch } from "react-icons/fa6";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { client } from "@/app/lib/microcms";
import type { Member } from "@/app/types/member";

export async function generateStaticParams() {
  const data = await client.get({
    endpoint: "members",
  });

  return data.contents.map((member: Member) => ({
    slug: member.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MemberPage({ params }: Props) {
  const { slug } = await params;

  const data = await client.get({
    endpoint: "members",
    queries: {
      filters: `slug[equals]${slug}`,
    },
  });

  const member = data.contents[0];

  if (!member) {
    return <div>Member not found</div>;
  }

  const allMembers = await client.get({
    endpoint: "members",
    queries: {
      orders: "name",
    },
  });

  const currentIndex = allMembers.contents.findIndex(
    (m: Member) => m.slug === slug,
  );

  const nextMember =
    allMembers.contents[(currentIndex + 1) % allMembers.contents.length];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-[170px] pb-[120px]">
        <section className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-[350px_1fr] gap-[50px] items-center">
            {/* LEFT */}

            <div>
              <div className="relative w-full max-w-[350px] aspect-square rounded-[32px] overflow-hidden bg-neutral-100 mx-auto">
                <Image
                  src={member.image.url}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <p className="text-[#D9B600] text-[16px] font-bold uppercase tracking-[0.2em]">
                {member.category}
              </p>

              <h1 className="text-[72px] font-black mt-2 leading-none">
                {member.name}
              </h1>

              {member.birthday && (
                <p className="mt-3 text-[14px] text-neutral-400">
                  {member.birthday}
                </p>
              )}

              {/* SNS */}

              <div className="flex gap-5 mt-10">
                {member.x && (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 hover:bg-[#D9B600] hover:border-[#D9B600]"
                  >
                    <FaXTwitter size={22} />
                  </a>
                )}

                {member.youtube && (
                  <a
                    href={member.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 hover:bg-[#D9B600] hover:border-[#D9B600]"
                  >
                    <FaYoutube size={22} />
                  </a>
                )}

                {member.twitch && (
                  <a
                    href={member.twitch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 hover:bg-[#D9B600] hover:border-[#D9B600]"
                  >
                    <FaTwitch size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section className="max-w-[1320px] mx-auto px-6 mt-32">
          <h2 className="text-[42px] font-black">ABOUT</h2>

          <div className="w-20 h-1 bg-[#D9B600] mt-3 mb-10"></div>

          <p className="text-[18px] leading-10 text-neutral-700">
            {member.description}
          </p>
        </section>

        <section className="max-w-[1320px] mx-auto px-6 mt-32">
          <h2 className="text-[42px] font-black">NEXT MEMBER</h2>

          <div className="w-20 h-1 bg-[#D9B600] mt-3 mb-10"></div>

          <Link
            href={`/members/${nextMember.slug}`}
            className="flex items-center gap-8 rounded-[24px] border p-8 hover:border-[#D9B600] duration-300"
          >
            <div className="relative w-[140px] h-[140px] rounded-[20px] overflow-hidden bg-neutral-100">
              <Image
                src={nextMember.image.url}
                alt={nextMember.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-neutral-500">NEXT MEMBER</p>

              <h3 className="text-[40px] font-black">{nextMember.name}</h3>

              <p className="mt-2">{nextMember.category}</p>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
