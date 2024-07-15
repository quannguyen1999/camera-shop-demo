import Image from "next/image";

export const LoadingFullScreen = () => {
  return (
    <div className="h-full w-full gap-5 fixed z-30   flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
      <p className="text-gray-400">Loading...</p>
    </div>
  );
};
