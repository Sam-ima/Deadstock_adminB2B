import * as React from "react";
import PropTypes from "prop-types";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import { useNavigate } from "react-router-dom";

import { NAVIGATION } from "./dashboardNavigation";
import { demoTheme } from "./dashboardTheme";
import { BRANDING } from "./dashboardBranding";
import DemoPageContent from "./demoPageContent";

function DashboardTabs({ window }) {
  const navigate = useNavigate();
  const [pathname, setPathname] = React.useState("/dashboard");

  const router = React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        if (path === "/logout") {
          localStorage.removeItem("login_token");
          navigate("/");
          return;
        }
        setPathname(String(path));
      },
    }),
    [pathname, navigate]
  );

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={BRANDING}
    >
      <DashboardLayout
        sx={{
          width: "100vw",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardTabs.propTypes = {
  window: PropTypes.func,
};

export default DashboardTabs;
