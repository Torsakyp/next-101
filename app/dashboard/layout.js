import Sidebar from "@/components/Sidedar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex container">
      <Sidebar />

      <div className="flex-1">{children}</div>
    </div>
  );
}
