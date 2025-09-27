"use client";

import { useState, useEffect } from "react";

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
    title: "Transformá tu vida a través del movimiento",
    subtitle: "Descubrí tu potencial máximo con nuestros programas personalizados de fitness y bienestar",
    buttonText: "Empezá tu transformación",
    buttonLink: "#programas",
  },
  {
    id: 2,
    title: "Entrenamiento personalizado para todos los niveles",
    subtitle: "Desde principiantes hasta atletas avanzados, tenemos el programa perfecto para vos",
    buttonText: "Ver programas",
    buttonLink: "#programas",
  },
  {
    id: 3,
    title: "Comunidad que te inspira a crecer",
    subtitle: "Formá parte de una familia comprometida con el crecimiento personal y el bienestar",
    buttonText: "Conocé el equipo",
    buttonLink: "#equipo",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Slides */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8 absolute inset-0 flex items-center justify-center"
            }`}
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-hero-text">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <a
                href={slide.buttonLink}
                className="hero-button inline-block bg-white text-black px-8 py-4 text-lg font-medium rounded-lg hover:bg-gray-100 animate-slide-up-delay"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-80"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600 z-30">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: isAutoPlaying ? `${((currentSlide + 1) / bannerSlides.length) * 100}%` : "0%",
          }}
        />
      </div>
    </section>
  );
}
