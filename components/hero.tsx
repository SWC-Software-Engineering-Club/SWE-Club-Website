import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="w-full m-auto overflow-hidden"
      style={{ width: "100%", maxWidth: "4000px" }}
    >
      <div className="relative" style={{ width: "100%", paddingTop: "50%" }}>
        <Image
          src="/reference.png"
          alt="work illustration"
          className="absolute inset-0 w-full h-full"
          width={4000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Hero;
