import bigsur from "@/public/images/bigsur.jpg";
import deathvalley from "@/public/images/deathvalley.jpg";
import whitesands from "@/public/images/whitesands.jpg";
import bistiFeature from "@/public/images/bisti/feature.jpg";
import icelandFeature from "@/public/images/iceland/2c.jpg";

const trips = [
  {
    id: "1",
    title: "Bisti Badlands",
    img: bistiFeature,
    slug: "bisti-badlands",
  },
  { id: "2", title: "Iceland", img: icelandFeature, slug: "iceland" },
  { id: "3", title: "Big Sur", img: bigsur, slug: "big-sur" },
  { id: "4", title: "Death Valley", img: deathvalley, slug: "death-valley" },
  { id: "5", title: "White Sands", img: whitesands, slug: "white-sands" },
];

export default trips;

// add code for grid layout from other repo
