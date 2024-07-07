import { Outlet, useLocation } from "react-router-dom";
import AtomFooter from "@/components/atoms/footer/AtomFooter";
import AtomHeader from "@/components/atoms/header/AtomHeader";
import { ThemeProvider } from "@/context/ThemContext";

function AppLayout() {
  const locationPath = useLocation().pathname;
  return (
    <ThemeProvider>
      <AtomHeader />
      <Outlet />
      {!["/*"].includes(locationPath) && <AtomFooter />}
    </ThemeProvider>
  );
}

export default AppLayout;
