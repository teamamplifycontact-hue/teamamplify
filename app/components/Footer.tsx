import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3]">
      <div className="mx-auto max-w px-[54px] py-[75px] flex flex-col gap-6">


        {/* ナビ */}
        <nav>
          <div className="mb-[21px]">
            <Link href="/" className="block">
              <Image
                src="/AMP_LINE.png"
                alt="Team Amplify"
                width={34}
                height={34}
                priority
              />
            </Link>
          </div>
          <div className="flex justify-between w-full">
            <ul className="flex flex-col text-sm">

              <li>
                <Link href="/" className="h-10 inline-flex items-center justify-center font-bold">ABOUT</Link>
              </li>
              <li>
                <Link href="/about" className="h-10 inline-flex  items-center justify-center font-bold">NEWS</Link>
              </li>
              <li>
                <Link href="/news" className="h-10 inline-flex  items-center justify-center font-bold">MEMBERS</Link>
              </li>
              <li>
                <Link href="/members" className="h-10 inline-flex  items-center justify-center font-bold">STORE</Link>
              </li>
            </ul>
            <ul className="flex flex-col text-sm">
              <li>
                <Link href="/store" className="h-10 inline-flex items-center justify-center font-bold">CONTACT US</Link>
              </li>
            </ul>
            <ul className="flex flex-col text-sm">
              <li>
                <Link href="/store" className="h-10 inline-flex items-center justify-center font-bold">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="/store" className="h-10 inline-flex items-center justify-center font-bold">ロゴや選手画像の仕様について</Link>
              </li>
            </ul>
            <ul className="flex flex-col text-sm items-end shrink-0">
              <li>
                <Link href="/store" className="h-10 inline-flex items-center justify-center text-[12px]">
                  OFFICIAL SNS ACCOUNT @GgAMPLIFY
                </Link>
              </li>

              <li className="flex items-center justify-end h-10">
                <div className="flex items-center gap-4">
                  <Link href="/" className="block">
                    <Image src="/X_logo.png" alt="X" width={16} height={17} />
                  </Link>

                  <Link href="/" className="block">
                    <Image src="/youtube_logo.png" alt="YouTube" width={23.75} height={16.67} />
                  </Link>
                </div>
              </li>

              <li>
                <Link href="/store" className="h-10 inline-flex items-center justify-center text-[12px]">
                  ©︎2026,AMPLIFY Inc.All right reserved.
                </Link>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </footer>
  );
}