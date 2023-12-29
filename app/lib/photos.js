const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const cloudinaryLink = (id, title) =>
  `https://res.cloudinary.com/dlle6kl4n/image/upload/${id}/${title}`;

const cloudinaryPhotos = [
  {
    id: "v1701759211",
    title: "badwater_ndtady.jpg",
    width: 1800,
    height: 2400,
  },
  {
    id: "v1701759210",
    title: "lbboardwalk_g9w2hv.jpg",
    width: 1800,
    height: 2400,
  },
  { id: "v1701759211", title: "duchess_wjtutr.jpg", width: 1800, height: 2400 },
  {
    id: "v1701759211",
    title: "grandprismatic_sqqsbc.jpg",
    width: 1800,
    height: 2400,
  },
  { id: "v1701759101", title: "carizo_d42cpu.jpg", width: 2400, height: 1800 },
  {
    id: "v1701759210",
    title: "palosverdes_y91qwo.jpg",
    width: 1800,
    height: 2400,
  },
  { id: "v1701759210", title: "yant_cg28yh.jpg", width: 1800, height: 2400 },
  {
    id: "v1701759211",
    title: "grundafjorour_pmu1ba.jpg",
    width: 1800,
    height: 2400,
  },
  { id: "v1701759212", title: "bigsur_ucvms1.jpg", width: 1800, height: 2400 },
  {
    id: "v1701759101",
    title: "travertine_cwwliw.jpg",
    width: 2400,
    height: 1800,
  },
  { id: "v1701759212", title: "balloon_myvwdn.jpg", width: 1800, height: 2400 },
  {
    id: "v1701759210",
    title: "buckmoon_legin5.jpg",
    width: 1800,
    height: 2400,
  },
  { id: "v1701759212", title: "sequoia_wizylv.jpg", width: 1800, height: 2400 },
  {
    id: "v1701759211",
    title: "cloudforest_mejp9t.jpg",
    width: 1800,
    height: 2400,
  },
  {
    id: "v1701759101",
    title: "morningglory_e8uhmf.jpg",
    width: 2400,
    height: 1800,
  },
  { id: "v1701759210", title: "iceland_eldwv2.jpg", width: 1800, height: 2400 },
];

const photos = cloudinaryPhotos.map((photo) => ({
  src: cloudinaryLink(photo.id, photo.title),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: cloudinaryLink(photo.id, photo.title),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
