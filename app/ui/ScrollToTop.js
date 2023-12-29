"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import upArrow from "@/public/icons/up-arrow-circle.svg";
import { classNames } from "./utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="upArrow">
      <button type="button" onClick={scrollToTop}>
        <Image
          src={upArrow}
          alt="up arrow"
          width="60"
          className={`fixed z-10 bottom-3 right-3 hover:scale-105  cursor-pointer rounded-full ${classNames(
            isVisible ? "opacity-100" : "opacity-0"
          )} transition-opacity shadow-sm`}
        />
      </button>
    </div>
  );
}
