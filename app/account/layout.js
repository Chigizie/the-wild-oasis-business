import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-[16rem_1fr] gap-12">
      <SideNavigation />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
