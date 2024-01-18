const Mission = () => {
  return ( 
    <div id="mission-statement" className="flex flex-col items-center mt-24 mb-10 relative max-w-5xl">
      <img src="/icon-light.svg" alt="Mission Icon" className="hidden dark:block"/>
      <img src="/icon-dark.svg" alt="Mission Icon" className="dark:hidden"/>        
      <h3 className="my-6 text-4xl font-bold">Our Mission</h3>    
        <p className="text-neutral-800 dark:text-neutral-600 sm:text-xl md:text-1xl">
          SWE Club's mission is to foster a vibrant and inclusive community for computer science enthusiasts, providing opportunities to collaborate, learn, and gain practical experience in building real-world applications. 
          Through a fun and friendly environment, we aim to empower our members to excel in the competitive field of computer science.
        </p>
    </div>
  );
}

export default Mission;
