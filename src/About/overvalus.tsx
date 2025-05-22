import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import img from "../asserts/About/Photo/overvalue.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

const values = [
  "Professionalism",
  "Improvement",
  "Integrity",
  "Teamwork",
  "Dependability",
  "Involvement",
  "Sustainability",
  "Satisfaction",
];

const OurValue: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Box
        sx={{
          maxWidth: "xl",
          mx: "auto",
          px: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Left content */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <StarIcon sx={{ color: "#D9315A" }} />
            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                fontWeight: "bold",
                color: "#D9315A",
                fontFamily: "Urbanist",
              }}
            >
              Our Value
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: 28, md: 46 },
              fontWeight: 400,
              color: "#008080",
              width: { xs: "100%", md: "70%" },
              fontFamily: "Urbanist",
              mb: 2,
            }}
          >
            We Are Committed to Quality Service
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "#7F8490",
              fontFamily: "DM Sans",
              mb: 4,
              maxWidth: { xs: "100%", md: "70%" },
            }}
          >
            Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut
            dolor felis quis. Sagittis a sapien pulvinar etiam.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            {values.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CheckCircleIcon sx={{ color: "#008080" }} />
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#333",
                    fontFamily: "Urbanist",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right image section */}
        <Box sx={{ flex: 1, position: "relative" }}>
          <Box
            component="img"
            src={img}
            alt="Expert Cleaners"
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
               transition: "transform 0.5s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
            }}
          />

          {/* Overlapping Box */}
<Box
  sx={{
    position: "absolute",
    bottom: "-83px", // Half of the box height (166px)
    left: "-107px",  // Half of the box width (214px)
    backgroundColor: "#008080",
    color: "white",
    px: 3,
    py: 2,
    borderRadius: 2,
    boxShadow: 3,
    width: 214,
    height: 166,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    display: { xs: "none", md: "flex" }
  }}
>
  <Typography
    sx={{ fontSize: 48, fontWeight: "400", fontFamily: "Urbanist" }}
  >
    340 +
  </Typography>
  <Typography
    sx={{ fontSize: 16, fontFamily: "DM Sans", color: "#fff" }}
  >
    Expert Cleaners
  </Typography>
</Box>

        </Box>
      </Box>
    </Box>
  );
};

export default OurValue;
