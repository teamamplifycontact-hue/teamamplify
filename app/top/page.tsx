"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
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
    className="w-full h-auto"
  />
</section>

        {/* =========================
            SPONSOR
        ========================= */}

        <section className="py-[80px]">

          <div className="flex justify-center items-center gap-24">

            <Image
              src="/AEL.png"
              alt="AEL"
              width={140}
              height={60}
            />

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

          <div className="max-w-[1320px] mx-auto py-[120px] text-center">

            <Image
              src="/シンボルマーク_wh 2.png"
              alt=""
              width={42}
              height={42}
              className="mx-auto mb-10"
            />

            <h2 className="text-[72px] font-black tracking-[-0.04em] leading-none">

              <span className="font-black">AMPLIFY</span>

              <span className="font-light">
                {" "}CULTURE.
              </span>

              <span className="font-black">
                {" "}AMPLIFY
              </span>

              <span className="font-light">
                {" "}PASSION.
              </span>

            </h2>

            <p className="max-w-[760px] mx-auto mt-10 text-[18px] leading-[2]">

              Amplifyは、競技シーンの最前線から、
              ライフスタイル、そして地域コミュニティへと繋がる
              新たなゲーミングカルチャーを創造するeスポーツチームです。

              誰もが主役になれる舞台を、
              私たちがデザインします。

            </p>

            <button
              className="
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
            </button>

          </div>

        </section>
            {/* =========================
                NEWS
            ========================= */}

            <section className="py-[140px] bg-white">
              <div className="max-w-[1320px] mx-auto">

                <h2 className="text-[42px] font-black mb-14">
                  NEWS
                </h2>

                <div className="grid grid-cols-3 gap-x-10 gap-y-16">

                  {/* CARD 1 */}

                  <article className="group cursor-pointer">

                    <div className="overflow-hidden rounded-lg">

                      <Image
                        src="/news/news1.jpg"
                        alt=""
                        width={410}
                        height={230}
                        className="w-full duration-500 group-hover:scale-105"
                      />

                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-relaxed">
                      ストリーマー部門 新メンバー「neotex」加入のお知らせ
                    </h3>

                    <p className="mt-3 text-sm text-neutral-500">
                      2026.06.03
                    </p>

                  </article>

                  {/* CARD 2 */}

                  <article className="group cursor-pointer">

                    <div className="overflow-hidden rounded-lg">

                      <Image
                        src="/news/news2.jpg"
                        alt=""
                        width={410}
                        height={230}
                        className="w-full duration-500 group-hover:scale-105"
                      />

                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-relaxed">
                      VALORANT GC部門設立及び選手加入のお知らせ
                    </h3>

                    <p className="mt-3 text-sm text-neutral-500">
                      2026.06.01
                    </p>

                  </article>

                  {/* CARD 3 */}

                  <article className="group cursor-pointer">

                    <div className="overflow-hidden rounded-lg">

                      <Image
                        src="/news/news3.jpg"
                        alt=""
                        width={410}
                        height={230}
                        className="w-full duration-500 group-hover:scale-105"
                      />

                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-relaxed">
                      VALORANT部門 コーチ加入のお知らせ
                    </h3>

                    <p className="mt-3 text-sm text-neutral-500">
                      2026.05.29
                    </p>

                  </article>

                  {/* CARD 4 */}

                  <article className="group cursor-pointer">

                    <div className="overflow-hidden rounded-lg">

                      <Image
                        src="/news/news4.jpg"
                        alt=""
                        width={410}
                        height={230}
                        className="w-full duration-500 group-hover:scale-105"
                      />

                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-relaxed">
                      eスポーツチーム「Amplify」始動のお知らせ
                    </h3>

                    <p className="mt-3 text-sm text-neutral-500">
                      2026.05.01
                    </p>

                  </article>

                  {/* CARD 5 */}

                  <article className="group cursor-pointer">

                    <div className="overflow-hidden rounded-lg">

                      <Image
                        src="/news/news5.jpg"
                        alt=""
                        width={410}
                        height={230}
                        className="w-full duration-500 group-hover:scale-105"
                      />

                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-relaxed">
                      VALORANT GC部門設立及び選手加入のお知らせ
                    </h3>

                    <p className="mt-3 text-sm text-neutral-500">
                      2026.06.01
                    </p>

                  </article>

                  {/* CARD 6 */}

                  <article className="group cursor-pointer">

                    <div className="overflow-hidden rounded-lg">

                      <Image
                        src="/news/news6.jpg"
                        alt=""
                        width={410}
                        height={230}
                        className="w-full duration-500 group-hover:scale-105"
                      />

                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-relaxed">
                      VALORANT部門 コーチ加入のお知らせ
                    </h3>

                    <p className="mt-3 text-sm text-neutral-500">
                      2026.05.29
                    </p>

                  </article>

                </div>
              </div>
            </section>
            {/* =========================
    STORE
========================= */}

<section className="py-[140px] bg-white">
  <div className="max-w-[1320px] mx-auto">

    <div className="flex items-center justify-between mb-10">

      <div>
        <p className="text-sm tracking-[0.3em] text-neutral-500">
          OFFICIAL STORE
        </p>

        <h2 className="text-[48px] font-black mt-2">
          Amplify STORE
        </h2>
      </div>

      <button
        className="
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
      </button>

    </div>

    <div className="group overflow-hidden rounded-[24px] cursor-pointer">

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

<section className="py-[140px] bg-[#f7f7f7]">
  <div className="max-w-[1320px] mx-auto">

    <div className="text-center mb-16">
      <p className="text-sm tracking-[0.3em] text-neutral-500">
        OUR PARTNERS
      </p>

      <h2 className="text-[48px] font-black mt-2">
        PARTNER
      </h2>
    </div>

    <div className="grid grid-cols-3 gap-10">

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
            rounded-[24px]
            h-[180px]
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
            width={180}
            height={80}
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