"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import trips from "@/app/lib/trips";
import PageTransitionLayout from "@/app/ui/PageTransitionLayout";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/app/ui/NextJSImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "@/app/lib/photos";

export default function Page() {
  const [index, setIndex] = useState(-1);
  const pathname = usePathname();
  const slug = pathname.replace("/trips/", "");
  const trip = trips.find((trip) => trip.slug === slug);

  return (
    <PageTransitionLayout>
      <div className="relative">
        <div className="relative flex justify-center items-center h-[500px]">
          <h1 className="relative z-10 text-6xl font-extrabold text-white">
            {trip.title}
          </h1>
          <Image
            src={trip.img}
            alt={trip.title}
            className="h-full absolute top-0 left-0 z-0 object-cover"
            priority={true}
          />
        </div>
        <Link
          href={`/#${trip.slug}`}
          className="absolute top-2 left-2 z-20 text-white font-black"
        >
          &#x25c0;<span className="ml-1">Back</span>
        </Link>
      </div>

      <div className="w-full p-3 max-w-[1200px] mx-auto lg:py-8">
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          renderPhoto={NextJsImage}
          defaultContainerWidth={1200}
          sizes={{ size: "100vw" }}
          onClick={({ index }) => setIndex(index)}
          columns={(containerWidth) => {
            if (containerWidth < 440) return 1;
            if (containerWidth < 800) return 2;
            return 3;
          }}
        />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[
            Zoom,
            // Fullscreen, Thumbnails, Slideshow
          ]}
          // thumbnails={{ height: 60 }}
        />
      </div>
    </PageTransitionLayout>
  );
}
