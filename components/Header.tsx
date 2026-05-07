import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b">
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
        <button className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90">
          Login
        </button>
      </div>
    </header>
  );
}
