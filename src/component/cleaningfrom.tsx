
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "emailjs-com";

const CleaningForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    zip: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<typeof formData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key as keyof typeof formData] = "This field is required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send email with mapped variables
    emailjs.send(
      "service_x8mpym4",
      "template_lis2mtn",
      {
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        zip: formData.zip,
        email: formData.email,
      },
      "vNTJPFm6qfynG5ACM"
    )
    .then(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        zip: "",
        email: "",
      });
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        flex: 1,
        // backgroundColor: "rgba(255, 255, 255, 0.9)",
        p: {xs: 0, md: 4},
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: "400px",
        width: "100%",
        mt: { xs:1, md: 0 },
        // mb: { xs: 2, md: 0 },
        // display: { xs: "none", md: "block" },
        position: "relative",
        zIndex: 10,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{
          backgroundColor: "#008080",
          color: "white",
          padding: 1,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        Request a Free Quote
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="phone"
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          name="service"
          label="Choose a Service"
          variant="outlined"
          fullWidth
          select
          value={formData.service}
          onChange={handleChange}
          error={!!errors.service}
          helperText={errors.service}
        >
          <MenuItem value="residential">Residential Cleaning</MenuItem>
          <MenuItem value="commercial">Commercial Cleaning</MenuItem>
          <MenuItem value="garden">Garden Cleaning</MenuItem>
        </TextField>
        <TextField
          name="date"
          label="Select Date"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={formData.date}
          onChange={handleChange}
          error={!!errors.date}
          helperText={errors.date}
        />
        <TextField
          name="zip"
          label="Zip Code"
          variant="outlined"
          fullWidth
          value={formData.zip}
          onChange={handleChange}
          error={!!errors.zip}
          helperText={errors.zip}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <Button
          type="submit"
          variant="contained"
          color={submitted ? "success" : "primary"}
          fullWidth
          sx={{ "&:hover": { backgroundColor: "#008080", border: "2px solid black" } }}
        >
          {submitted ? "Successfully Submitted" : "Submit"}
        </Button>

        {/* Contact Info */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Phone */}
          {/* <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{
                border: "2px solid #008080",
                borderRadius: "50%",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                color: "#008080",
                transition: "all 0.3s ease",
                "&:hover": { borderColor: "#ff4d4d", color: "#ff4d4d" },
              }}
            >
              <PhoneIcon fontSize="small" />
            </Box>
            <Typography variant="body2" fontWeight="bold">
              Hotline <br /> +971 56 502 1171
            </Typography>
          </Box> */}

          {/* Email */}
          {/* <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{
                border: "2px solid #008080",
                borderRadius: "50%",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                color: "#008080",
                transition: "all 0.3s ease",
                "&:hover": { borderColor: "#ff4d4d", color: "#ff4d4d" },
              }}
            >
              <EmailIcon fontSize="small" />
            </Box>
            <Typography variant="body2" fontWeight="bold">
              Gmail <br /> info@quickbrightcleaners.com
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CleaningForm;
