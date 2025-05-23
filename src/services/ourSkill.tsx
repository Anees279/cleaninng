import React from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; // ✅ MUI Icon
import aboutImage from "../asserts/services/Image.png"; // Replace with your image path

const Ourskill: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box sx={{ width: "100%", backgroundColor: "#EFF3FF", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        {/* Main Two-Column Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Left: Image */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <Box
  component="img"
  src={aboutImage}
  alt="About Us"
  sx={{
    width: "100%",
    maxWidth: 658,
    height: "auto",
    borderRadius: 4,
    transition: "transform 0.5s ease-in-out", // Smooth transition
    "&:hover": {
      transform: "scale(1.05)", // Zoom in on hover
    },
  }}
/>

          </Box>

          {/* Right: Content */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: 4,
            }}
          >
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StarIcon sx={{ color: "#D9315A", fontSize: 24 }} /> {/* ⭐ MUI Icon */}
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontWeight: "bold",
                  color: "#D9315A",
                  fontSize: 22,
                }}
              >
                Our Skills
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                color: "#008080",
                fontSize: { xs: 32, md: 44 },
              }}
            >
              Clean Home with Our Professional Cleaning Services
            </Typography>

          

            {/* Stats */}
            <Box sx={{ width: "100%", maxWidth: 570, mt: 2 }}>
              {[
                { label: "Experienced", value: 98 },
                { label: "Reliable", value: 86 },
                { label: "Skilled & Capable", value: 90 },
                { label: "Flexible", value: 80 },
              ].map((item, index) => (
                <Box key={index} sx={{ width: "100%", mb: 3 }}>
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
        </Box>
      </Container>
    </Box>
  );
};

export default Ourskill;
