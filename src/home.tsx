import React from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from "@mui/material";
import ServicesSection from "./servicesHome";

import Aboutus from "./aboutus";
import Services from "./services"
import WhyChooseUs from "./whychoos";
import Packages from "./packages";
import OurTeam from "./InnovativeTeam";
import Testimonial from "./testmoniol";
import Subscribe from "./SubscribeSection";
import ResponsiveRootsBar from "./component/navagationbar";
import heroImage from "./asserts/1-20250410T042209Z-001/1/Hero Image.svg";
import icon from "./asserts/icon/Icon.png";
const CleaningHeroSection: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Box>
        <ResponsiveRootsBar />

        <Container maxWidth="xl">
          {/* Hero Text Section */}

          {/* Image and Stats in a Single Row on lg+ */}
          <Box
            sx={{
              mt: 6,
              display: "flex",
              flexDirection: { xs: "column", lg: "row", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
              flexWrap: "nowrap",
              padding: 0,
              margin: 0,
              height: { xs: "auto", lg: "68vh" },
              overflow: {
                xs: "hidden",
                sm: "visible",
                md: "visible",
                lg: "visible",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-evenly",
                alignItems: "start",
                gap: 0,
                overflow: "hidden",
                marginBottom: 0,
                paddingBottom: 0,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  // height: { xs: "70vh", md: "auto" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start", // starts horizontally
                    gap: 1, // spacing between icon and text
                  }}
                >
                  <Box
                    component="img"
                    src={icon}
                    alt="Service Icon"
                    sx={{ width: 24, height: 24, mt: { md: 0, xs: 2 } }} // Adjust size as needed
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Titan One", sans-serif',
                      fontWeight: "bold",
                      color: "#D9315A",
                      fontSize: 17,
                      mt: { xs: 2, md: 0 },
                      textAlign: { xs: "start", md: "left" },
                    }}
                  >
                    Quick Bright - Cleaning Services
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontWeight: 900,
                    color: "#008080",
                    fontSize: { xs: 35, md: 40 },
                    textAlign: { xs: "start", md: "left" },
                    marginTop: { xs: 4, md: 2 },
                  }}
                >
                  Residential & Commercial cleaning services that you can trust.
                </Typography>

                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    textAlign: { xs: "justify", md: "left" },
                    lineHeight: 1.7,
                    mt: 2,
                    color: "#7F8490",
                    fontFamily: "DM Sans",
                    display: { md: "block" },
                    fontSize: 16,
                  }}
                >
                  We take pride in delivering top-quality cleaning services
                  tailored to meet your needs. Whether it’s industrial
                  facilities, residential spaces, or garden areas, our
                  professional team ensures every corner is spotless. With
                  attention to detail and a commitment to excellence, we create
                  clean, safe, and welcoming spaces.
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0E5C67",
                      fontSize: "12px",
                      width: 123,
                      height: 42,
                      mt: 7,
                      borderRadius: "30px",
                      "&:hover": { backgroundColor: "#0E5C67" },
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "transparent",
                      fontSize: "12px",
                      width: 123,
                      height: 42,
                      mt: 7,
                      ml: 2,
                      color: "#0E5C67",
                    }}
                  >
                    How It Works?
                  </Button>
                </Box>
              </Box>
            </Box>
            {/* Image Section */}
            <Box
              component="img"
              src={heroImage}
              // alt="Cleaning illustration"
              sx={{
                width: { xs: "145%", sm: "70%", md: "50%", lg: "40%" },
                height: "auto",
                borderRadius: 4,
                marginBottom: { xs: 0, md: -16 },
              }}
            />

            {/* Stats Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", lg: "column" },
                justifyContent: "space-around",
                alignItems: { xs: "center", sm: "start", lg: "center" },
                width: { xs: "100%", lg: "60%" },
                gap: { xs: 3, sm: 4, lg: 6 },
                flexWrap: "nowrap",
              }}
            >
              {[
                { label: "Residential Cleaning", value: "10K+" },
                { label: "Commercial Cleaning", value: "126+" },
                { label: "Construction Cleaning", value: "99%" },
              ].map((item, index) => (
                <Box key={index} sx={{ textAlign: "start" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#008080",
                      fontSize: 46,
                      alignItems: "start",
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#D9315A" }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <ServicesSection />
      <Aboutus />
      <Services />
      <WhyChooseUs />
      <Packages />
      <OurTeam />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default CleaningHeroSection;
