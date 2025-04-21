"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const checkMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    setIsMobile(checkMobile);

    if (checkMobile) return;

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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", addClickEffect);
    document.addEventListener("mouseup", removeClickEffect);

    const clickableElements = document.querySelectorAll(
      "button, a, [role='button'], input, textarea"
    );

    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", addCursorHover);
      el.addEventListener("mouseleave", removeCursorHover);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", addClickEffect);
      document.removeEventListener("mouseup", removeClickEffect);
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", addCursorHover);
        el.removeEventListener("mouseleave", removeCursorHover);
      });
    };
  }, []);

  // Wait until hydration to render anything
  if (!hasMounted || isMobile) return null;

  return (
    <>
      <div
        ref={innerRef}
        className="custom-cursor-inner dark:bg-white bg-black"
      />
      <div
        ref={outerRef}
        className="custom-cursor-outer dark:bg-white/40 bg-black/20"
      />
    </>
  );
};

export default CustomCursor;
