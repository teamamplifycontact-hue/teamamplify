"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import PhoneInput from "../components/PhoneInput";
import Button from "../components/Button";

export default function Contact() {
  const router = useRouter();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [furigana, setFurigana] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "これは必須です";
    }

    if (!furigana.trim()) {
      newErrors.furigana = "これは必須です";
    }

    if (!email.trim()) {
      newErrors.email = "これは必須です";
    }

    if (!confirmEmail.trim()) {
      newErrors.confirmEmail = "これは必須です";
    }

    if (!message.trim()) {
      newErrors.message = "これは必須です";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log({
      company,
      name,
      furigana,
      email,
      confirmEmail,
      message,
    });

    // API送信処理
  };

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center">
        <Header />
        <main className="w-full max-w-[1066px] min-h-screen mx-auto flex flex-col pt-[75px] pb-[118px] justify-between bg-white px-[33px]  max-[930px]:px-[69px]">
          <div className="font-bold text-4xl justify-center flex pb-18">
            CONTACT
          </div>

          <p className="font-bold text-xl pb-18">
            Amplifyならびに所属メンバーへのお問い合わせは、以下のフォームよりお寄せください。
            <br />
            また、ロゴや選手画像の使用に関しては、ページ下部をご参照下さい。
          </p>

          <form
            className="flex flex-col w-full gap-[33px]"
            onSubmit={handleSubmit}
          >
            <Input
              label="法人名・団体名"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <Input
              label="氏名"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />

            <Input
              label="氏名（フリガナ）"
              required
              value={furigana}
              onChange={(e) => setFurigana(e.target.value)}
              error={errors.furigana}
            />

            <Input
              label="メールアドレス"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <Input
              label="メールアドレス（確認用）"
              type="email"
              required
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              error={errors.confirmEmail}
            />

            <PhoneInput />

            <Input
              label="お問い合わせ内容"
              textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={errors.message}
            />

            <div className="flex justify-center mt-[66px]">
              <Button type="submit" variant="secondary" className="w-[128px]">
                送信
              </Button>
            </div>
          </form>

          <div className="flex justify-center mt-[120px]">
            <Button
              variant="secondary"
              className="w-[384px]"
              onClick={() => router.push("/brand-guidelines")}
            >
              ロゴや選手画像の使用について
            </Button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
