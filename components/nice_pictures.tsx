import Image from "next/image";
const NicePictures = () => {
  return (
    <>
      <Image
        className="dark:invert rounded-2xl shadow-lg border border-red-500 bg-red-200 w-full"
        src="/teddy_bear.jpg"
        alt="Next.js logo"
        width={200}
        height={200}
        priority
      />
    </>
  );
};

export default NicePictures;
