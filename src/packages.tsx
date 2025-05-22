
import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import CheckIcon from "./asserts/icon/arrow-right-circle.png"; // Replace with your storage icon path if different
import PricingIcon from "./asserts/icon/Icon.png"; // Icon for Pricing Table heading


const packages = [
  {
    title: "Basic Cleaning",
    price: "AED 25",
    description:
      "Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis.",
    features: [
      "60 Minutes Consultation",
      "2 Bedroom Cleaning",
      "3 Bathroom Cleaning",
      "1 Living Room Cleaning",
      "7 Days Guarantee",
    ],
    bgColor: "#F5F2F7",
    
  },
  {
    title: "Pro Cleaning",
    price: "AED 35",
    description:
      "Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis.",
    features: [
      "90 Minutes Consultation",
      "3 Bedroom Cleaning",
      "4 Bathroom Cleaning",
      "1 Living Room Cleaning",
      "7 Days Guarantee",
    ],
    bgColor: "#EFF3FF",
    
  },
  {
    title: "Car Wash at Your Doorstep",
    price: "AED 25",
    description:
      "Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis.",
    features: [
"Basic Car Wash	AED 25	Within 10 KM",
      "Full Car Wash	AED 30	Within 10 KM",
      "Weekly Car Wash	AED 100	4 times a month",
      "Interior Detailing	AED 60	Seats, dashboard, vacuum",
    ],
    bgColor: "#F5F2F7",
    
  },
];

const Packages = () => {
  return (
    <Box sx={{ px: 2, py: 6, textAlign: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
        <Box component="img" src={PricingIcon} alt="Pricing Icon" sx={{ width: 17, height: 24, mr: 1 }} />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontFamily: "Urbanist",
            color: "#D9315A",
            fontSize: 17,
          }}
        >
          Pricing Table
        </Typography>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 500,
          mb: 2,
          fontFamily: "Urbanist",
          color: "#0E5C67",
          fontSize: { xs: 32, md: 46 },
        }}
      >
        Pricing Plans for Every Budget
      </Typography>
      <Typography
        sx={{
          maxWidth: 600,
          mx: "auto",
          mb: 6,
          color: "text.secondary",
          fontSize: 16,
          lineHeight: 1.7,
        }}
      >
        Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor
        felis quis. Sagittis a sapien pulvinar etiam.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {packages.map((pkg, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 300px",
              maxWidth: 330,
              width: "100%",
            }}
          >
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: pkg.bgColor,
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                 
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontFamily: "Urbanist",
                    color: "#D9315A",
                  }}
                >
                  {pkg.title}
                </Typography>
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 2, color: "#D9315A" }}
                >
                  {pkg.price}{" "}
                  <Typography component="span" sx={{ fontSize: 16, color: "#7F8490" }}>
                    /service
                  </Typography>
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 2 }}>
                  {pkg.description}
                </Typography>
                <Box component="hr" sx={{ borderColor: "#ccc", mb: 2 }} />
                <Box
                  component="ul"
                  sx={{ textAlign: "left", pl: 0, listStyle: "none", mb: 5 }}
                >
                  {pkg.features.map((feature, i) => (
                    <Box
                      key={i}
                      component="li"
                      sx={{ display: "flex", alignItems: "center", mb: 3 }}
                    >
                      <Box
                        component="img"
                        src={CheckIcon}
                        alt="check"
                        sx={{ width: 20, height: 20, mr: 1 }}
                      />
                      <Typography sx={{ fontSize: 14 }}>{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    borderRadius: 30,
                    fontWeight: 600,
                    backgroundColor: "#0E5C67",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#0E5C67" },
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Packages;
