import Link from "next/link";

export default function Page() {
  return (
    <div className="w-100 h-14 bg-emerald-500/20">
      <div className="flex h-full items-center gap-4 pl-4 w-1/2">
        <Link
          href="/recipes"
          className="border-b-4 border-rose-400 hover:rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get started
        </Link>
        <Link
          href="/recipes/menus"
          className="border-b-4 border-rose-400 hover:rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
