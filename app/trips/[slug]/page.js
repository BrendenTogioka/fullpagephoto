"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import trips from "@/app/lib/trips";
import PageTransitionLayout from "@/app/ui/PageTransitionLayout";

export default function Page() {
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
        <Link href={`/#${trip.slug}`}>Back</Link>
      </div>
    </PageTransitionLayout>
  );
}
