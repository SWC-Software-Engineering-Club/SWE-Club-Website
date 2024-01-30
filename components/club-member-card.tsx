import Image from "next/image";

interface ClubMemberCardProps {
  clubMemberContent: {
    image: string;
    name: string;
    role: string;
  }[];
}

const ClubMemberCard = ({ clubMemberContent }: ClubMemberCardProps) => {
  return (
    <>
      {clubMemberContent?.map((member) => (
        <div key={member.name} className="flex flex-col w-40 mb-16">
          <Image 
            src={member.image}
            alt="member photo"
            width={200}
            height={200}
            className="rounded-sm w-40 h-44"
          />
          <div className="font-medium mt-4">{member.name}</div>
          <div className="text-sm font-semibold text-neutral-500">{member.role}</div>
        </div>
      ))}
    </>
  );
};

export default ClubMemberCard;
