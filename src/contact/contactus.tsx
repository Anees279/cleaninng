
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import emailjs from "@emailjs/browser";
import StarIcon from "@mui/icons-material/Star";

const Contactus: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("Send Message");
  const [showStatus, setShowStatus] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_x8mpym4",
        "template_30z5c7d",
        formRef.current,
        "vNTJPFm6qfynG5ACM"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setShowStatus(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatus("Failed to send message.");
          setShowStatus(true);
        }
      );
  };
   useEffect(() => {
    if (showStatus) {
      const timer = setTimeout(() => {
        setStatus("Send Message");
        setShowStatus(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showStatus]);

  return (
    <Box sx={{ py: 6, backgroundColor: "#fff", px: 2 }}>
      <Box
        sx={{
          maxWidth: "xl",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row-reverse" },
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left: Contact Form with background */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#F5F2F7",
            borderRadius: 3,
            p: 4,
            boxShadow: 3,
          }}
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  name="first_name"
                  required
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  name="last_name"
                  required
                />
              </Box>
              <TextField
                fullWidth
                label="Email*"
                type="email"
                variant="outlined"
                name="user_email"
                required
              />
              <TextField
                fullWidth
                label="Message*"
                multiline
                rows={4}
                variant="outlined"
                name="message"
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#008080",
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: "#006666",
                  },
                }}
              >
                {status}
              </Button>
            </Box>
          </form>
        </Box>

        {/* Right: Heading and Contact Details */}
        <Box sx={{ flex: 1 }}>

          <Typography
            sx={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#D9315A",
              fontFamily: "Urbanist",
              mb: 1,
            }}
          >
            <StarIcon sx={{ color: "#D9315A",  }} />
            Contact Us
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 500,
              color: "#008080",
              fontFamily: "Urbanist",
              mb: 2,
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              color: "#7F8490",
              fontFamily: "DM Sans",
              mb: 4,
              maxWidth: "90%",
            }}
          >
            Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut
            dolor felis quis. Sagittis a sapien pulvinar etiam.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
          textAlign: { xs: "start", md: "left" },
alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <LocationOnIcon sx={{ color: "#D9315A", mr: 2 }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Urbanist" }}>
                    Address
                  </Typography>
                  <Typography sx={{ fontFamily: "DM Sans", color: "#7F8490" }}>
                    Mussafah 26 Abu Dhabi, UAE
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <PhoneIcon sx={{ color: "#D9315A", mr: 2 }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Urbanist" }}>
                    Phone
                  </Typography>
                  <Typography sx={{ fontFamily: "DM Sans", color: "#7F8490" }}>
                   +971 56 863 0019
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <EmailIcon sx={{ color: "#D9315A", mr: 2 }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Urbanist" }}>
                    Email
                  </Typography>
                  <Typography sx={{ fontFamily: "DM Sans", color: "#7F8490" }}>
                    info@quickbrightcleaners.com

                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <LanguageIcon sx={{ color: "#D9315A", mr: 2 }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Urbanist" }}>
                    Website
                  </Typography>
                  <Typography sx={{ fontFamily: "DM Sans", color: "#7F8490" }}>
                    quickbrightclean.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
