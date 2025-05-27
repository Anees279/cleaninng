import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Button,
} from "@mui/material";
import serviceIcon from "./asserts/icon/Icon3.png";
import icon from "./asserts/icon/Icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Services: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animations will trigger every time the element scrolls into view
      mirror: true, // triggers on scroll up as well
    });
  }, []);
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
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFF",
        py: { xs: 4, md: 8 },
        
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" , lg : "center"},
            mb: 5,
            gap: 2,
            
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={icon}
                alt="Service Icon"
                sx={{ width: 24, height: 24 }}
              />
              <Typography
                sx={{
                  fontFamily: '"Titan One", sans-serif',
                  fontWeight: "bold",
                  color: "#D9315A",
                  fontSize: 17,
                }}
              >
                Our Services
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                color: "#008080",
                fontSize: { xs: 30, md: 46 },
                mt: 2,
              }}
            >
              Services We Provide
            </Typography>

            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: 16,
                color: "#7F8490",
                lineHeight: 1.7,
                mt: 2,
                textAlign: "justify",
                maxWidth: 600,
              }}
            >
              We provide thorough cleaning services tailored for your home,
              ensuring every corner is spotless and fresh.
            </Typography>
          </Box>

          {isMdUp && (
            <Button
              variant="contained"
              onClick={() => navigate("/service")} // 👈 Navigate on click
              sx={{
                backgroundColor: "#0E5C67",
                fontSize: "12px",
                width: 123,
                height: 42,
                mr: { xs: 0, md: 2, lg: 20 },
                borderRadius: "30px",
                alignSelf: "flex-start",
                "&:hover": { backgroundColor: "#D9315A" },
              }}
            >
              All Services
            </Button>
          )}
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: { xs: 4, md: 1 },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "start",
            maxWidth: { xs: "100%", md: "100%", lg: "90%" },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              data-aos="fade-up" // 👈 Add this for animation
              data-aos-delay={index * 150}
              sx={{
                // position: "relative",
                borderRadius: 3,
                p: { xs: 2, md: 2 },
                flex: { xs: "1 1 100%", sm: "1 1 10%", md: "1 1 23%" },
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

export default Services;
