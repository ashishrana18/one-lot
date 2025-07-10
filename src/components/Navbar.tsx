// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6 ">
            <Link href="/" className="text-2xl font-bold text-purple-900">
              OneLot
            </Link>
            <div className="space-x-6 lg:block hidden">
              <Link href="/">
                Home
              </Link>
              <Link href="/">
                Products
              </Link>
              <Link href="/">
                About
              </Link>
              <Link href="/">
                Contact
              </Link>
            </div>
        </div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700">
            Log In
        </Link>
        <Link href="/" className="px-4 py-2 bg-purple-900 text-white rounded-lg">
            Inquire now
        </Link>
      </div>
    </nav>
  );
}
