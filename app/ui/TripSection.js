"use client";
import Image from "next/image";
import Link from "next/link";

import { useInView } from "react-intersection-observer";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TripSection({ trip }) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const router = useRouter();

  useEffect(() => {
    if (inView) {
      router.replace(`#${trip.slug}`);
    } else {
      null;
    }
  }, [inView]);

  return (
    <section
      key={trip.id}
      className="h-screen relative flex flex-col justify-center items-center gap-5 snap-start"
      ref={ref}
      id={trip.slug}
    >
      <h1 className="relative z-10 text-6xl font-extrabold text-white">
        {trip.title}
      </h1>
      <Link
        href={`/trips/${trip.slug}`}
        className="relative z-10 py-3 px-6 text-xl font-bold uppercase text-white border rounded-md bg-black/[0.2] hover:bg-black/[0.4]"
      >
        View More &#187;
      </Link>
      <Image
        src={trip.img}
        alt={trip.title}
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
      />
    </section>
  );
}
