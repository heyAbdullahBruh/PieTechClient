import DashboardAuthWrapper from "./DashBoardAuthWrapper";

export const metadata = {
  title: "PieTenium — Dashboard",
  description:
    "PieTenium is an smart digital agency , whose solve digital problem for everyone",
};

export default async function DashBoardLayout({ children }) {
  return <DashboardAuthWrapper>{children}</DashboardAuthWrapper>;
}
