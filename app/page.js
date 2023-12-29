import Image from "next/image";
import PageTransitionLayout from "./ui/PageTransitionLayout";
import trips from "@/app/lib/trips";
import TripSection from "./ui/TripSection";
import heroImage from "@/public/images/Hero.png";

export default function Page() {
  return (
    <PageTransitionLayout>
      <div className="snap-mandatory snap-y overflow-y-scroll	h-screen">
        <div className="h-screen relative flex flex-col justify-center items-center gap-5 snap-start">
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center text-white uppercase">
            Brenden Togioka
            <br />
            <span className="text-6xl md:text-8xl font-semibold normal-case mt-2">
              Photography
            </span>
          </h1>
          <div className="absolute z-10 bottom-2 text-white text-3xl cursor-default">
            <span>&darr;</span>
          </div>
          <Image
            src={heroImage}
            alt="Hero image"
            className="absolute z-0 top-0 left-0 h-full w-full object-cover"
          />
        </div>
        {trips.map((trip) => (
          <TripSection trip={trip} key={trip.id} />
        ))}
      </div>
    </PageTransitionLayout>
  );
}
