import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Avatar
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

// Local images
import img from "../asserts/1-20250410T042209Z-001/1/Image.png";
import imgMobile from "../asserts/1-20250410T042209Z-001/1/image2.png";
import mobileBackground from "../asserts/1-20250410T042209Z-001/1/bg.png";
import founderImage from "../asserts/1-20250410T042209Z-001/1/test3.png"; // Replace with actual path

const OurMession: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: { xs: 0, md: 0 }, backgroundColor: "#FFF" }}>
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
              mt: isSmall ? 0 : 0,
              p: isSmall ? 0 : 0,
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
                <StarIcon sx={{ color: "#D9315A", width: 24, height: 17 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 24 },
                    fontWeight: "bold",
                    color: "#D9315A",
                    fontFamily: "Urbanist",
                  }}
                >
                  Our Vision
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: 20, md: 24 },
                  fontWeight: 400,
                  color: "#7F8490",
                  mt: 1,
                  fontFamily: "DM Sans",
                  maxWidth: { xs: "100%", md: "90%" },
                }}
              >
                To become the leading provider of exceptional cleaning services that exceed our clients' expectations, while maintaining a commitment to sustainability and a healthy environment.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 4 }}>
                <StarIcon sx={{ color: "#D9315A", width: 24, height: 17 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 24 },
                    fontWeight: "bold",
                    color: "#D9315A",
                    fontFamily: "Urbanist",
                  }}
                >
                  Our Mission
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: 20, md: 24 },
                  fontWeight: 400,
                  color: "#7F8490",
                  mt: 1,
                  fontFamily: "DM Sans",
                  maxWidth: { xs: "100%", md: "90%" },
                }}
              >
                Our mission is to provide efficient and reliable cleaning services to our clients, while upholding the highest standards of professionalism and customer satisfaction.
              </Typography>

              <Box component="hr" sx={{ my: 4, borderColor: "#ccc" }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar src={founderImage} alt="Miguel Rodriguez" sx={{ width: 56, height: 56 }} />
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#008080",
                    fontFamily: "Urbanist",
                  }}
                >
                  Miguel Rodriguez<br /> <span style={{color:"#7F8490"}}>Founder & CEO</span> 
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurMession;
