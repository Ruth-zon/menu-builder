import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen justify-center">
      <div>ברוכים הבאים</div>
      <Link href='/recipes'>הכנסו</Link>
    </main>
  );
}
