"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "El dojo que necesitas",
    subtitle: "Clases todos los días",
    buttonText: "Anotate",
    buttonLink: "#contacto",
    backgroundImage: "/Banner1200x720.jpg",
  },
  {
    id: 2,
    title: "Entrenamiento para todos los niveles",
    subtitle: "Desde principiantes hasta atletas avanzados",
    buttonText: "Ver clases",
    buttonLink: "#clases",
    backgroundImage: "/ImagenFondo.jpg",
  },
  {
    id: 3,
    title: "Comunidad que acompaña",
    subtitle:
      "Formá parte de un equipo comprometido con el crecimiento personal y la sana competencia",
    buttonText: "El equipo",
    buttonLink: "#equipo",
    backgroundImage: "/Banner1200x720.jpg",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-shark-950 text-white overflow-hidden">
      {/* Background images for each slide */}
      {bannerSlides.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.backgroundImage && (
            <Image
              src={slide.backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          )}
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />

      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {bannerSlides?.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8 absolute inset-0 flex items-center justify-center"
            }`}
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-hero-text drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto opacity-95 animate-fade-in-delay drop-shadow-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <a
                href={slide.buttonLink}
                className="hero-button inline-block bg-white text-shark-950 px-10 py-4 text-lg font-semibold rounded-lg hover:bg-shark-100 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-white/20 animate-slide-up-delay"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-80"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600 z-30">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: isAutoPlaying
              ? `${((currentSlide + 1) / bannerSlides.length) * 100}%`
              : "0%",
          }}
        />
      </div>
    </section>
  );
}
