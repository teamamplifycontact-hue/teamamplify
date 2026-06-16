import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className="mx-auto flex h-20 max-w items-center justify-between">
        <nav>
          <ul className="flex items-center justify-between w-full text-sm font-medium">
            <li className="mr-9">
              <Link
                href="/"
                className="text-base w-[97px] inline-block text-center font-bold"
              >
                NEWS
              </Link>
            </li>

            <li className="mr-[155px]">
              <a
                href="/members"
                className="text-base w-[97px] inline-block text-center font-bold"
              >
                MEMBERS
              </a>
            </li>

            <li className="-translate-x-[12px]">
              <Image
                src="/AMP_logo.png"
                alt="Team Amplify"
                width={157}
                height={36}
              />
            </li>

            <li className="ml-36 mr-3">
              <a
                href="/about"
                className="text-base w-[97px] inline-block text-center font-bold"
              >
                ABOUT
              </a>
            </li>

            <li>
              <a
                href="/store"
                className="text-base w-[97px] inline-block text-center font-bold"
              >
                STORE
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
