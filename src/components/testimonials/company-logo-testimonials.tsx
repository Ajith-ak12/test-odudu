"use client"
import React, { useRef, useState } from "react";

import { Card } from "@/components/ui/card";

const testimonials = [
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "The Odudu DAO represents a transformative approach to digital governance that aligns perfectly with Nigeria's vision for technological sovereignty and inclusive development across our diverse communities.",
    author: {
      name: "Dr. Amina Zakari",
      role: "Director of Digital Transformation, Federal Ministry of Communications",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "Technology must serve to preserve and elevate our rich cultural heritage, not replace it. This platform demonstrates how innovation can strengthen traditional governance while empowering our people for the digital age.",
    author: {
      name: "His Royal Majesty Oba Adeyemi III",
      role: "Alaafin of Oyo, Traditional Council of Yorubaland",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "Africa's fintech revolution requires platforms that understand our unique context. Odudu DAO's approach to decentralized governance and financial inclusion positions the continent as a leader in the global digital economy.",
    author: {
      name: "Kemi Adeosun",
      role: "CEO, AfriTech Innovations & Former Finance Minister",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "This platform has revolutionized how we approach rapid prototyping. The intuitive interface saves us countless hours.",
    author: {
      name: "Sarah Mitchell",
      role: "UX Director, Spotify",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "The seamless workflow integration has transformed our design process. We can iterate and deploy faster than ever before.",
    author: {
      name: "Marcus Rodriguez",
      role: "Senior Product Designer, Airbnb",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "Finally, a tool that bridges the gap between design and development. Our team collaboration has never been smoother.",
    author: {
      name: "Jessica Wong",
      role: "Lead Developer, Discord",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "The automation features have streamlined our entire deployment pipeline. It's a game-changer for productivity.",
    author: {
      name: "David Kim",
      role: "Engineering Lead, Stripe",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "As a creative professional, this tool gives me the freedom to bring ideas to life without technical barriers.",
    author: {
      name: "Ana Silva",
      role: "Creative Director, Dropbox",
      image: "/owners/king.png",
    },
  },
  {
    logo: {
      src: "/owners/author.png",
      alt: " logo",
      width: 58,
      height: 58,
    },
    quote:
      "The collaborative features keep our distributed team aligned and productive. It's become essential to our workflow.",
    author: {
      name: "Thomas Anderson",
      role: "Product Manager, Shopify",
      image: "/owners/king.png",
    },
  },
];

const CompanyLogoTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse event handlers for drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  const onMouseLeave = () => setIsDragging(false);

  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-12 bg-background">
      <div className=" px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container flex flex-col gap-6 py-4 max-lg:border-x lg:py-8">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl font-display text-neutral-800">
            Trusted by Leaders Across Africa
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Building partnerships with governments, institutions, and communities across the continent.
          </p>
        </div>
      </div>

      <div
        className={`container mt-10 overflow-x-auto select-none testimonial-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ userSelect: "none" }}
      >
        <div className="flex gap-8 min-w-max">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col gap-6 rounded-md bg-card p-6 shadow-sm border min-w-[320px] max-w-[400px]"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.logo.src}
                  alt={testimonial.logo.alt}
                  width={testimonial.logo.width}
                  height={testimonial.logo.height}
                  style={{ maxHeight: 60, maxWidth: 66 }}
                />
              </div>
              <blockquote className="text-muted-foreground text-lg font-normal italic">{`"${testimonial.quote}"`}</blockquote>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src={testimonial.author.image}
                  alt="profile"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg tracking-[-0.36px] font-display text-neutral-800">
                    {testimonial.author.name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/*  <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div> */}
      {/* Hide scrollbar with CSS */}
      <style>{`
        .testimonial-scrollbar {
          scrollbar-width: none; /* Firefox */
        }
        .testimonial-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </section>
  );
};

export { CompanyLogoTestimonials };