"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center">
        <Header />

        <main className="w-full max-w-[1066px] mx-auto flex flex-col pt-[75px] pb-[118px] bg-white px-[33px] max-[931px]:px-[69px]">
          <div className="font-bold text-4xl justify-center flex pb-[113px]">
            プライバシーポリシー
          </div>

          <div className="max-w-[1058px] mx-auto text-[20px] leading-[2.1] font-normal">
            <p className="mb-16">
              Amplify（以下、「当チーム」といいます）は、ユーザーの皆さまのプライバシーを尊重し、
              個人情報を適切に保護することを重要な責務と認識しています。
              本プライバシーポリシーでは、当チームが収集する個人情報の内容、その利用方法、
              および保護についての方針を説明いたします。
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="font-bold mb-2">1. 収集する個人情報</h2>

                <p className="mb-2">
                  当チームは、以下の情報を必要に応じて収集します：
                </p>

                <ul className="list-disc pl-8">
                  <li>名前、メールアドレス、電話番号などの基本的な連絡情報</li>
                  <li>アンケートやイベント参加時に提供される情報</li>
                  <li>
                    ウェブサイト利用時のIPアドレス、クッキー情報、閲覧履歴
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold mb-2">2. 個人情報の利用目的</h2>

                <p className="mb-2">
                  当チームは、収集した個人情報を以下の目的で使用します：
                </p>

                <ul className="list-disc pl-8">
                  <li>イベントやキャンペーン情報の提供</li>
                  <li>お問い合わせへの対応</li>
                  <li>サービス向上のためのデータ分析</li>
                  <li>法令で求められる場合の対応</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold mb-2">3. 個人情報の管理</h2>

                <p>
                  当チームは、個人情報を厳重に管理し、
                  不正アクセス、紛失、破壊、改ざん、 漏洩の防止に努めます。
                </p>
              </section>

              <section>
                <h2 className="font-bold mb-2">4. 第三者への提供</h2>

                <p className="mb-2">
                  当チームは、以下の場合を除き、
                  第三者に個人情報を提供することはありません：
                </p>

                <ul className="list-disc pl-8">
                  <li>ユーザーの同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>
                    業務委託先に必要な範囲で提供する場合
                    （例：イベント運営会社）
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold mb-2">
                  5. クッキー（Cookie）の使用について
                </h2>

                <p>
                  当チームのウェブサイトでは、サービスの向上や利用状況の分析のために
                  クッキーを使用する場合があります。クッキーは個人を特定するものではありませんが、
                  設定を変更することで無効化することが可能です。
                </p>
              </section>

              <section>
                <h2 className="font-bold mb-2">
                  6. プライバシーポリシーの変更
                </h2>

                <p>
                  本ポリシーの内容は、法令の改定やサービス内容の変更に応じて
                  更新される場合があります。最新の内容は当チームのウェブサイトに掲載します。
                </p>
              </section>

              <section>
                <h2 className="font-bold mb-2">7. お問い合わせ</h2>

                <p>
                  個人情報に関するお問い合わせについては、
                  ページ下部の「お問い合わせ」ページよりご連絡ください。
                </p>
              </section>
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
