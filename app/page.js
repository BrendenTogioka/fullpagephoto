import Image from "next/image";
import Link from "next/link";

import trips from "@/app/lib/trips";

export default function Page() {
  return (
    <div>
      <div className="snap-mandatory snap-y overflow-y-scroll	h-screen">
        {trips.map((trip) => (
          <section
            key={trip.id}
            className="h-screen relative flex flex-col justify-center items-center gap-5 snap-start"
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
        ))}
      </div>
    </div>
  );
}
