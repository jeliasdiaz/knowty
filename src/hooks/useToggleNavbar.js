import { useState, useEffect } from "react";

export const useToggleNavbar = () => {
  const [yOffset, setYOffset] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.scrollY;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }
  return {
    visible,
  };
};
