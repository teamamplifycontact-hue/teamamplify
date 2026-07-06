import { client } from "../lib/microcms";
import type { News } from "../types/news";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
    queries: {
      limit: 6,
      orders: "-publishedAt",
    },
  });
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main>
        {/* =========================
            HERO
        ========================= */}

        <section>
          <Image
            src="/topimage.png"
            alt="Amplify"
            width={1920}
            height={1080}
            priority
            className="
              w-full
              h-auto
              object-cover
              md:h-auto
              h-[520px]
            "
          />
        </section>

        {/* =========================
            SPONSOR
        ========================= */}

        <section className="py-10 md:py-[80px]">
          <div className="flex justify-center items-center gap-10 md:gap-24">
            <Image src="/AEL.png" alt="AEL" width={140} height={60} />

            <Image
              src="/ekatsu_logo_simple_black_1 1.png"
              alt="E活"
              width={90}
              height={60}
            />
          </div>
        </section>

        {/* =========================
            CONCEPT
        ========================= */}

        <section className="bg-[#151515] text-white">
          <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-[120px] text-center">
            <Image
              src="/シンボルマーク_wh 2.png"
              alt=""
              width={42}
              height={42}
              className="mx-auto mb-10"
            />

            <h2 className="text-[34px] md:text-[56px] xl:text-[65px] font-black tracking-[-0.001em] leading-tight">
              <span className="font-black">AMPLIFY</span>

              <span className="font-light"> CULTURE.</span>

              <br className="block md:hidden" />

              <span className="hidden md:inline"> </span>

              <span className="font-black">AMPLIFY</span>

              <span className="font-light"> PASSION.</span>
            </h2>

            <p className="max-w-[760px] mx-auto mt-8 text-[15px] md:text-[18px] leading-[2] px-4">
              Amplifyは、競技シーンの最前線から、
              ライフスタイル、そして地域コミュニティへと繋がる
              新たなゲーミングカルチャーを創造するeスポーツチームです。
              誰もが主役になれる舞台を、 私たちがデザインします。
            </p>

            <Link
              href="/about"
              className="
                inline-flex
                items-center
                justify-center
                mt-14
                px-12
                h-[56px]
                rounded-full
                bg-white
                text-black
                text-[14px]
                font-bold
                hover:scale-105
                duration-300
              "
            >
              MORE ABOUT
            </Link>
          </div>
        </section>
        {/* =========================
                NEWS
            ========================= */}

        <section className="py-16 md:py-[140px] bg-white">
          <div className="max-w-[1320px] mx-auto px-6">
            <h2 className="text-[30px] md:text-[42px] font-black mb-10 md:mb-14">
              NEWS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-10 md:gap-y-16">
              {data.contents.map((news: News) => (
                <Link key={news.id} href={`/news/${news.id}`} className="group">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={news.eyecatch.url}
                      alt={news.title}
                      className="w-full duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 md:mt-5 text-[13px] md:text-[18px] font-semibold leading-relaxed">
                    {news.title}
                  </h3>

                  <p className="mt-2 md:mt-3 text-[11px] md:text-sm text-neutral-500">
                    {new Date(news.publishedAt)
                      .toLocaleDateString("ja-JP")
                      .replace(/\//g, ".")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* =========================
    STORE
========================= */}

        <section className="py-16 md:py-[140px] bg-white">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm tracking-[0.3em] text-neutral-500">
                  OFFICIAL STORE
                </p>

                <h2 className="text-[32px] md:text-[48px] font-black mt-2">
                  Amplify STORE
                </h2>
              </div>

              <Link
                href="https://amplify.base.ec"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                justify-center
                h-[52px]
                px-8
                rounded-full
                border
                border-black
                font-semibold
                hover:bg-black
                hover:text-white
                duration-300
              "
              >
                VIEW ALL
              </Link>
            </div>

            <div className="group overflow-hidden rounded-[16px] md:rounded-[24px] cursor-pointer">
              <Image
                src="/ポリライン 1.png"
                alt="Amplify STORE"
                width={1320}
                height={620}
                className="
          w-full
          h-auto
          duration-500
          group-hover:scale-105
        "
              />
            </div>
          </div>
        </section>
        {/* =========================
    PARTNER
========================= */}

        <section className="py-16 md:py-[140px] bg-[#f7f7f7]">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] text-neutral-500">
                OUR PARTNERS
              </p>

              <h2 className="text-[32px] md:text-[48px] font-black mt-2">
                PARTNER
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
              {[
                "/AEL.png",
                "/ekatsu_logo_simple_black_1 1.png",
                "/partner/partner3.png",
                "/partner/partner4.png",
                "/partner/partner5.png",
                "/partner/partner6.png",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="
                  bg-white
                  rounded-[16px] md:rounded-[24px]
                  h-[120px] md:h-[180px]
                  flex
                  items-center
                  justify-center
                  border
                  border-neutral-200
                  hover:shadow-lg
                  duration-300
                "
                >
                  <Image
                    src={logo}
                    alt=""
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
