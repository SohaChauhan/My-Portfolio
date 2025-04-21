"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    if (isMobile) {
      // Don't run the custom cursor logic on mobile
      return;
    }
    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const inner = innerRef.current;
      if (inner) {
        inner.style.left = `${mouseX}px`;
        inner.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      const outer = outerRef.current;
      if (outer) {
        currentX += (mouseX - currentX) / 8;
        currentY += (mouseY - currentY) / 8;
        outer.style.left = `${currentX}px`;
        outer.style.top = `${currentY}px`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    const addCursorHover = () => {
      innerRef.current?.classList.add("hovered");
      outerRef.current?.classList.add("hovered");
    };

    const removeCursorHover = () => {
      innerRef.current?.classList.remove("hovered");
      outerRef.current?.classList.remove("hovered");
    };

    const addClickEffect = () => {
      innerRef.current?.classList.add("clicked");
      outerRef.current?.classList.add("clicked");
    };

    const removeClickEffect = () => {
      innerRef.current?.classList.remove("clicked");
      outerRef.current?.classList.remove("clicked");
    };

    const handleMouseDown = () => addClickEffect();
    const handleMouseUp = () => removeClickEffect();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const clickableElements = document.querySelectorAll(
      "button, a, [role='button'], input, textarea"
    );

    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", addCursorHover);
      el.addEventListener("mouseleave", removeCursorHover);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", addCursorHover);
        el.removeEventListener("mouseleave", removeCursorHover);
      });
    };
  }, []);

  return (
    <>
      {/* Inner Circle */}
      <div
        ref={innerRef}
        className="custom-cursor-inner dark:bg-white bg-black"
      />
      {/* Outer Circle */}
      <div
        ref={outerRef}
        className="custom-cursor-outer dark:bg-white/40 bg-black/20"
      />
    </>
  );
};

export default CustomCursor;
