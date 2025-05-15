import DashboardAuth from "@/components/dashboard/AuthDash/DashboardAuth";
import DashboardNav from "@/components/dashboard/navDash";

export const metadata = {
  title: "PieTech — Dashboard",
  description:
    "PieTech is an smart digital agency , whose solve digital problem for everyone",
};

export default function DashBoardLayout({ children }) {
  return (
    <aside>
        <DashboardNav/>
        <DashboardAuth/>
        <main>{children}</main>
    </aside>
  );
}
