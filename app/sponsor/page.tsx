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
                  25+
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
                  1+
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
                // "/partner/partner3.png",
                // "/partner/partner4.png",
                // "/partner/partner5.png",
                // "/partner/partner6.png",
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

        {/* =========================
    SPONSOR MENU
========================= */}

        <section className="py-[100px] md:py-[160px] bg-white">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] text-neutral-500">
                SPONSOR MENU
              </p>

              <h2 className="text-[36px] md:text-[60px] font-black mt-2">
                スポンサー企業様へ提供できること
              </h2>

              <p className="mt-6 max-w-[720px] mx-auto leading-8 text-neutral-600">
                Amplifyではスポンサー企業様の目的に合わせ、
                幅広いプロモーション・ブランディングをご提案いたします。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 01 */}
              <div className="group border border-neutral-200 rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D9B600]">
                <p className="text-[56px] font-black text-[#D9B600]">01</p>

                <h3 className="mt-8 text-[28px] font-black">
                  ユニフォーム掲載
                </h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  チームユニフォーム・大会ウェアへ 企業ロゴを掲載します。
                </p>
              </div>

              {/* 02 */}
              <div className="group border border-neutral-200 rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D9B600]">
                <p className="text-[56px] font-black text-[#D9B600]">02</p>

                <h3 className="mt-8 text-[28px] font-black">配信・動画露出</h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  YouTube・Twitch・ライブ配信などで
                  商品・サービスをご紹介します。
                </p>
              </div>

              {/* 03 */}
              <div className="group border border-neutral-200 rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D9B600]">
                <p className="text-[56px] font-black text-[#D9B600]">03</p>

                <h3 className="mt-8 text-[28px] font-black">SNSタイアップ</h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  X・Instagram・TikTokなどを活用した
                  タイアップ投稿を実施します。
                </p>
              </div>

              {/* 04 */}
              <div className="group border border-neutral-200 rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D9B600]">
                <p className="text-[56px] font-black text-[#D9B600]">04</p>

                <h3 className="mt-8 text-[28px] font-black">イベント協賛</h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  オフラインイベント・大会・地域活動などで
                  プロモーションを行います。
                </p>
              </div>

              {/* 05 */}
              <div className="group border border-neutral-200 rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D9B600]">
                <p className="text-[56px] font-black text-[#D9B600]">05</p>

                <h3 className="mt-8 text-[28px] font-black">
                  共同プロジェクト
                </h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  商品開発・キャンペーン・コラボ企画など、
                  新たな価値を共創します。
                </p>
              </div>

              {/* 06 */}
              <div className="group border border-neutral-200 rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D9B600]">
                <p className="text-[56px] font-black text-[#D9B600]">06</p>

                <h3 className="mt-8 text-[28px] font-black">
                  クリエイティブ制作
                </h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  Webサイト・映像・デザイン・SNS素材まで 一貫して制作します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
    CASE STUDY
========================= */}

        <section className="py-[100px] md:py-[160px] bg-[#151515] text-white">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="mb-16">
              <p className="text-sm tracking-[0.3em] text-neutral-400">
                CASE STUDY
              </p>

              <h2 className="text-[36px] md:text-[60px] font-black mt-2">
                活動実績
              </h2>

              <p className="mt-6 max-w-[700px] leading-8 text-neutral-300">
                Amplifyでは地域・企業・コミュニティと連携し、
                eスポーツを通じた様々な取り組みを行っています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* CASE 01 */}
              <div className="bg-[#1E1E1E] rounded-[24px] overflow-hidden hover:shadow-2xl duration-300">
                <Image
                  src="/case1.jpg"
                  alt=""
                  width={640}
                  height={360}
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-8">
                  <p className="text-[#D9B600] font-bold">CASE 01</p>

                  <h3 className="mt-4 text-[28px] font-black">
                    地域イベントへの参加
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-300">
                    八街市を中心とした地域イベントへ参加し、
                    eスポーツ体験会や交流イベントを開催。
                  </p>
                </div>
              </div>

              {/* CASE 02 */}
              <div className="group bg-[#1E1E1E] rounded-[24px] overflow-hidden hover:shadow-2xl duration-300">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-105"
                >
                  <source src="/case2.mp4" type="video/mp4" />
                </video>

                <div className="p-8">
                  <p className="text-[#D9B600] font-bold">CASE 02</p>

                  <h3 className="mt-4 text-[28px] font-black">
                    SNSプロモーション
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-300">
                    所属メンバーのSNSや動画を活用し、
                    ブランド認知の拡大をサポート。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
    PROCESS
