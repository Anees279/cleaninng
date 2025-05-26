
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import emailjs from "emailjs-com";

interface CleaningFormProps {
  onSuccess: () => void;
  submitted: boolean;
}

const CleaningForm: React.FC<CleaningFormProps> = ({ onSuccess, submitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    zip: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
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

    emailjs
      .send(
        "service_x8mpym4",
        "template_gjzsa53",
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
        setFormData({
          name: "",
          phone: "",
          service: "",
          date: "",
          zip: "",
          email: "",
        });
        onSuccess();
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
        width: {
          xs: "100%", // small devices
          sm: "90%",  // tablets
          md: "400px", // large devices
        },
        p: {
          xs: 2, // small devices
          sm: 3, // tablets
          md: 4, // large
        },
        m: "auto",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(5px)",
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
          sx={{
            "&:hover": {
              backgroundColor: "#008080",
              border: "2px solid black",
            },
          }}
        >
          {submitted ? "Successfully Submitted" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default CleaningForm;
