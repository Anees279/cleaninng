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

  interface FormData {
    name: string;
    phone: string;
    service: string;
    date: string;
    zip: string;
    email: string;
  }

  interface Errors {
    name?: string;
    phone?: string;
    service?: string;
    date?: string;
    zip?: string;
    email?: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev: Errors) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSubmit = () => {
    const newErrors: Partial<typeof formData> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key as keyof typeof formData] = "This field is required";
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        zip: "",
        email: "",
      });
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  p: 4,
  borderRadius: 2,
  boxShadow: 3,
  maxWidth: "400px",
  width: "100%",
  mt: { xs: 2, md: 0 },
  mb: { xs: 2, md: 0 }, // negative margin pushes it into the next section
  display: { xs: "none", md: "block" },
  position: "relative", // key to allow overlap
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
          fullWidth
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          fullWidth
          name="phone"
          label="Phone Number"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />

        <TextField
          fullWidth
          name="service"
          select
          label="Choose a Service"
          variant="outlined"
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
          fullWidth
          name="date"
          type="date"
          label="Select Date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange}
          error={!!errors.date}
          helperText={errors.date}
        />

        <TextField
          fullWidth
          name="zip"
          label="Zip Code"
          variant="outlined"
          value={formData.zip}
          onChange={handleChange}
          error={!!errors.zip}
          helperText={errors.zip}
        />

        <TextField
          fullWidth
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <Button
          variant="contained"
          color={submitted ? "success" : "primary"}
          fullWidth
          onClick={handleSubmit}
          sx={{ "&:hover": { backgroundColor: "#008080", border: "2px solid black" } }}
        >
          {submitted ? "Successfully Submitted" : "Submit"}
        </Button>

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
  <Box sx={{ display: "flex", alignItems: "space-between", gap: 1 }}>
    <Box
      sx={{
        border: "2px solid #008080",
        borderRadius: "50%",
        padding: "5px",
        display: "flex",
        alignItems: "space-between",
        justifyContent: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "#ff4d4d", // red shade
          color: "#ff4d4d",
        },
        color: "#008080",
      }}
    >
      <PhoneIcon fontSize="small" />
    </Box>
    <Typography variant="body2" fontWeight="bold">
        
Hotline 
      +971 56 502 1171
    </Typography>
  </Box>

  {/* Email */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      sx={{
        border: "2px solid #008080",
        borderRadius: "50%",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "#ff4d4d",
          color: "#ff4d4d",
        },
        color: "#008080",
      }}
    >
      <EmailIcon fontSize="small" />
    </Box>
    <Typography variant="body2" fontWeight="bold">
        Gmail <br />
        info@quickbrightcleaners.com
    </Typography>
  </Box>
</Box>

      </Box>
    </Box>
  );
};
export default CleaningForm;
