import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(scopeRef) {
  useEffect(() => {
    if (!scopeRef.current) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".parallax-image").forEach((element) => {
        gsap.to(element, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray(".timeline-item").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, x: index % 2 === 0 ? -40 : 40 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              once: true,
            },
          },
        );
      });

      gsap.to(".experience-track", {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: "#experiences",
          start: "top 68%",
          end: "bottom 62%",
          scrub: true,
        },
      });
    }, scopeRef);

    return () => context.revert();
  }, [scopeRef]);
}
