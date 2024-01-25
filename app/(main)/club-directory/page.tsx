import ClubMemberCard from "@/components/club-member-card"

// dummy club member content. best practice would be to move these business logic data to a constant file
const ClubMemberContent = [
  {
    image: "/portrait.jpg",
    name: "Alexander Codes",
    role: "Developer"
  },
  {
    image: "/portrait.jpg",
    name: "Alexander Codes",
    role: "Developer"
  },
  {
    image: "/portrait.jpg",
    name: "Alexander Codes",
    role: "Developer"
  },
  {
    image: "/portrait.jpg",
    name: "Alexander Codes",
    role: "Developer"
  },
  {
    image: "/portrait.jpg",
    name: "Alexander Codes",
    role: "Developer"
  },
  {
    image: "/portrait.jpg",
    name: "Alexander Codes",
    role: "Developer"
  },
]

export default function ClubDirectory()
{
  return (
    <div className='p-8 pt-28 gap-y-6 flex flex-col'>
      <div className="mt-12 text-sm font-extrabold text-neutral-500">Home / Club Directory</div>
      <div className="mb-12">
        <h3 className="text-3xl">Members of our club</h3>
      </div>
      <div className="flex gap-x-10 flex-wrap max-w-6xl">
        <ClubMemberCard clubMemberContent={ClubMemberContent}/>
      </div>
    </div>    
  )
}