import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import PhoneInput from "../components/PhoneInput";
import Button from "../components/Button";


export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center ">
        <Header />
        <main className="w-full max-w-[1058px] min-h-screen mx-auto flex flex-col pt-[75px] pb-[206px] justify-between bg-white">
          <div className="font-bold text-4xl justify-center flex pb-[42px]">
            CONTACT
          </div>
          <p className="font-bold text-xl pb-[42px]">
            Amplifyならびに所属メンバーへのお問い合わせは、以下のフォームよりお寄せください。
            <br />
            また、ロゴや選手画像の使用に関しては、ページ下部をご参照下さい。
          </p>
          <form className="flex flex-col w-full gap-[33px]">
            <Input
              label="法人名・団体名"
              placeholder=""
            />

            <Input
              label="氏名"
              required
            />

            <Input
              label="氏名（フリガナ）"
              required
            />

            <Input
              label="メールアドレス"
              type="email"
              required
            />

            <Input
              label="メールアドレス（確認用）"
              type="email"
              required
            />

            <PhoneInput />

            <Input
              label="お問い合わせ内容"
              textarea
              required
            />
          </form>

          <div className=" flex flex-col items-center gap-[145px] mt-[73px]">
            <Button
              variant="secondary"
              className="w-[128px]"
            >
              送信
            </Button>
            <Button
              variant="secondary"
              className="w-[384px]"
            >
              ロゴや選手画像の使用について
            </Button>
          </div>

        </main>

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
