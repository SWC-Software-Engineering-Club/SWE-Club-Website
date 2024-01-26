const ClubValuesCardInfo = [
  {
    title: "Skill Development",
    description:
      "Provide members with opportunities to enhance their technical skills through hands-on projects, workshops, and coding challenges.",
  },
  {
    title: "Collaboration and Networking",
    description:
      "Facilitate a platform for students to connect, collaborate, and learn from each other.",
  },
  {
    title: "Professional Growth",
    description:
      "Provide resources and support for members seeking internships, co-op opportunities, and full-time positions.",
  },
  {
    title: "Inclusivity and Diversity",
    description:
      "Foster an environment that welcomes students from all backgrounds, experiences, and skill levels, ensuring that everyone feels valued and supported.",
  },
];

const ClubValuesCard = () => {
  return (
    <>
      {ClubValuesCardInfo.map((member, index) => (
        <div key={index} className="flex flex-col md:flex-1">
          <div key={index} className="flex flex-col md:flex-row justify-between">
            <h2 className="text-lg md:text-2xl md:mr-64 text-left mb-8 md:m-0 text-neutral-300">{member.title}</h2>
            <p className="w-full md:w-1/2 text-md md:text-2xl text-left md:text-right text-neutral-500 dark:text-neutral-600">
              {member.description}
            </p>
          </div>
          <hr className="border-1 my-10 md:my-36 w-auto"></hr>
        </div>
      ))}
    </>
  );
};

export default ClubValuesCard;
