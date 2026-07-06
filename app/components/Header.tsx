"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[1000] w-full bg-white/80">
      <div className="flex h-20 items-center justify-center">
        {/* PC Navigation */}
        <nav className="max-[931px]:hidden w-full max-w-[1200px] px-6">
          <ul className="flex items-center justify-between w-full">
            {/* 左側: メインロゴ */}
            <li>
              <Link href="/top">
                <Image
                  src="/AMP_logo.png"
                  alt="Team Amplify"
                  width={157}
                  height={36}
                  priority
                />
              </Link>
            </li>

            {/* 中央: ナビゲーションメニュー */}
            <li>
              <ul className="flex items-center gap-12">
                <li>
                  <Link
                    href="/news"
                    className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200 text-base font-bold tracking-wider"
                  >
                    NEWS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200 text-base font-bold tracking-wider"
                  >
                    MEMBERS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200 text-base font-bold tracking-wider"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://amplify.base.ec/"
                    className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200 text-base font-bold tracking-wider"
                  >
                    SPONSOR
                  </Link>
                </li>
              </ul>
            </li>

            {/* 右側: STOREロゴ */}
            <li>
              <Link
                href="https://amplify.base.ec/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Image
                    src={
                      hover ? "/Amplify_store_hover.png" : "/Amplify_store_.png"
                    }
                    alt="Amplify STORE"
                    width={180}
                    height={36}
                    priority
                  />
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Logo */}
        <div className="hidden max-[931px]:block">
          <Link href="/top">
            <Image
              src="/AMP_logo.png"
              alt="Team Amplify"
              width={140}
              height={32}
              priority
            />
          </Link>
        </div>

        {/* Hamburger */}
        {!isOpen && (
          <button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="hidden max-[931px]:flex absolute right-7 top-1/2 -translate-y-1/2 z-50 flex-col gap-[10px]"
          >
            <span className="block h-[3px] w-[35px] bg-[#000000]" />
            <span className="block h-[3px] w-[35px] bg-[#000000]" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed inset-0 z-[999] overflow-y-auto bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative flex justify-center pt-5">
          <Link href="/top">
            <Image
              src="/AMP_logo.png"
              alt="Team Amplify"
              width={140}
              height={32}
              priority
            />
          </Link>

          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center"
          >
            <span className="absolute h-[3px] w-[35px] rotate-45 bg-[#000000]" />
            <span className="absolute h-[3px] w-[35px] -rotate-45 bg-[#000000]" />
          </button>
        </div>

        {/* Menu */}
        <ul className="mt-[41px] px-[70px] flex flex-col">
          <li className="mb-10 font-bold text-2xl">
            <Link
              href="/news"
              className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200"
            >
              NEWS
            </Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link
              href="/members"
              className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200"
            >
              MEMBERS
            </Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link
              href="/about"
              className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200"
            >
              ABOUT
            </Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link
              href="/partners"
              className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200"
            >
              SPONSOR
            </Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link
              href="/contact"
              className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200"
            >
              CONTACT US
            </Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link
              href="/privacy"
              className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200"
            >
              プライバシーポリシー
            </Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link
              href="/guideline"
              className="border-b-2 border-transparent hover:border-[#ECE122] transition-all duration-200"
            >
              ロゴや選手画像の使用について
            </Link>
          </li>
          <li className="mb-[60px]">
            <Link
              href="https://amplify.base.ec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-[278px]"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <Image
                  src={
                    hover ? "/Amplify_store_hover.png" : "/Amplify_store_.png"
                  }
                  alt="Amplify STORE"
                  width={278}
                  height={108}
                  priority
                />
              </div>
            </Link>
          </li>

          {/* SNS */}
          <li>
            <p className="mb-4 text-[12px] uppercase">
              OFFICIAL SNS ACCOUNT @GgAMPLIFY
            </p>

            <div className="flex items-center gap-6">
              <Link href="https://x.com/GgAMPLIFY" target="_blank">
                <Image src="/X_logo.png" alt="X" width={18} height={18} />
              </Link>

              <Link href="https://youtube.com" target="_blank">
                <Image
                  src="/youtube_logo.png"
                  alt="YouTube"
                  width={24}
                  height={18}
                />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
