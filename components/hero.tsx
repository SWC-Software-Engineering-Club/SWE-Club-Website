import Image from "next/image";

const Hero = () => {
    return ( 
        <div className="w-full m-auto overflow-hidden">
        <Image
          src="/reference.png"
          alt="work illustration"
          layout="responsive"
          objectFit="cover"
          width={2000} // Use a large width value to fill the container
          height={1000} // Set a fixed height to maintain the aspect ratio
        />
      </div>
     );
}
 
export default Hero;