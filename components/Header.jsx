import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center space-x-2">
              {/* Logo Icon */}
              <div className="w-10 h-10 rounded-full bg-light-cyan flex items-center justify-center border-2 border-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="#1a202c"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5 19h14l-2-6m-7 6a2 2 0 100-4 2 2 0 000 4zm9 0a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </div>
              {/* App Name */}
              <h1 className="text-2xl font-bold text-gray-800">
                <span className="tracking-tight">Shop</span>
                <span className="text-light-cyan">Ease</span>
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/assets/svg/avatar.svg"
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
          width={18}
          height={18}
        />
        <Image
          src="/assets/svg/shopping-Cart.svg"
          className="hidden lg:block  w-5 h-5"
          alt="shopping cart icon"
          width={20}
          height={20}
        />

        <Image
          src="/assets/svg/menu.svg"
          className="lg:hidden w-5 h-5"
          alt=""
          width={20}
          height={20}
        />
      </div>
    </nav>
  );
}
