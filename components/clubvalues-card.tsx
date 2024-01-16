const ClubValuesCardInfo = [
  {
    title: "Skill Development",
    description: "Provide members with opportunities to enhance their technical skills through hands-on projects, workshops, and coding challenges.",
  },
  {
    title: "Collaboration and Networking",
    description: "Facilitate a platform for students to connect, collaborate, and learn from each other.",
  },
  {
    title: "Professional Growth",
    description: "Provide resources and support for members seeking internships, co-op opportunities, and full-time positions.",
  },
  {
    title: "Inclusivity and Diversity",
    description: "Foster an environment that welcomes students from all backgrounds, experiences, and skill levels, ensuring that everyone feels valued and supported.",
  },
];

const ClubValuesCard = () => {
  return (
    <>
      {ClubValuesCardInfo.map((member, index) => (    
        <div key={index} className="flex flex-col">
          <div key={index} className="flex justify-between">
          <h2 className="text-2xl text-left">{member.title}</h2>
          <p className="text-2xl text-right ml-96 text-neutral-800 dark:text-neutral-600">{member.description}</p>
          </div>
          <hr className="border-2 my-36 max-w-6xl w-screen"  style={{ maxWidth: "96rem" }}></hr>
        </div>
      ))}
    </>
  );
};

export default ClubValuesCard;