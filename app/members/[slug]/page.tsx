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

  const teamData = await client.get({
    endpoint: "members",
    queries: {
      filters: `affiliation[equals]${member.affiliation.id}`,
    },
  });

  const teamMembers = teamData.contents;

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
              <p className="text-[#A7A7A7] text-[13px] font-medium uppercase tracking-[0.18em]">
                {member.role}
              </p>

              <h1 className="mt-3 text-[58px] font-black leading-none uppercase">
                {member.name}
              </h1>

              <p className="mt-3 text-[15px] text-[#8B8B8B] tracking-[0.08em]">
                {member.englishName}
              </p>

              {member.birthday && (
                <p className="mt-5 text-[14px] text-[#8B8B8B]">
                  {member.birthday}
                </p>
              )}

              <div className="w-full h-px bg-[#D8D8D8] my-8"></div>

              <p className="text-[20px] leading-[2.2] whitespace-pre-line">
                {member.profile}
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-[1320px] mx-auto px-6 mt-32">
          <h2 className="text-[52px] font-black">TEAM</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {teamMembers.map((m: Member) => (
              <>
                <Link
                  key={m.id}
                  href={`/members/${m.slug}`}
                  className="group flex flex-col items-center"
                >
                  <div className="relative w-[150px] aspect-square rounded-[28px] overflow-hidden bg-neutral-100">
                    <Image
                      src={m.image.url}
                      alt={m.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-4 text-[18px] font-black">{m.name}</p>

                  <p className="text-[15px] uppercase tracking-[0.15em] text-neutral-500">
                    {m.role}
                  </p>
                </Link>
                <Link
                  key={m.id}
                  href={`/members/${m.slug}`}
                  className="group flex flex-col items-center"
                >
                  <div className="relative w-[150px] aspect-square rounded-[28px] overflow-hidden bg-neutral-100">
                    <Image
                      src={m.image.url}
                      alt={m.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-4 text-[18px] font-black">{m.name}</p>

                  <p className="text-[15px] uppercase tracking-[0.15em] text-neutral-500">
                    {m.role}
                  </p>
                </Link>
                <Link
                  key={m.id}
                  href={`/members/${m.slug}`}
                  className="group flex flex-col items-center"
                >
                  <div className="relative w-[150px] aspect-square rounded-[28px] overflow-hidden bg-neutral-100">
                    <Image
                      src={m.image.url}
                      alt={m.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-4 text-[18px] font-black">{m.name}</p>

                  <p className="text-[15px] uppercase tracking-[0.15em] text-neutral-500">
                    {m.role}
                  </p>
                </Link>
                <Link
                  key={m.id}
                  href={`/members/${m.slug}`}
                  className="group flex flex-col items-center"
                >
                  <div className="relative w-[150px] aspect-square rounded-[28px] overflow-hidden bg-neutral-100">
                    <Image
                      src={m.image.url}
                      alt={m.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-4 text-[18px] font-black">{m.name}</p>

                  <p className="text-[15px] uppercase tracking-[0.15em] text-neutral-500">
                    {m.role}
                  </p>
                </Link>
              </>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
