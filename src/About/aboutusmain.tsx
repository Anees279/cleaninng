import React , {useEffect}from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import heroImage from "../asserts/About/Photo/2.jpeg";
import icon from "../asserts/icon/Icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUSMain: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
 useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false, // animations will trigger every time the element scrolls into view
      // triggers on scroll up as well
    });
  }, []);
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        {/* Two Top Boxes: Text + Stats */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
          }}
        >
          {/* Text Content Box */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
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
                  fontFamily: "Urbanist",
                  fontWeight: "bold",
                  color: "#D9315A",
                  fontSize: 17,
                }}
              >
                About us
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                color: "#008080",
                fontSize: { xs: 32, md: 44 },
                mt: 4,
              }}
            >
              Clean Home with Our Professional Cleaning Services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "DM Sans",
                color: "#7F8490",
                fontSize: 16,
                mt: 2,
                lineHeight: 1.7,
                textAlign: "justify",
              }}
            >
              Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut
              dolor felis quis. Sagittis a sapien pulvinar etiam.
            </Typography>
          </Box>

          {/* Stats Box */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "100%",
              justifyContent: "center",
              alignItems: { xs: "flex-start", md: "flex-start" },
            }}
          >
            {[
              { label: "Experienced", value: 98 },
              { label: "Reliable", value: 86 },
              { label: "Skilled & Capable", value: 90 },
              { label: "Flexible", value: 80 },
            ].map((item, index) => (
              <Box key={index} sx={{ width: "100%", maxWidth: 570 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Urbanist",
                      fontSize: 16,
                      color: "#0E5C67",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontFamily: "Urbanist",
                      fontSize: 16,
                      color: "red",
                    }}
                  >
                    {item.value}%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 10,
                    backgroundColor: "#D1D1DC",
                    borderRadius: 5,
                    overflow: "hidden",
                    boxShadow: "inset 0 0 0 1px #ccc",
                  }}
                >
                  <Box
                    sx={{
                      width: `${item.value}%`,
                      height: "100%",
                      backgroundColor: "#0E5C67",
                      transition: "width 0.5s ease-in-out",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Image Below */}
       <Box
  component="img"
  src={heroImage}
  alt="Cleaning illustration"
   data-aos="fade-up-right"
  sx={{
    width: { xs: "100%", sm: "100%", md: "90%" },
    height: { xs: "auto", sm: "auto", md: 601 },
    borderRadius: 4,
    mt: { xs: 6, md: 10 },
    mx: 0,
    display: "block",
    transition: "transform 0.5s ease", // Smooth animation
    "&:hover": {
      transform: "scale(1.05)", // Zoom in on hover
    },
  }}
/>
      </Container>
    </Box>
  );
};

export default AboutUSMain;
