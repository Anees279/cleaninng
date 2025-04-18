import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
// import bgImage from "../asserts/1-20250410T042209Z-001/1/3.jpg";
import img from "../asserts/logo.png";

const pages = [
  { name: "HOME", link: "/home" },
  { name: "SERVICE", link: "/service" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
];

function HomeHero() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  return (
    <Box
      sx={{
        background: `transparent`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        display: "flex",               // Use flexbox to center content
        justifyContent: "center",      // Align horizontally in center
        zIndex: 0,
        // borderRadius: 10,
      }}
    >
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "black",
          fontFamily: '"DM Serif Display", serif',
          // maxWidth: "1500px",
          fontWeight: 700,
          height: 90,
          boxShadow: "none",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
           

            {/* Mobile Menu Icon */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                border: "1px solid #ccc",
                backgroundColor: "#FBE8A6",
                borderRadius: "2px",
              }}
            >
              <IconButton
                size="large"
                onClick={handleToggleDrawer}
                color="inherit"
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{ color: "inherit" }}
                  href={page.link}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box
  component="a"
  href="#"
  sx={{
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    height: { xs: "50px", md: "15vh" }, // Adjust height for different screen sizes
    backgroundColor: "#fff",
    borderRadius: 2,
    // Ensure responsive behavior for the logo container
  }}
>
  <Box
    sx={{
      // For small screens, reduce size
      "@media (max-width: 600px)": {
        height: "100%", // Decrease height on smaller screens
      },
      // For larger screens, maintain a larger size
      "@media (min-width: 600px)": {
        height: "100%", // Adjust for medium and larger screens
      },
    }}
  >
    <img
      src={img}
      alt="Logo"
      style={{
        width: "auto", // Ensures the logo maintains its aspect ratio
        height: "100%", // Makes the logo fit within the Box height while maintaining aspect ratio
      }}
    />
  </Box>
</Box>

            {/* Get Quote button for large screens */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: grey[800],alignItems: "center",
                  "&:hover": { backgroundColor: grey[900] },
                }}
              >
                Get Quote
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleToggleDrawer}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            backgroundColor: "#fff",
            // px: 4,
            pt: 6,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <IconButton onClick={handleToggleDrawer} sx={{ alignSelf: "center" }}>
            <CloseIcon />
          </IconButton>

          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={handleToggleDrawer}
              href={page.link}
              sx={{ color: "#000", fontSize: "18px" }}
            >
              {page.name}
            </Button>
          ))}

          <Button
            variant="contained"
            sx={{
              backgroundColor: grey[800],
              "&:hover": { backgroundColor: grey[900] },
              mt: 3,
              width: "100%",
            }}
          >
            Get Quote
          </Button>
          <Box>
          </Box>
        </Box>
      </Drawer>

      {/* Home Content */}
     
    </Box>
  );
}

export default HomeHero;
