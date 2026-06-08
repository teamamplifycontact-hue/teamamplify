import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3]">
      <div className="px-[54px] pt-[85px] pb-[54px]">
        <div className="flex items-start w-full">

          {/* 左ブロック */}
          <div className="w-55">
            <Link href="/" className="block mb-8">
              <Image
                src="/AMP_LINE.png"
                alt="Team Amplify"
                width={34}
                height={34}
                priority
              />
            </Link>

            <ul className="flex flex-col gap-[18px] text-sm font-bold">
              <li><Link href="/">ABOUT</Link></li>
              <li><Link href="/about">NEWS</Link></li>
              <li><Link href="/news">MEMBERS</Link></li>
              <li><Link href="/members">STORE</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="w-60 pt-17">
            <Link href="/contact" className="text-sm font-bold">
              CONTACT US
            </Link>
          </div>

          {/* ポリシー */}
          <div className="w-105 pt-17">
            <ul className="flex flex-col gap-[22px]">
              <li>
                <Link href="/privacy" className="text-sm font-bold">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/guideline" className="text-sm font-bold">
                  ロゴや選手画像の仕様について
                </Link>
              </li>
            </ul>
          </div>

          {/* SNSエリア */}
          <div className="ml-auto self-end flex flex-col items-end">
            <div className="text-[12px]">
              OFFICIAL SNS ACCOUNT @GgAMPLIFY
            </div>

            <div className="flex items-center gap-6 mt-[14px]">
              <Link href="https://x.com/GgAMPLIFY">
                <Image
                  src="/X_logo.png"
                  alt="X"
                  width={16}
                  height={17}
                />
              </Link>

              <Link href="/">
                <Image
                  src="/youtube_logo.png"
                  alt="YouTube"
                  width={24}
                  height={17}
                />
              </Link>
            </div>

            <div className="text-[12px] mt-12">
              ©2026,AMPLIFY Inc.All right reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}