import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.utils.toArray(".gsap-reveal").forEach((element) => {

        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions:
                "play none none reverse",
            },
          }
        );

      });


      gsap.to(".hero-background", {
        yPercent: 15,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    });

    return () => ctx.revert();

  }, []);

  return null;
};

export default ScrollAnimations;