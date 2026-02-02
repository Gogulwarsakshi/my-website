import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">MySite</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
