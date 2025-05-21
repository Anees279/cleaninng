
import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

// Local images
import img from "./asserts/1-20250410T042209Z-001/1/Image.png";
import imgMobile from "./asserts/1-20250410T042209Z-001/1/image2.png";
import mobileBackground from "./asserts/1-20250410T042209Z-001/1/bg.png";
import highQualityIcon from "./asserts/icon/Icon2.png";
import staffIcon from "./asserts/icon/Icon2.png";
import customerServiceIcon from "./asserts/icon/Icon2.png";

const WhyChooseUs: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const features = [
    {
      icon: highQualityIcon,
      title: "High-Quality Cleaning Services",
      description:
        "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
    },
    {
      icon: staffIcon,
      title: "Trained and Professional Staff",
      description:
        "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
    },
    {
      icon: customerServiceIcon,
      title: "Exceptional Customer Service",
      description:
        "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 0, md: 0 }, backgroundColor: "#EFF3FF" }}>
      <Container maxWidth="xl" sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* Image Wrapper with background for small devices */}
          <Box
            sx={{
              width: { xs: "130%", md: "50%" },
              borderRadius: 3,
              overflow: "hidden",
              backgroundImage: isSmall ? `url(${mobileBackground})` : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt : isSmall ? 0 : 0, // Margin to give space on small screens
              p: isSmall ? 0 : 0, // Padding to give space on small screens
            }}
          >
            <Box
              component="img"
              src={isSmall ? imgMobile : img}
              alt="Cleaning"
              sx={{
                width: "100%",
                borderRadius: 3,
                objectFit: "cover",
               
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleIcon sx={{ color: "#D9315A", width: 24, height: 17 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 24 },
                    fontWeight: "bold",
                    color: "#D9315A",
                    fontFamily: "Urbanist",
                  }}
                >
                  Why Choose Us
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: 28, md: 46 },
                  fontWeight: 400,
                  color: "#008080",
                  mt: 1,
                  fontFamily: "Urbanist",
                  maxWidth: { xs: "100%", md: "80%" },
                }}
              >
                Providing Friendly, Reliable Cleaning Services
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                <StarIcon sx={{ color: "#FFD700" }} />
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#7F8490",
                    fontFamily: "DM Sans",
                  }}
                >
                  Serving <span style={{ color: "#EE7F50" }}>4,000+</span> properties every month.
                </Typography>
              </Box>
            </Box>

            {/* Features List */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {features.map((item, index) => (
                <Box key={index}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.title}
                      sx={{ width: 24, height: 34 }}
                    />
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#008080",
                        fontFamily: "Urbanist",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#7F8490",
                      fontFamily: "DM Sans",
                      lineHeight: 1.7,
                      maxWidth: { xs: "100%", md: "80%" },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
