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
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        // borderRadius: 10,
        zIndex: 0,
      }}
    >
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          color: "black",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box
              component="a"
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                mt: 2,
              }}
            >
              <img src={img} alt="Logo" style={{ height: 100, width: 200 }} />
            </Box>

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
            px: 4,
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
        </Box>
      </Drawer>

      {/* Home Content */}
     
    </Box>
  );
}

export default HomeHero;
