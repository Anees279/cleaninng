
import React, { useEffect } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";

import avatar1 from "./asserts/1-20250410T042209Z-001/1/test1.png";
import avatar2 from "./asserts/1-20250410T042209Z-001/1/test2.png";
import avatar3 from "./asserts/1-20250410T042209Z-001/1/test3.png";
import logo1 from "./asserts/logos/Logo Client 1.png";
import logo2 from "./asserts/logos/Logo Client 2.png";
import logo3 from "./asserts/logos/Logo Client 3.png";
import logo4 from "./asserts/logos/Logo Client 4.png";
import logo5 from "./asserts/logos/Logo Client 5.png";

const testimonials = [
  {
    name: "James Smith",
    role: "Office Manager",
    feedback:
      "Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit.",
    avatar: avatar1,
  },
  {
    name: "Rachel Lee",
    role: "Office Manager",
    feedback:
      "Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit.",
    avatar: avatar2,
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    feedback:
      "Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit.",
    avatar: avatar3,
  },
];

const logos = [logo1, logo2, logo3, logo4, logo5];

const Testimonial: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []); 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
  };

  const TestimonialCard = (item: typeof testimonials[0], index: number) => (
    <Box
      key={index}
      data-aos="fade-up"
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 400, md: 400, xl: 460 },
        borderRadius: 3,
        border: "1px solid #E0E0E0",
        p: 5,
        position: "relative",
        backgroundColor: "#fff",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} sx={{ fontSize: 20, color: "#EE7F50" }} />
        ))}
      </Box>
      <Typography sx={{ fontSize: 16, color: "#7F8490", fontFamily: "DM Sans", mb: 2 }}>
        {item.feedback}
      </Typography>
      <Box sx={{ borderBottom: "1px solid #ccc", mb: 2 }} />
      <Typography sx={{ fontWeight: 400, color: "#008080", fontFamily: "Urbanist" }}>
        {item.name}
      </Typography>
      <Typography sx={{ fontSize: 14, color: "#7F8490", fontFamily: "DM Sans" }}>
        {item.role}
      </Typography>
      <Avatar
        src={item.avatar}
        alt={item.name}
        sx={{ width: 40, height: 40, position: "absolute", bottom: 40, right: 16 }}
      />
    </Box>
  );

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#FAFBFF" }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
          <CheckCircleIcon sx={{ color: "#D9315A", width: 17, height: 24 }} />
          <Typography
            sx={{
              fontSize: { xs: 20, md: 17 },
              fontWeight: "bold",
              color: "#D9315A",
              fontFamily: "Urbanist",
            }}
          >
            Testimonial
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 26, md: 46 },
            fontWeight: 400,
            color: "#008080",
            fontFamily: "Urbanist",
            mt: 2,
          }}
        >
          Hear What Our Clients Say
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            mt: 1,
            color: "#7F8490",
            fontFamily: "DM Sans",
            maxWidth: 725,
            mx: "auto",
          }}
        >
          Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis.
          Sagittis a sapien pulvinar etiam.
        </Typography>
      </Box>

      {isSmallScreen ? (
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <Box key={index}>{TestimonialCard(item, index)}</Box>
          ))}
        </Slider>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "wrap",
          }}
        >
          {testimonials.map((item, index) => TestimonialCard(item, index))}
        </Box>
      )}

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography sx={{ fontSize: 24, color: "#0E5C67", fontFamily: "Urbanist", fontWeight: 400 }}>
          Trusted by 50k+ customers
        </Typography>
        <Typography sx={{ fontSize: 26, color: "#7F8490", fontWeight: "400", fontFamily: "Urbanist", mt: 1 }}>
          4.4/5 . 3,841 Reviews
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          gap: { xs: 2, md: 20 },
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {logos.map((logo, idx) => (
          <Box
            key={idx}
            component="img"
            src={logo}
            alt={`Logo ${idx + 1}`}
            sx={{ width: 125, height: "auto" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonial;
