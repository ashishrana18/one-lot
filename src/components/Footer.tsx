import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pt-8 px-4 md:px-12 mb-20 sm:mb-10 lg:px-24 bg-white text-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left: Logo */}
        <div className="mb-6 md:mb-0">
          <Image src="/logo.png" height={100} width={40} alt="OneLot Logo" className="h-8" />
          <h2 className="text-xl font-bold mt-2">
            OneLot Technologies
          </h2>
        </div>

        {/* Right: Nav & Language */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-black">
              Home
            </a>
            <a href="#" className="hover:text-black">
              Features
            </a>
            <a href="#" className="hover:text-black">
              About
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </nav>

          {/* Language Dropdown */}
          <div className="flex items-center gap-1 text-sm">
            <span>ENG</span>
            <Image
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              height={16}
              width={24}
              className="h-4 w-6 object-cover"
            />
            <span className="text-xl">▾</span>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-4">
        <div className="space-y-1">
          <p className="mt-2">
            © 2023 OneLot Technologies Incorporated Pte. Ltd. All rights
            reserved.
          </p>
          <p className="mt-2">© 2023 OneLot Financing Corporation All rights reserved.</p>
        </div>

        <div className="flex gap-4 text-xl">
          <a href="#">
            <FaInstagram className="hover:text-black" />
          </a>
          <a href="#">
            <FaFacebookF className="hover:text-black" />
          </a>
        </div>
      </div>
    </footer>
  );
}
