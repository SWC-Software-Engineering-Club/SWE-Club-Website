"use client";

import { Avatar, AvatarImage } from "./ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clubTestimonials = [
  {
    id: 1,
    name: "Luis",
    role: "Developer",
    testimonial:
      "Throughout my experience in the club, I've met a lot of friendly faces and people who share similar passions as I do.Not only have I learned how working in a team is like, but I have also learned a lot about how programming is used to solve problems.",
  },
  {
    id: 2,
    name: "Adrian",
    role: "Developer",
    testimonial:
      "During my time as part of the 2023 winter web development team I realized how shallow my knowledge of computer science as a whole was, This opened my eyes and allowed me to take my role as Project manager as serious as possible, acquiring as much experience as I could to further develop in the future. I am grateful for the team and for the opportunity",
  },
  {
    id: 3,
    name: "Vinnie",
    role: "Developer",
    testimonial:
      "My time with both the web development team and the club as a whole has been incredibly enriching. I learned so many new things and this club does a great job to replicate real industry programming practices while providing a safe atmosphere to experiment and grow yourself. This balance between real-world practices and a nurturing atmosphere is truly invaluable for anyone looking to pursue a career in software engineering.",
  },
  {
    id: 4,
    name: "Anthony",
    role: "Developer",
    testimonial:
      "This club has a ton of potential that I am excited to help cultivate with so many other passionate individuals. Being around like minded others makes being motivated much easier and longer lasting. Watching the website slowly unfold was neat to say the least and learning a whole new subject with a bunch of other helpful members was a great experience that reinforced the importance of soft skills.",
  },
  {
    id: 5,
    name: "Kelvin",
    role: "Developer",
    testimonial:
      "Working on the web dev team as a beginner with almost no knowledge on web development has been a knowledgeable experience that helped build my programming skills as well as my teamwork and communication skills.",
  },
];

const TestimonialsCard = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-xs md:max-w-lg lg:max-w-5xl"
      >
        <CarouselContent>
          {clubTestimonials.map((member) => (
            <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3">
              <div key={member.name}>
                <Card className="flex flex-col items-start justify-start text-left">
                  <CardHeader>
                    <Avatar className="mb-2">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-bold text-neutral-400">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="max-w-[400px]">{member.testimonial}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default TestimonialsCard;
