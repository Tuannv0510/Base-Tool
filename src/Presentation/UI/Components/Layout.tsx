import "../../../../styles/globals.css";
import Sidebar from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative">
      <Sidebar />
      <div className="ml-[256px] pl-10 pt-[50px]">{children}</div>
    </div>
  );
}
