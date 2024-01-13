const Mission = () => {
  return ( 
    <div className="max-w-3xl space-y-7 flex flex-col items-center mb-20 mt-20">
      <img src="/mission-icon_dark.svg" alt="Mission Icon" style={{ width: '10%' }} />      
      <h1 className="text-3xl sm:text-5xl md:text-3xl font-bold">
        Our Mission
      </h1>
      <h3 className="text-neutral-400 sm:text-xl md:text-1xl font-small">
        SWE Club's mission is to foster a vibrant and inclusive community for computer science enthusiasts, providing opportunities to collaborate, learn, and gain practical experience in building real-world applications. 
        Through a fun and friendly environment, we aim to empower our members to excel in the competitive field of computer science.
      </h3>
    </div>
  );
}

export default Mission;