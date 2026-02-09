"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const artworks = [
  {
    id: 1,
    title: "Heavyweight Unisex Crewneck T-shirt",
    price: "£ 299.99",
    stock: "in Stock",
    badge: "Exclusive",
    image: "/images/Rectangle 16.jpg",
  },
  {
    id: 2,
    title: "Heavyweight Unisex Crewneck T-shirt",
    price: "£ 299.99",
    stock: "in Stock",
    badge: "Bestseller",
    image: "/images/Rectangle 16 (1).jpg",
  },
  {
    id: 3,
    title: "Heavyweight Unisex Crewneck T-shirt",
    price: "£ 299.99",
    stock: "in Stock",
    badge: "Bestseller",
    image: "/images/Rectangle 16 (2).jpg",
  },
  {
    id: 4,
    title: "Heavyweight Unisex Crewneck T-shirt",
    price: "£ 299.99",
    stock: "in Stock",
    badge: "New",
    image: "/images/Rectangle 16.jpg",
  },
];

export default function FeaturedArtworkSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative pb-20 pt-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="mb-12 text-center text-3xl font-bold">
          Featured Artwork
        </h2>

        {/* Slider Buttons */}
        <Button
          size="icon"
          variant="outline"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </Button>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {artworks.map((item) => (
            <SwiperSlide key={item.id}>
              <ArtworkCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Button */}
        <div className="mt-12 flex justify-center">
          <div className="inline-block rounded-lg bg-gradient-to-r from-[#EA62CC] to-[#651FFF] p-[2px] hover:scale-105 transition-transform">
            <Button
              variant="outline"
              className="rounded-lg border-0 px-6"
            >
              View all Artwork <MoveRight className="ml-2 inline-block text-[#bf95d3]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

type Artwork = {
  title: string;
  price: string;
  stock: string;
  badge: string;
  image: string;
};

function ArtworkCard({ item }: { item: Artwork }) {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#E2D4FF] to-[#EEE7FF69] shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold">
          {item.badge}
        </span>
        <img
          src={item.image}
          alt={item.title}
          className="h-72 w-full rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4 p-4">
        <h3 className="text-lg font-bold">{item.title}</h3>

        <div className="py-4 mt-3 flex items-center justify-between">
          <div className="">
            <p className="text-sm font-semibold text-gray-600 mb-2">PRICE</p>
            <p className="font-bold">{item.price}</p>
            <p className="text-sm text-gray-500">GBP</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-600 mb-2">FEW LEFT</p>
            <p className="font-bold text-[#C622FF]">{item.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
