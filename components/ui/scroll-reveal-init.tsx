"use client";
import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
