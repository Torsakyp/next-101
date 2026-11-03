import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r p-6">
      <nav className="flex flex-col gap-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}
