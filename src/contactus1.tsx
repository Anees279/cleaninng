
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import emailjs from "@emailjs/browser";

export const ContactU: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setSubmitted(false); // Reset submission state on change
  };

  const validate = () => {
    const newErrors: any = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = true;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .send(
        "service_x8mpym4", // 🔁 Replace with your actual EmailJS service ID
        "template_32oceil", // 🔁 Replace with your actual EmailJS template ID
        form,
        "vNTJPFm6qfynG5ACM"   // 🔁 Replace with your actual EmailJS public key
      )
      .then(() => {
        setSubmitted(true);
        setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        setErrors({});
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <Box sx={{ color: "#2C2927", py: 6, backgroundColor: "#FFF9C4", position: "relative", zIndex: 1 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 4,
            mb: 4,
          }}
        >
          {/* Left Section */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 900, fontSize: { xs: '2rem', md: '50px' }, color: "#008080" }}>
              We are here to help!
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 10 }}>
              <LocationOn />
              <Typography><strong>Mussafah 26 Abu Dhabi, UAE</strong></Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 5 }}>
              <Phone />
              <Typography><strong>+971 56 502 1171</strong></Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, mt: 10 }}>Follow us:</Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
                <a href="https://www.facebook.com/quickbrightcleaners/" target="_blank" rel="noopener noreferrer">
                  <IconButton sx={{ color: "#2C2927" }}><Facebook /></IconButton>
                </a>
                <a href="https://www.instagram.com/quickbrightcleaners/" target="_blank" rel="noopener noreferrer">
                  <IconButton sx={{ color: "#2C2927" }}><Instagram /></IconButton>
                </a>
                <IconButton sx={{ color: "#2C2927" }}><Twitter /></IconButton>
                <IconButton sx={{ color: "#2C2927" }}><YouTube /></IconButton>
              </Box>
            </Box>
          </Box>

          {/* Right Section (Form) */}
          <Box sx={{ flex: 1, backgroundColor: "#FFF", p: 2, borderRadius: 2, boxShadow: 3, textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '2rem', md: '30px' }, color: "#008080" }}>
              Send us a message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  value={form.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  helperText={errors.firstName && "Required"}
                />
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={form.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  helperText={errors.lastName && "Required"}
                />
              </Box>
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                variant="outlined"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email && "Required"}
              />
              <TextField
                fullWidth
                name="subject"
                label="Subject"
                variant="outlined"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
                helperText={errors.subject && "Required"}
              />
              <TextField
                fullWidth
                name="message"
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                helperText={errors.message && "Required"}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#fff",
                    color: "grey",
                    border: "2px solid gray",
                    px: 4,
                    py: 1,
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "grey",
                      color: "#fff",
                    },
                  }}
                >
                  {submitted ? "Submitted" : "Send Message"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
