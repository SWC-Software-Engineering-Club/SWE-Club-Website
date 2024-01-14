import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

const clubTestimonials = [
    {
        name: "Luis",
        role: "Developer",
        testimonial: "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus"
    },
    {
        name: "Adrian",
        role: "Developer",
        testimonial: "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus"
    },
    {
        name: "Vinnie",
        role: "Developer",
        testimonial: "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus"
    },

]

const TestimonialsCard = () => {
  return (
    <>
    {clubTestimonials.map((member) => (
       <div key={member.name}>
      <Card className="justify-items-start">
        <CardHeader>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          <CardTitle>{member.name}</CardTitle>
          <CardDescription>{member.role}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="max-w-[400px]">{member.testimonial}</p>
        </CardContent>
      </Card>
    </div> 
    ))}
     
    </>
    
  );
};

export default TestimonialsCard;
