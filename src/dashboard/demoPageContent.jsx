import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { getDashboardComponent } from "./dashboardComponentMap";

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        p: { xs: 1, sm: 2, md: 3 },
        boxSizing: "border-box",
      }}
    >
      {getDashboardComponent(pathname)}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default DemoPageContent;
