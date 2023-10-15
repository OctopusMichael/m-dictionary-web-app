"use client";

import React, { useState } from "react";

export const useFonts = () => {
  const [fonts, setFonts] = useState("Serif");
  const [menuFonts, setMenuFonts] = useState(false);

  const handleMenuFonts = () => {
    setMenuFonts(!menuFonts);
  };

  const prevDelete = () => {
    document.body.classList.remove("Serif");
    document.body.classList.remove("Mono");
    document.body.classList.remove("Sans");
  };

  const handleFonts = (value) => {
    prevDelete();
    setFonts(value);
    setMenuFonts(false);
    if (value === "Serif") {
      document.body.classList.add(value);
    }
    if (value === "Mono") {
      document.body.classList.add(value);
    }

    if (value === "Sans") {
      document.body.classList.add(value);
    }
  };

  return { fonts, handleFonts, handleMenuFonts, menuFonts };
};
