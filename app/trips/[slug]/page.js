"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import trips from "@/app/lib/trips";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.replace("/trips/", "");
  const trip = trips.find((trip) => trip.slug === slug);

  console.log(trip);
  return (
    <div className="relative">
      <div className="relative flex justify-center items-center h-[500px]">
        <h1 className="relative z-10 text-6xl font-extrabold text-white">
          {trip.title}
        </h1>
        <Image
          src={trip.img}
          alt={trip.title}
          className="h-full absolute top-0 left-0 z-0 object-cover"
        />
      </div>

      <button
        type="button"
        onClick={() => router.push("/")}
        className="bg-blue"
      >
        Back
      </button>
    </div>
  );
}
