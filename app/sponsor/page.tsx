"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Sponsor() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative h-[700px] overflow-hidden flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/sponsor_hero_video.mp4" type="video/mp4" />
          </video>

          {/* 黒いオーバーレイ */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="tracking-[0.3em] text-sm mb-4">SPONSOR</p>

            <h1 className="text-[44px] md:text-[72px] font-black leading-tight">
              Amplifyと共に、
              <br />
              ゲームカルチャーの
              <br className="md:hidden" />
              未来を創る。
            </h1>

            <p className="mt-8 max-w-[700px] mx-auto leading-8 text-white/80">
              Amplifyは、eスポーツを通じて地域・企業・プレイヤーを繋ぎ、
              新しいゲームカルチャーを創造します。
            </p>

            <Link
              href="/contact"
              className="
inline-flex
mt-10
h-[54px]
px-10
rounded-full
bg-white
text-black
font-bold
items-center
justify-center
transition-all
duration-300
hover:bg-[#D9B600]
hover:shadow-xl
hover:-translate-y-1
"
            >
              お問い合わせ
            </Link>
          </div>
        </section>

        {/* MESSAGE */}

        <section className="py-[140px]">
          <div className="max-w-[900px] mx-auto px-6">
            <p className="text-sm tracking-[0.3em] text-neutral-500">MESSAGE</p>

            <h2 className="text-[48px] font-black mt-4 leading-tight">
              スポンサーではなく、
              <br />
              共創パートナーへ。
            </h2>

            <p className="mt-10 leading-[2] text-[17px]">
              Amplifyはスポンサー企業様を広告主ではなく、
              共に価値を創るパートナーとして考えています。
              eスポーツ・地域・デザインを掛け合わせ、
              長く愛されるブランドづくりを目指しています。
            </p>
          </div>
        </section>

        {/* WHY */}

        <section className="py-[120px] bg-[#151515] text-white">
          <div className="max-w-[1320px] mx-auto px-6">
            <h2 className="text-[48px] font-black mb-14">WHY AMPLIFY</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="
    bg-[#1E1E1E]
    border
    border-[#2D2D2D]
    rounded-[24px]
    p-10
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-white
    hover:shadow-2xl
  "
              >
                <p className="text-[64px] font-black text-[#D9B600]">01</p>

                <h3 className="text-2xl font-bold text-white mt-8">
                  地域との繋がり
                </h3>

                <p className="mt-6 leading-8 text-neutral-300">
                  八街市を拠点に、
                  地域イベントやコミュニティ活動を積極的に展開しています。
                </p>
              </div>

              <div
                className="
    bg-[#1E1E1E]
    border
    border-[#2D2D2D]
    rounded-[24px]
    p-10
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-white
    hover:shadow-2xl
  "
              >
                <p className="text-[64px] font-black text-[#D9B600]">02</p>

                <h3 className="text-2xl font-bold text-white mt-8">
                  若年層への発信力
                </h3>

                <p className="mt-6 leading-8 text-neutral-300">
                  VALORANT・APEX・Street Fighterなど、
                  幅広いゲームコミュニティへ発信しています。
                </p>
              </div>

              <div
                className="
    bg-[#1E1E1E]
    border
    border-[#2D2D2D]
    rounded-[24px]
    p-10
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-white
    hover:shadow-2xl
  "
              >
                <p className="text-[64px] font-black text-[#D9B600]">03</p>

                <h3 className="text-2xl font-bold text-white mt-8">
                  デザイン力
                </h3>

                <p className="mt-6 leading-8 text-neutral-300">
                  Web・SNS・映像・イベントなど、
                  ブランド価値を高めるクリエイティブを制作します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DATA */}

        <section className="py-[100px] md:py-[160px]">
          <div className="max-w-[1320px] mx-auto px-6">
            <p className="text-sm tracking-[0.3em] text-neutral-500">
              TEAM DATA
            </p>

            <h2 className="text-[36px] md:text-[60px] font-black mt-2">
              Amplifyを数字で見る
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mt-20">
              {/* SNS */}
              <div className="border-t pt-8">
                <p className="text-neutral-500">#Followers</p>

                <h3 className="text-[60px] md:text-[90px] font-black mt-4">
                  15K+
                </h3>

                <p className="mt-4 text-lg">SNS総フォロワー数</p>

                <p className="text-neutral-500 mt-2">
                  ※所属選手・ストリーマーを含む
                </p>
              </div>

              {/* MEMBER */}
              <div className="border-t pt-8">
                <p className="text-neutral-500">#Members</p>

                <h3 className="text-[60px] md:text-[90px] font-black mt-4">
                  20+
                </h3>

                <p className="mt-4 text-lg">Players / Streamers / Staff</p>
              </div>

              {/* DIVISION */}
              <div className="border-t pt-8">
                <p className="text-neutral-500">#Division</p>

                <h3 className="text-[60px] md:text-[90px] font-black mt-4">
                  5
                </h3>

                <p className="mt-4 text-lg">VALORANT・APEX・SF6など</p>
              </div>

              {/* PARTNER */}
              <div className="border-t pt-8">
                <p className="text-neutral-500">#Partners</p>

                <h3 className="text-[60px] md:text-[90px] font-black mt-4">
                  3+
                </h3>

                <p className="mt-4 text-lg">Official Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
    PARTNERS
========================= */}

        <section className="py-[80px] md:py-[140px] bg-[#f7f7f7]">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm tracking-[0.3em] text-neutral-500">
                OUR PARTNERS
              </p>

              <h2 className="text-[34px] md:text-[48px] font-black mt-2">
                PARTNERS
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

        {/* CONTACT */}

        <section className="relative overflow-hidden py-[160px] text-white">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/sponsor_hero_video.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Contents */}
          <div className="relative z-10 max-w-[900px] mx-auto text-center px-6">
            <h2 className="text-[56px] font-black">Let's Build Together.</h2>

            <p className="mt-8 leading-8 text-white/80">
              Amplifyではスポンサー企業様を募集しています。
              ご興味のある企業様はお気軽にお問い合わせください。
            </p>

            <Link
              href="/contact"
              className="
        inline-flex
        mt-12
        h-[58px]
        px-12
        rounded-full
        bg-white
        text-black
        font-bold
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-[#D9B600]
        hover:-translate-y-1
        hover:shadow-xl
      "
            >
              CONTACT
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
