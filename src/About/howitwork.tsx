import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const steps = [
  {
    number: "01",
    title: "Appointment",
    description:
      "Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien.",
    color: "#D9315A",
  },
  {
    number: "02",
    title: "Cleaning Day",
    description:
      "Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien.",
    color: "#008080",
  },
  {
    number: "03",
    title: "Quality Check",
    description:
      "Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien.",
    color: "#EE7F50",
  },
  {
    number: "04",
    title: "Feedback",
    description:
      "Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien.",
    color: "#FFD700",
  },
];

const HowItWorks: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <Box id="how-it-work" sx={{ backgroundColor: "#FFF", py: 6 }}>
      <Box
        sx={{
          maxWidth: "xl",
          mx: "auto",
          px: 2,
        }}
      >
        {/* Top Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <StarIcon sx={{ color: "#D9315A" }} />
            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                fontWeight: "bold",
                color: "#D9315A",
                fontFamily: "Urbanist",
              }}
            >
              How It Works
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#008080",
              textTransform: "none",
              fontFamily: "Urbanist",
              fontWeight: 400,
              fontSize: 14,
              px: 3,
              py: 1.2,
              borderRadius: 30,
              '&:hover': {
                backgroundColor: "#D9315A",
              },
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Main Heading */}
        <Typography
          sx={{
            fontSize: { xs: 28, md: 46 },
            fontWeight: 400,
            color: "#008080",
            fontFamily: "Urbanist",
            mb: 1,
          }}
        >
          Hassle-Free Cleaning Services
        </Typography>

        {/* Paragraph */}
        <Typography
          sx={{
            fontSize: 16,
            color: "#7F8490",
            fontFamily: "DM Sans",
            maxWidth: { xs: "100%", md: "38%" },
            mb: 5,
          }}
        >
          Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien pulvinar etiam.
        </Typography>

        {/* Steps */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                backgroundColor: "white",
                p: 0,
                width: "267",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: 2 }}>
                <Typography
                  sx={{
                    fontSize: 46,
                    fontWeight: 600,
                    color: "#008080",
                    fontFamily: "Urbanist",
                    mb: 1,
                  }}
                >
                  {step.number}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
  <Box
    sx={{
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: step.color,
      flexShrink: 0,
    }}
  />
  <Box
    sx={{
      height: "2px",
      backgroundColor: "#ccc",
      flexGrow: 1,
    }}
  />
</Box>

              </Box>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#0E5C67",
                  fontFamily: "Urbanist",
                  mt: 1,
                }}
              >
                {step.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#7F8490",
                  fontFamily: "DM Sans",
                  mt: 1,
                  lineHeight: 2.8,
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