========================= */}

        <section className="py-[100px] md:py-[160px] bg-white">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-sm tracking-[0.3em] text-neutral-500">
                PROCESS
              </p>

              <h2 className="text-[36px] md:text-[60px] font-black mt-2">
                ご協賛までの流れ
              </h2>

              <p className="mt-6 max-w-[700px] mx-auto leading-8 text-neutral-600">
                お問い合わせからプロモーション開始まで、
                専任スタッフがサポートいたします。
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {/* STEP 01 */}
              <div className="text-center">
                <div className="w-[110px] h-[110px] rounded-full bg-[#151515] text-white flex items-center justify-center mx-auto text-[42px] font-black">
                  01
                </div>

                <h3 className="mt-8 text-[24px] font-black">お問い合わせ</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  フォームまたはメールより お気軽にご相談ください。
                </p>
              </div>

              {/* STEP 02 */}
              <div className="text-center">
                <div className="w-[110px] h-[110px] rounded-full bg-[#151515] text-white flex items-center justify-center mx-auto text-[42px] font-black">
                  02
                </div>

                <h3 className="mt-8 text-[24px] font-black">ヒアリング</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  ご希望や課題について お伺いいたします。
                </p>
              </div>

              {/* STEP 03 */}
              <div className="text-center">
                <div className="w-[110px] h-[110px] rounded-full bg-[#151515] text-white flex items-center justify-center mx-auto text-[42px] font-black">
                  03
                </div>

                <h3 className="mt-8 text-[24px] font-black">ご提案</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  最適なスポンサー プランをご提案します。
                </p>
              </div>

              {/* STEP 04 */}
              <div className="text-center">
                <div className="w-[110px] h-[110px] rounded-full bg-[#151515] text-white flex items-center justify-center mx-auto text-[42px] font-black">
                  04
                </div>

                <h3 className="mt-8 text-[24px] font-black">ご契約</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  契約内容をご確認後、 パートナー契約を締結します。
                </p>
              </div>

              {/* STEP 05 */}
              <div className="text-center">
                <div className="w-[110px] h-[110px] rounded-full bg-[#D9B600] text-black flex items-center justify-center mx-auto text-[42px] font-black">
                  05
                </div>

                <h3 className="mt-8 text-[24px] font-black">
                  プロモーション開始
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  施策を実施し、 継続的にサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
    FAQ
========================= */}

        <section className="py-[100px] md:py-[160px] bg-[#f7f7f7]">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] text-neutral-500">FAQ</p>

              <h2 className="text-[36px] md:text-[60px] font-black mt-2">
                よくあるご質問
              </h2>

              <p className="mt-6 text-neutral-600">
                スポンサー契約について、よくいただくご質問をまとめました。
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-[20px] p-8 shadow-sm">
                <p className="text-[#D9B600] font-black">
                  Q. スポンサー契約は法人のみですか？
                </p>

                <p className="mt-4 leading-8 text-neutral-600">
                  個人事業主様や団体様からのご相談も歓迎しております。
                  まずはお気軽にお問い合わせください。
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-sm">
                <p className="text-[#D9B600] font-black">
                  Q. スポンサー費用はいくらですか？
                </p>

                <p className="mt-4 leading-8 text-neutral-600">
                  ご予算やご希望に合わせてプランをご提案しております。
                  詳細はヒアリング後にお見積りいたします。
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-sm">
                <p className="text-[#D9B600] font-black">
                  Q. 地方企業でも協賛できますか？
                </p>

                <p className="mt-4 leading-8 text-neutral-600">
                  はい。全国の企業様とオンラインでのお打ち合わせが可能です。
                  地域密着型の取り組みも積極的に行っています。
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-sm">
                <p className="text-[#D9B600] font-black">
                  Q. 単発でのコラボも可能ですか？
                </p>

                <p className="mt-4 leading-8 text-neutral-600">
                  イベント・動画・SNSキャンペーンなど、
                  単発のプロモーションにも対応しております。
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-sm">
                <p className="text-[#D9B600] font-black">
                  Q. 契約までどれくらいかかりますか？
                </p>

                <p className="mt-4 leading-8 text-neutral-600">
                  内容にもよりますが、
                  お問い合わせから約1〜3週間程度で開始可能です。
                </p>
              </div>
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
            <h2 className="text-[56px] font-black">
              Let&apos;s Build Together.
            </h2>

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
