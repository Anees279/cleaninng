import React, { useEffect } from "react";

const GlowingCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-glow-cursor");

    // Style the cursor
    Object.assign(cursor.style, {
      position: "fixed",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#000", // Pure black center
      boxShadow: "0 0 8px 4px rgba(0, 0, 0, 0.4)", // Soft black glow
      pointerEvents: "none",
      mixBlendMode: "difference",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
      transition: "transform 0.08s ease-out",
    });

    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default GlowingCursor;
