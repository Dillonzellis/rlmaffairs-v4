import { useState, useEffect, useRef } from "react";

export const useToggleVisibility = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { ref, isVisible, toggleVisibility };
};
