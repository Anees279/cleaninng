import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import serviceIcon from "./asserts/icon/Icon.svg"; // Adjust path if needed

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      title: "Residential Cleaning",
      description:
        "We provide thorough cleaning services tailored for your home, ensuring every corner is spotless and fresh.",
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning solutions for offices, buildings, and commercial spaces to maintain a healthy environment.",
    },
    {
      title: "Construction Cleaning",
      description:
        "Post-construction cleanup services to prepare your site for final presentation or occupancy.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#EFF3FF",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: { xs: 0, md: 3, lg: 4 },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "stretch",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                borderRadius: 3,
                p: { xs: 1, md: 4 },
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 100%",
                  md: "1 1 25%",
                },
                minHeight: 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {/* Icon */}
              <Box
                component="img"
                src={serviceIcon}
                alt="Service Icon"
                sx={{
                  position: "absolute",
                  top: { xs: 0, md: 16 },
                  left: { xs: "0", md: 16 },
                  width: 84,
                  height: 65,
                }}
              />

              {/* Text Content */}
              <Box sx={{ mt: 10 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#008080",
                    mb: 1.5,
                    fontSize: 24,
                    fontFamily: "Urbanist",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    fontSize: 16,
                    lineHeight: 1.6,
                    fontFamily: "DM Sans",
                    maxWidth: 250,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
