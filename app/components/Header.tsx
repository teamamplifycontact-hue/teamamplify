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
        <nav className="max-[930px]:hidden">
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
                href="/store"
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
            width={157}
            height={36}
            priority
          />
        </div>

        {/* Hamburger */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-[930px]:flex absolute right-7 top-1/2 -translate-y-1/2 z-50 flex-col justify-center gap-[11px]"
        >
          <span
            className={`block h-[3px] w-[35px] bg-black transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-[35px] bg-black transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 max-[930px]:block ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer Menu */}
      <nav
        className={`fixed top-0 right-0 z-40 h-screen w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out max-[930px]:block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 pt-32 px-10 text-2xl font-bold">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              NEWS
            </Link>
          </li>

          <li>
            <Link href="/members" onClick={() => setIsOpen(false)}>
              MEMBERS
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="/store" onClick={() => setIsOpen(false)}>
              STORE
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
