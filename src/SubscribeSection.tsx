
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Local image (replace with actual path)
import newsletterImage from "./asserts/1-20250410T042209Z-001/1/subscribe.png";

const Subscribe: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 0, md: 2 }, px: { xs: 0, md: 2 } }}>
      {/* Outer Box */}
      <Box
        sx={{
         display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 7 },
          py: { xs: 4, md: 0 },
          backgroundColor: "#EFF3FF",
          borderRadius: 2,
          height: { xs: "auto", md: "500px" },
          mx: "auto",
          gap: 2,
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Top badge always on top */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <CheckCircleIcon sx={{ color: "#D9315A", width: 17, height: 27 }} />
            <Typography
              sx={{
                fontSize: { xs: 20, md: 17 },
                fontWeight: "bold",
                color: "#D9315A",
                fontFamily: "Urbanist",
              }}
            >
              Subscribe
            </Typography>
          </Box>

          {/* Heading and Subheading */}
          <Typography
            sx={{
              fontSize: { xs: 26, md: 46 },
              fontWeight: 400,
              maxWidth: 500,
              color: "#008080",
              fontFamily: "Urbanist",
              mb: 1,
            }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "#7F8490",
              fontFamily: "DM Sans",
            }}
          >
            Join with <span style={{ color: "#D9315A" }}>4 000+</span> members
          </Typography>

          {/* Input with embedded Button */}
          <Box
            sx={{
              mt: 4,
              maxWidth: 500,
              width: "100%",
            }}
          >
            <TextField
              placeholder="Your email"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#fff",
                borderRadius: 200,
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiInputBase-input": {
                  padding: "20px",
                  fontSize: "16px",
                  fontFamily: "Urbanist",
                  color: "#333",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#0E5C67",
                        color: "#fff",
                        fontWeight: 600,
                        fontFamily: "Urbanist",
                        textTransform: "none",
                        height: "50px",
                        width: { xs: "100px", sm: "140px", md: "158px" },
                        borderRadius: 32,
                        ":hover": { backgroundColor: "#c3224a" },
                      }}
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Right Image */}
        <Box
          component="img"
          src={newsletterImage}
          alt="Subscribe Newsletter"
          sx={{
            flex: 1,
            maxWidth: 560,
            width: "100%",
            height: "auto",
            // mt: { xs: 4, md: 0 },
          }}
        />
      </Box>
    </Container>
  );
};

export default Subscribe;
