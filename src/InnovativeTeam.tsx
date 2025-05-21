
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Local team images (replace with actual paths)
import team1 from "./asserts/1-20250410T042209Z-001/1/team1.png";
import team2 from "./asserts/1-20250410T042209Z-001/1/team2.png";
import team3 from "./asserts/1-20250410T042209Z-001/1/team3.png";
import team4 from "./asserts/1-20250410T042209Z-001/1/team4.png";
import { color } from "framer-motion";

const teamMembers = [
  {
    image: team1,
    name: "Residential Cleaning",
    description: "Cleaning Supervisor",
  },
  {
    image: team2,
    name: "Commercial Cleaning",
    description: "Operations Manager",
  },
  {
    image: team3,
    name: "Construction Cleaning",
    description: "Cleaning Technician",
  },
  {
    image: team4,
    name: "Landscape Cleaning",
    description: "Marketing Coordinator",
  },
];

const OurTeam: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#EFF3FF" }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
          <CheckCircleIcon sx={{ color: "#D9315A" }} />
          <Typography
            sx={{
              fontSize: { xs: 20, md: 28 },
              fontWeight: "bold",
              color: "#D9315A",
              fontFamily: "Urbanist",
            }}
          >
            Our Team
          </Typography>
        </Box>

        {/* Subheading */}
        <Box sx={{ maxWidth: 725, mx: "auto" }}>
          <Typography
            sx={{
              fontSize: { xs: 26, md: 46 },
              fontWeight: 400,
              color: "#008080",
              fontFamily: "Urbanist",
              mt: 2,
            }}
          >
            Dedicated Cleaning Experts with a Passion for Sparkle
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: 16, mt: 1, color: "#7F8490", fontFamily: "DM Sans" }}
        >
          Serving <span style={{color:"#EE7F50"}}> 4,000+</span> properties every month.
        </Typography>
      </Box>

      {/* Team Members */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              minWidth: 250,
              maxWidth: 300,
              backgroundColor: "#ffffff",
              borderRadius: 3,
              boxShadow: 2,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              transition: "transform 0.3s ease",
            }}
          >
            <Box
              component="img"
              src={member.image}
              alt={member.name}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 2,
                mb: 2,
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 600,
                color: "#008080",
                fontFamily: "Urbanist",
              }}
            >
              {member.name}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "#7F8490",
                fontFamily: "DM Sans",
                mt: 1,
              }}
            >
              {member.description}
            </Typography>
            <Box sx={{ width: "100%", borderBottom: "1px solid #ccc", my: 2 }} />
            <Button
              variant="text"
              sx={{
                color: "#D9315A",
                fontWeight: 500,
                fontFamily: "Urbanist",
                textTransform: "none",
              }}
            >
              + FOLLOW ON TWITTER
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurTeam;
