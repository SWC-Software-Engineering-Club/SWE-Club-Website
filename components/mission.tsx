import Image from "next/image";

const Mission = () => {
  return ( 
    <div id="mission-statement" className="flex flex-col items-center mt-10 mb-10 relative px-8">
      <Image
        src="/icon-light.svg" 
        width={50} 
        height={50} 
        alt="Mission Icon" 
        className="absolute hidden dark:block"
      />
      <Image 
        src="/icon-dark.svg" 
        width={50} 
        height={50} 
        alt="Mission Icon" 
        className="absolute dark:hidden"
      />        
      <div className="max-w-3xl space-y-8 flex flex-col items-center mt-16 mb-10"> 
      <h3 className="text-4xl font-bold">Our Mission</h3>    
        <p className="text-neutral-800 sm:text-xl md:text-1xl font-small mb-4 dark:text-neutral-600">
          SWE Club&apos;s mission is to foster a vibrant and inclusive community for computer science enthusiasts, providing opportunities to collaborate, learn, and gain practical experience in building real-world applications. 
          Through a fun and friendly environment, we aim to empower our members to excel in the competitive field of computer science.
        </p>
      </div>
    </div>
  );
}

export default Mission;
