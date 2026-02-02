import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome 🚀</h1>
        <p className="text-xl">Meri First Next.js Website Live Hai!</p>
      </main>
    </>
  );
}
