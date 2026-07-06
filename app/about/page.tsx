"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        <main className="flex-1 pb-[160px]">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-0">
            {/* ロゴ */}
            <div className="flex justify-center py-20 lg:py-[139px]">
              <Image
                src="/simbolmark_bk.png"
                alt="Amplify"
                width={104}
                height={104}
                priority
              />
            </div>

            {/* コンセプト */}
            <section className="max-w-[900px] mx-auto">
              <h1
                className="
                text-[42px] lg:text-[58px]
                font-black
                leading-[1.25]
                tracking-[-0.04em]
                mb-10
              "
              >
                ゲームカルチャーを、
                <br />
                もっと豊かに、もっと熱く。
              </h1>

              <div className="space-y-6 text-[16px] lg:text-[17px] leading-[2]">
                <p>
                  Amplifyは、競技シーンにおける最高峰のパフォーマンスの追求にとどまらず、
                  ライフスタイルや地域コミュニティとの融合を目指す、
                  次世代のeスポーツチームであり、ライフスタイルブランドです。
                </p>

                <p>
                  プレイヤーが感じる一瞬の歓喜、ファンと共有する胸の高鳴り。
                  そのすべての体験をデザインの力で増幅（amplify）し、
                  ゲームを愛する人々の日常に新たなゲーミングスタイルを提案します。
                </p>

                <p>
                  私たちがつくるのは、誰もが主役として輝けるオープンな舞台です。
                </p>

                <p>
                  競技の枠を超え、
                  ライフスタイルや地域社会へともたらす新しい価値観を通じて、
                  未来のゲーミングカルチャーの基盤を共に築いていきます。
                </p>
              </div>

              {/* English */}
              <div className="mt-14 space-y-6 text-[16px] lg:text-[17px] leading-[2] font-semibold">
                <p>
                  Amplify is a next-generation esports team and lifestyle brand
                  that goes beyond competing at the highest level to weave
                  gaming into our daily lives and local communities.
                </p>

                <p>
                  The instant thrill of a player&apos;s victory, the shared
                  excitement that connects us with our fans—we use the power of
                  design to amplify these experiences, bringing an innovative
                  gaming lifestyle to everyone who loves the game.
                </p>

                <p>
                  Our mission is to build an open stage where anyone can step
                  into the spotlight.
                </p>

                <p>
                  By breaking down the boundaries of traditional gaming and
                  introducing fresh perspectives to our lifestyles and
                  communities, we will shape the future of gaming culture
                  together.
                </p>
              </div>
            </section>

            {/* 代表 */}
            <section className="max-w-[900px] mx-auto mt-24 lg:mt-40">
              <h2 className="text-[42px] lg:text-[52px] font-black mb-10">
                代表
              </h2>

              <div className="flex flex-col lg:flex-row gap-10">
                <Image
                  src="/utsugi.png"
                  alt="宇都木響介"
                  width={570}
                  height={690}
                  className="w-full lg:w-[280px] object-cover mx-auto"
                />

                <div>
                  <p className="text-[16px] font-semibold mb-2">
                    Kyosuke Utsugi
                  </p>

                  <h3 className="text-[40px] lg:text-[46px] font-black leading-tight mb-8">
                    宇都木 響介
                  </h3>

                  <div className="space-y-4 text-[16px] leading-[2]">
                    <p>
                      千葉県八街市生まれ。小学生から高校までの10年間、
                      バレーボールを競技として続ける。
                    </p>

                    <p>
                      都内のデザイン専門学校でデザインの基礎を学び、
                      その後、横浜の総合商社にてインハウスデザイナーとして
                      キャリアをスタート。
                    </p>

                    <p>
                      退社・独立を経て、現在はeSportsチーム「Team Amplify」の
                      代表を務める。
                    </p>

                    <p>
                      スポーツを通じて培ったチームワークやコミュニケーション力、
                      そしてデザインのバックグラウンドを活かした
                      チーム運営と、地域に根ざしたコミュニティ形成に
                      注力している。
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
