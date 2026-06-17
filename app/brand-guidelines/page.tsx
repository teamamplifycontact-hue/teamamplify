"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function BrandGuidelines() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center">
        <Header />

        <main className="w-full max-w-[1066px] mx-auto flex flex-col pt-[75px] pb-[118px] bg-white max-[930px]:px-[69px]">
          <div className="font-bold text-4xl justify-center flex pb-[113px]">
            ロゴや所属メンバーの画像使用について
          </div>

          <div className="max-w-[1058px] mx-auto text-xl leading-[2.1] font-normal">
            <p className="mb-12">
              いつも<strong>Amplify</strong>を応援して頂きありがとうございます。
              <br />
              <strong>Amplify</strong>
              ロゴやメンバーの画像使用についてお知らせいたします。
            </p>

            <div className="mb-14">
              <h2 className="font-bold">Amplifyのロゴについて</h2>

              <p className="mb-6">
                <strong>Amplify</strong>のロゴは、
                <strong>当チームおよびブランドの象徴であり、 大切な財産</strong>
                です。
                そのため、以下のルールに基づいてご使用いただくようお願い申し上げます。
              </p>

              <ol className="list-decimal pl-8 space-y-4">
                <li>
                  正規のロゴデザインを使用してください
                  <br />
                  <strong>ロゴの形状、色、比率を改変</strong>
                  することはご遠慮ください。
                  公式ロゴデータは指定された形式でご提供いたします。
                </li>

                <li>
                  許可を得た上での使用
                  <br />
                  <strong>Amplify</strong>
                  のロゴを商用利用、プロモーション、
                  または他の目的で使用する場合は、
                  事前に弊チームの許可を取得してください。
                </li>

                <li>
                  適切なコンテキストでの使用
                  <br />
                  <strong>Amplify</strong>
                  のロゴは、弊チームやブランドのイメージを損なう可能性のある
                  コンテキストでの使用を禁止します。
                </li>

                <li>
                  クレジット表記
                  <br />
                  ロゴを使用した際には、 「© Amplify. All rights reserved.」
                  のクレジットを適切に表記してください。
                </li>
              </ol>

              <p className="mt-6">
                ロゴの使用に関するお問い合わせは、
                ページ下部の「お問い合わせ」ページよりご連絡ください。
              </p>
            </div>

            <div>
              <h2 className="font-bold">選手やクリエイターの画像について</h2>

              <p>
                <strong>Amplify</strong>
                所属メンバーの宣材写真やアイコン画像等の使用については
                <strong>原則許可無しでの使用は禁止</strong>となります。
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-[66px]">
            <Button
              type="submit"
              variant="secondary"
              className="w-56 rounded-full"
              onClick={() => router.push("/contact")}
            >
              お問い合わせ
            </Button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
