"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full">
      <div className="flex h-20 items-center justify-center">
        {/* PC Navigation */}
        <nav className="max-[931px]:hidden">
          <ul className="flex items-center justify-between w-full text-sm font-medium">
            <li className="mr-9">
              <Link
                href="/"
                className="inline-block w-[97px] text-center text-base font-bold"
              >
                NEWS
              </Link>
            </li>

            <li className="mr-[155px]">
              <Link
                href="/members"
                className="inline-block w-[97px] text-center text-base font-bold"
              >
                MEMBERS
              </Link>
            </li>

            <li className="-translate-x-[12px]">
              <Image
                src="/AMP_logo.png"
                alt="Team Amplify"
                width={157}
                height={36}
                priority
              />
            </li>

            <li className="ml-36 mr-3">
              <Link
                href="/about"
                className="inline-block w-[97px] text-center text-base font-bold"
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                href="https://amplify.base.ec/"
                className="inline-block w-[97px] text-center text-base font-bold"
              >
                STORE
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Logo */}
        <div className="hidden max-[930px]:block">
          <Image
            src="/AMP_logo.png"
            alt="Team Amplify"
            width={140}
            height={32}
            priority
          />
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
        className={`fixed inset-0 z-[999] bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative flex justify-center pt-5">
          <Image
            src="/AMP_logo.png"
            alt="Team Amplify"
            width={140}
            height={32}
            priority
          />

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
            <Link href="/">NEWS</Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link href="/members">MEMBERS</Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link href="/about">ABOUT</Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link href="/partners">PARTNERS</Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link href="/contact">CONTACT US</Link>
          </li>

          <li className="mb-[30px] font-bold text-2xl">
            <Link href="/privacy">プライバシーポリシー</Link>
          </li>

          <li className="mb-[60px] font-bold text-2xl">
            <Link href="/guideline">ロゴや選手画像の使用について</Link>
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
