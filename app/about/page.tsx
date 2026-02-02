import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white p-10">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg max-w-2xl text-center">
          Ye meri Next.js website hai jo maine khud banayi hai. Isme modern
          design, fast performance aur professional layout use kiya gaya hai.
        </p>
      </main>
    </>
  );
}
