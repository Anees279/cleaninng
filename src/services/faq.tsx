import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import icons from "../asserts/icon/Icon2.png"; // Replace with your icon path
import  ContactSection  from "./contactSection";
const leftFaqs = [
  {
    icon: icons,
    question: "How often should I schedule cleaning services?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    icon: icons,
    question: "Are your cleaning products safe for pets and children?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    icon: icons,
    question: "Can I customize my cleaning plan?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
];

const rightFaqs = [
  {
    icon: icons,
    question: "How do I choose a reliable cleaning company?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    icon: icons,
    question: "What is included in a typical cleaning service?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    icon: icons,
    question: "Do I need to be home during the cleaning service?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
];


const FaqSection: React.FC = () => {
  return (
    <Box sx={{ py: {md:15 , xs:2}, px:{md:22 , xs:3}, maxWidth: "xxl", mx: "auto", backgroundColor: "#FFF" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
          <StarIcon sx={{ fontSize: 24, color: "#D9315A" }} />
          <Typography
            sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Urbanist", color: "#D9315A" }}
          >
            FAQS
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 46 },
            fontWeight: 400,
            color: "#008080",
            fontFamily: "Urbanist",
            mt: 1,
          }}
        >
          Questions & Answers
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            color: "#7F8490",
            fontFamily: "DM Sans",
            mt: 2,
            maxWidth: 461,
            mx: "auto",
          }}
        >
          Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor
          felis quis. Sagittis a sapien pulvinar etiam.
        </Typography>
      </Box>

      {/* FAQ Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Left FAQs */}
        <Box sx={{ flex: 1 }}>
          {leftFaqs.map((faq, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, maxWidth: 521 }}>
                <img src={faq.icon} alt="icon" width={24} height={30} />
                <Typography sx={{ fontWeight: 600, fontFamily: "Urbanist" ,color:"#0E5C67", fontSize: 20 }}>
                  {faq.question}
                </Typography>
              </Box>
              <Typography sx={{ fontFamily: "DM Sans", color: "#7F8490", fontSize: 16 , lineHeight: 2 }}>
                {faq.answer}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right FAQs */}
        <Box sx={{ flex: 1 }}>
          {rightFaqs.map((faq, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <img src={faq.icon} alt="icon" width={24} height={30} />
                <Typography sx={{ fontWeight: 600, fontFamily: "Urbanist" ,color:"#0E5C67", fontSize: 20}}>
                  {faq.question}
                </Typography>
              </Box>
              <Typography sx={{ fontFamily: "DM Sans", color: "#7F8490",fontSize: 16,lineHeight: 2 }}>
                {faq.answer}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <ContactSection />
    </Box>
  );
};

export default FaqSection;
