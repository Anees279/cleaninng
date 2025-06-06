
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
import img from "../asserts/logos/logo.png";
import CleaningModal from "./CleaningModal"; // ✅ Import the modal

const pages = [
  { name: "Home", link: "/home" },
  { name: "About us", link: "/about" },
  { name: "Services", link: "/service" },
  { name: "Contact us", link: "/contact" },
];

function HomeHero() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false); // ✅ Modal state

  const handleToggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  React.useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        zIndex: 0,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "black",
          height: 100,
          boxShadow: "none",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", gap: 2 }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                height: { xs: "50px", md: "70px" },
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
            >
              <Box sx={{ height: "100%", px: 1 }}>
                <img
                  src={img}
                  alt="Logo"
                  style={{
                    width: "auto",
                    height: "100%",
                    borderRadius: 7,
                  }}
                />
              </Box>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{ color: "#0E5C67", fontSize: "16px", fontWeight: 600 }}
                  href={page.link}
                >
                  {page.name}
                </Button>
              ))}
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0E5C67",
                    fontSize: "12px",
                    width: 123,
                    height: 42,
                    borderRadius: "30px",
                    "&:hover": { backgroundColor: "#0E5C67" },
                  }}
                  onClick={handleOpenModal} // ✅ Trigger modal
                >
                  Get Started
                </Button>
              </Box>
            </Box>

            {/* Mobile Menu */}
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
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleToggleDrawer}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            display: { xs: "block", md: "none" },
            width: "100%",
            marginTop: "100px",
            backgroundColor: "#fff",
            borderTop: "1px solid #ccc",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 3,
            py: 2,
            gap: 1,
            backgroundColor: "rgb(170, 165, 165)",
          }}
        >
          {pages.map((page) => (
            <React.Fragment key={page.name}>
              <Button
                onClick={handleToggleDrawer}
                href={page.link}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color: "#000",
                  fontSize: "16px",
                  textTransform: "none",
                  px: 0,
                }}
              >
                {page.name}
              </Button>
              <hr style={{ width: "100%", border: "0.5px solid #ccc" }} />
            </React.Fragment>
          ))}

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#0E5C67",
              "&:hover": { backgroundColor: "#0E5C67" },
              borderRadius: "30px",
              mt: 2,
            }}
            onClick={() => {
              handleToggleDrawer();
              handleOpenModal();
            }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>

      {/* ✅ Modal */}
      <CleaningModal open={modalOpen} onClose={handleCloseModal} />
    </Box>
  );
}

export default HomeHero;
