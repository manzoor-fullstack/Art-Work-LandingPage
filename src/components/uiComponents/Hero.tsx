import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
  Package,
  Award,
  Truck,
  MoveRight,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    titleHighlight: "Personal Space",
    subtitleHighlight: "Artwork",
    image: "/images/img_About_01_Home01.png",
  },
  {
    titleHighlight: "Living Room",
    subtitleHighlight: "Wall Art",
    image: "/images/img_About_01_Home01.png",
  },
  {
    titleHighlight: "Creative",
    subtitleHighlight: "Designs",
    image: "/images/img_About_01_Home01.png",
  },
];

export default function Hero() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  if (!api) return

  const onSelect = () => {
    setCurrent(api.selectedScrollSnap())
  }

  // Set initial value
  onSelect()

  // Listen for slide changes
  api.on("select", onSelect)

  return () => {
    api.off("select", onSelect)
  }
}, [api])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#DDCEFF] to-[#C0A0FF] px-6 pb-14 md:px-16">
      {/* TOP BADGES (UNCHANGED) */}
      <div className="mb-10 flex flex-wrap items-center justify-around gap-6 rounded-bl-lg rounded-br-lg bg-gray-200 py-4 text-[#9160FF]">
        <span className="flex items-center gap-2 text-lg font-medium">
          <Award size={24} className="text-[#EA62CC]" />
          100 Year Guarantee On The Paper
        </span>
        <span className="flex items-center gap-2 text-lg font-medium">
          <Package size={24} className="text-[#EA62CC]" />
          Ships From Europe
        </span>
        <span className="flex items-center gap-2 text-lg font-medium">
          <Truck size={24} className="text-[#EA62CC]" />
          Delivers In 7+ Business Days
        </span>
      </div>

      {/* HERO SLIDER */}
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true }}
        onSelect={(e) => setCurrent(e.selectedScrollSnap())}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid items-center gap-12 md:grid-cols-2">
                {/* LEFT */}
                <div>
                  <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                    Enhance Your <br />
                    <span className="bg-gradient-to-r from-[#B71FFF] to-[#651FFF] px-3 py-1 text-white">
                      {slide.titleHighlight}
                    </span>
                    <br />
                    with Breathtaking
                    <br />
                    <span className="text-purple-600">
                      {slide.subtitleHighlight}
                    </span>
                  </h1>

                  <Button className="mt-8 rounded-lg bg-black px-6 py-6 text-lg font-semibold text-white hover:bg-black/90">
                    Shop Now
                    <MoveRight className="ml-2 text-[#bf95d3]" />
                  </Button>
                </div>

                {/* RIGHT */}
                <div className="relative flex justify-center">
                  <div className="absolute top-3 h-[300px] w-[220px] rotate-10 rounded-[2rem] bg-purple-600/20" />
                  <img
                    src={slide.image}
                    alt="Artwork"
                    className="relative h-[350px] w-full max-w-[280px] rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* SLIDER CONTROLS (SAME POSITION AS YOUR UI) */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={() => api?.scrollPrev()}
          className="rounded-full bg-white p-2 shadow"
        >
          <ChevronLeft size={18} />
        </button>

        {/* DOTS */}
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-1 w-6 rounded-full transition focus:outline-none hover:bg-purple-400 ${
  current === i ? "bg-purple-600" : "bg-gray-100"
}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => api?.scrollNext()}
          className="rounded-full bg-white p-2 shadow"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4
      sm:grid-cols-2
      md:grid-cols-3
      md:absolute md:left-1/2 md:-translate-x-1/2
      md:-bottom-28
      lg:-bottom-16
      z-50">
        <Feature
          icon={<ShieldCheck />}
          title="100 Year Guarantee On The Paper"
          desc="Amet minim mollit non deserunt ullamco."
        />
        <Feature
          icon={<RotateCcw />}
          title="14 Day Return Policy"
          desc="Amet minim mollit non deserunt ullamco."
        />
        <Feature
          icon={<Package />}
          title="Damaged Goods Replacement"
          desc="Amet minim mollit non deserunt ullamco."
        />
      </div>
    </section>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div className="rounded-2xl bg-[#DECFFF4D]/90 p-6 backdrop-blur ">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 700">
        {icon}
      </div>
      <div className="">
        <h3 className="font-semibold text-lg py-4 text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          <span className="mr-4 h-6 w-1 inline-block bg-purple-700"></span>
          {desc}
        </p>
      </div>
    </div>
  );
}
