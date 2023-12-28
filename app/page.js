import PageTransitionLayout from "./ui/PageTransitionLayout";
import trips from "@/app/lib/trips";
import TripSection from "./ui/TripSection";

export default function Page() {
  return (
    <PageTransitionLayout>
      <div className="snap-mandatory snap-y overflow-y-scroll	h-screen">
        <div className="h-screen relative flex flex-col justify-center items-center gap-5 snap-start">
          <h1>Brenden Togioka</h1>
          <p>Designer | Developer | Photographer</p>
        </div>
        {trips.map((trip) => (
          <TripSection trip={trip} key={trip.id} />
        ))}
      </div>
    </PageTransitionLayout>
  );
}
