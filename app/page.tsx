import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import PhoneInput from "./components/PhoneInput";
import Button from "./components/Button";


export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center ">
        <Header />
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

          <form className="flex flex-col w-full">
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
          <Button
            type="submit"
            variant="primary"
            className="w-ful"
          >
            ボタン
          </Button>
          <Button
            variant="secondary"
            className="w-full"
          >
            ボタン
          </Button>
          <Button
            variant="outline"
            className="w-full"
          >
            ボタン
          </Button>

        </main>

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
