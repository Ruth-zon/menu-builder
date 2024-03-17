import NavBar from "@/app/ui/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-white">{children}</div>
    </div>
  );
}
