import Image from "next/image";
import LoginToggle from "./LoginToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/liftedhorizonlogo.jpg"
            alt=""
            width="120"
            height="60"
          />
        </Link>
        <h1 className="text-xl md:text-2xl font-bold">Photo Gallery</h1>
        <LoginToggle />
      </div>
    </header>
  );
}
