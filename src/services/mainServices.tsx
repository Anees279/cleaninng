import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Button,
} from "@mui/material";
import serviceIcon from "../asserts/icon/Icon3.png";
import icon from "../asserts/icon/Icon.png";

const MainServices: React.FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const services = [
    {
      title: "Office Cleaning",
      description:
        "We provide thorough cleaning services tailored for your home, ensuring every corner is spotless and fresh.",
    },
    {
      title: "House Cleaning",
      description:
        "Professional cleaning solutions for offices, buildings, and commercial spaces to maintain a healthy environment.",
    },
    {
      title: "Carpet Cleaning",
      description:
        "Post-construction cleanup services to prepare your site for final presentation or occupancy.",
    },
    {
      title: "Kitchen Cleaning",
      description:
        "Post-construction cleanup services to prepare your site for final presentation or occupancy.",
    },
    {
      title: "Toilet Cleaning",
      description:
        "We provide thorough cleaning services tailored for your home, ensuring every corner is spotless and fresh.",
    },
    {
      title: "Trash Cleaning",
      description:
        "Professional cleaning solutions for offices, buildings, and commercial spaces to maintain a healthy environment.",
    },
    {
      title: "Plumbing Service",
      description:
        "Post-construction cleanup services to prepare your site for final presentation or occupancy.",
    },
    {
      title: "Garden Cleaning",
      description:
        "Post-construction cleanup services to prepare your site for final presentation or occupancy.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFF",
        py: { xs: 4, md: 8 },
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}

        {/* Services Grid */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "wrap", md: "wrap" }, // allow wrapping on large screens
            gap: 2,
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "start",
          }}
        >
          {/* 4 child boxes */}

          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                borderRadius: 3,
                p: { xs: 2, md: 2 },
                width: { xs: "100%", sm: "45%", md: "20%" }, // ✅ updated line
                minHeight: 280,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  component="img"
                  src={serviceIcon}
                  alt="Service Icon"
                  sx={{
                    position: "absolute",
                    top: { xs: 0, md: 24 },
                    left: { xs: "2", md: 0 },
                    width: 84,
                    height: 65,
                  }}
                />
                <Box sx={{ mt: 12 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      color: "#008080",
                      mb: 1.5,
                      fontSize: 22,
                      fontFamily: "Urbanist",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontSize: 15,
                      lineHeight: 1.6,
                      fontFamily: "DM Sans",
                      width: { xs: "100%", md: "80%" }, // Adjust width for smaller screens
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>

              {/* Learn More Button at bottom right */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  ml: 0, // Make sure there's no left margin
                  pl: 0, // Also remove left padding if any
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    color: "#EE7F50",
                    border: ".5px solid #EE7F50",
                    px: 2, // Optional: remove horizontal padding from button if needed
                    "&:hover": {
                      border: "2px solid #008080",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MainServices;
