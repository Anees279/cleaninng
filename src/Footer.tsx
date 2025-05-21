import React from "react";
import { Box, Container, Typography, Divider, Link } from "@mui/material";
import logo from "./asserts/logos/QUICK-BRIGHT- 1.png"; // Replace with your actual logo path
import { Link as RouterLink } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#0E5C67", mt: 10, pt: 6, pb: 3 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: {
      xs: "center",  // Center content horizontally on extra-small devices
      sm: "center",  // Center content on small devices
      md: "space-between", // Distribute items evenly on medium and up
    },
    gap: 4,
    pb: 4,
    textAlign: { xs: "center", md: "left" }, // Optional: center text on small
    alignItems: { xs: "center", md: "flex-start" }, // Center vertically on small
          }}
        >
          {/* Logo Section */}
          <Box sx={{ flex: 1 }}>
            <Box component="img" src={logo} alt="Logo" sx={{ width: {md:316,  xs:200}, height: "auto" }} />
          </Box>

          {/* Navigation */}
          <Box sx={{ flex: 1, mt: { xs: 2, sm: 0, md: 10 }, color: "#fff" }}>
  <Typography
    variant="h6"
    sx={{ mb: 2, fontFamily: "Urbanist", fontWeight: 400 }}
  >
    Navigation
  </Typography>
  <Link
    component={RouterLink}
    to="/"
    underline="none"
    color="inherit"
    sx={{ mb: 1, display: "block" }}
  >
    <Typography sx={{ cursor: "pointer" }}>Home</Typography>
  </Link>
  <Link
    component={RouterLink}
    to="/services"
    underline="none"
    color="inherit"
    sx={{ mb: 1, display: "block" }}
  >
    <Typography sx={{ cursor: "pointer" }}>Services</Typography>
  </Link>
  <Link
    component={RouterLink}
    to="/contact"
    underline="none"
    color="inherit"
    sx={{ mb: 1, display: "block" }}
  >
    <Typography sx={{ cursor: "pointer" }}>Contact Us</Typography>
  </Link>
  <Link
    component={RouterLink}
    to="/about"
    underline="none"
    color="inherit"
    sx={{ mb: 1, display: "block" }}
  >
    <Typography sx={{ cursor: "pointer" }}>About Us</Typography>
  </Link>
</Box>

          {/* Services */}
          <Box sx={{ flex: 1 ,mt: { xs: 2, sm: 0 , md:10 },color: "#fff"}}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Urbanist" , fontWeight:400} }>Our Services</Typography>
            <Typography sx={{ mb: 1 }}>Kitchen Cleaning</Typography>
            <Typography sx={{ mb: 1 }}>Office Cleaning</Typography>
            <Typography sx={{ mb: 1 }}>Carpet Cleaning</Typography>
            <Typography sx={{ mb: 1 }}>House Cleaning</Typography>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1, mt: { xs: 2, sm: 0 , md:10 },color: "#fff" }}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Urbanist" , fontWeight:400}}>Contact</Typography>
            <Typography sx={{ mb: 1 }}>Our Support and Sales team is available 24/7 to answer your queries</Typography>
            <Typography sx={{ mb: 1 }}>Address: Mussafah 26 Abu Dhabi, UAE</Typography>
            <Typography sx={{ mb: 1 }}>+971 56 863 0019</Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: "#ccc", mb: 2 }} />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography sx={{ fontSize: 14, color: "#7F8490" }}>
            COPYRIGHT © 2025 Voxdigify · DESIGN BY VOXDIGIFY
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
            <Link href="#" underline="hover" sx={{ fontSize: 14, color: "#7F8490" }}>TERM OF USE</Link>
            <Link href="#" underline="hover" sx={{ fontSize: 14, color: "#7F8490" }}>PRIVACY POLICY</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;