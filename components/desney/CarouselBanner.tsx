"use client"
import { Movie } from "@/typing"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = {delay: 8000};

function CarouselBanner({movies}:{movies:Movie[]}) {
    const [emblaRef] = useEmblaCarousel({loop: false, duration: 100},[Autoplay()])
  return (
    <div className="overflow-hidden lg:-mt-40 relative cursor-pointer" ref={emblaRef}>
      <div className="flex">
        {movies.map(movie=>(
          <div className="flex-full min-w-0 relative" key={movie.id}>
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path,true)}
              alt={movie.title}
              height={1080}
              width={1920}
            />

            <div className="hidden md:inline 
            absolute mt-0 top-0 z-20 
            bg-transparent left-0 xl:pt-52 pt-40
            h-full w-full bg-gradient-to-r from-gray-900/90 to-transparent
            text-white space-y-5 p-10
            ">
              <h2 className="text-2xl">{movie.title}</h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
        </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"/>
      </div>
  )
}

export default CarouselBanner