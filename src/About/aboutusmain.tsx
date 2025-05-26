
import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../asserts/About/Photo/2.jpeg";
import icon from "../asserts/icon/Icon.png";

interface Stat {
  label: string;
  value: number;
}

const stats: Stat[] = [
  { label: "Experienced", value: 98 },
  { label: "Reliable", value: 86 },
  { label: "Skilled & Capable", value: 90 },
  { label: "Flexible", value: 80 },
];

const AboutUSMain: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [percentages, setPercentages] = useState<number[]>(new Array(stats.length).fill(0));
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    AOS.init({ duration: 3000, once: false });

    const observers: IntersectionObserver[] = [];

    stats.forEach((stat, index) => {
      const ref = progressRefs.current[index];
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animateProgress(index, stat.value);
          } else {
            setPercentages((prev) => {
              const updated = [...prev];
              updated[index] = 0;
              return updated;
            });
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer, index) => {
        const ref = progressRefs.current[index];
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const animateProgress = (index: number, target: number) => {
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);

      setPercentages((prev) => {
        const updated = [...prev];
        updated[index] = currentValue;
        return updated;
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        {/* Two Top Boxes: Text + Stats */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
          }}
        >
          {/* Text Content Box */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box component="img" src={icon} alt="Service Icon" sx={{ width: 24, height: 24 }} />
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontWeight: "bold",
                  color: "#D9315A",
                  fontSize: 17,
                }}
              >
                About us
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                color: "#008080",
                fontSize: { xs: 32, md: 44 },
                mt: 4,
              }}
            >
              Clean Home with Our Professional Cleaning Services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "DM Sans",
                color: "#7F8490",
                fontSize: 16,
                mt: 2,
                lineHeight: 1.7,
                textAlign: "justify",
              }}
            >
              Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut
              dolor felis quis. Sagittis a sapien pulvinar etiam.
            </Typography>
          </Box>

          {/* Stats Box */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {stats.map((item, index) => (
              <Box
                key={index}
                ref={(el) => { progressRefs.current[index] = el as HTMLDivElement | null; }}
                sx={{ width: "100%", maxWidth: 570 }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Urbanist",
                      fontSize: 16,
                      color: "#0E5C67",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontFamily: "Urbanist",
                      fontSize: 16,
                      color: "red",
                    }}
                  >
                    {percentages[index]}%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 10,
                    backgroundColor: "#D1D1DC",
                    borderRadius: 5,
                    overflow: "hidden",
                    boxShadow: "inset 0 0 0 1px #ccc",
                  }}
                >
                  <Box
                    sx={{
                      width: `${percentages[index]}%`,
                      height: "100%",
                      background: "linear-gradient(to right, #0E5C67, #0E5C67)",
                      transition: "width 0.05s linear",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Image Below */}
        <Box
          component="img"
          src={heroImage}
          alt="Cleaning illustration"
          data-aos="fade-up-right"
          sx={{
            width: { xs: "100%", sm: "100%", md: "90%" },
            height: { xs: "auto", sm: "auto", md: 601 },
            borderRadius: 4,
            mt: { xs: 6, md: 10 },
            mx: 0,
            display: "block",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default AboutUSMain;
