import Image from "next/image";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}) {
  return (
    <div
      style={{ ...wrapperStyle, position: "relative" }}
      // className="w-full"
      key={title}
    >
      <Image
        src={photo}
        fill
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}
