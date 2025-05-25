import React, {useEffect} from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const StatisticsSection: React.FC = () => {
  useEffect(() => {
      AOS.init({
        duration: 3000,
        once: false, // animations will trigger every time the element scrolls into view
        // triggers on scroll up as well
      });
    }, []);
  const stats = [
    { value: "10K +", label: "Homes Cleaned" },
    { value: "126 +", label: "Professional Tools" },
    { value: "22 +", label: "Years Of Experience" },
    { value: "99 %", label: "Satisfied Clients" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#EFF3FF",
        // mt: 6,
        p: { xs: 4, md: 15 },
        borderRadius: 2,
      }}
    >
  {stats.map((item, index) => (
    <Box
      key={index}
      data-aos="fade-up-right"
      sx={{
        textAlign: "center",
        mb: { xs: 3, md: 0 },
        width: { xs: "100%", md: "22%" },
      }}
    >
          <Typography
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 700,
              color: "#008080",
              fontFamily: "Urbanist",
            }}
          >
            {item.value}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 18 },
              color: "#D9315A",
              fontFamily: "DM Sans",
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StatisticsSection;
