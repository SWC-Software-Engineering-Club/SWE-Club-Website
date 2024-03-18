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
      "Hello, my name is Luis Hernandez, my ambition drives me forward in the field of software engineering, particularly in game development. Passion and my pursuit of development and software in general, I am ambitious in every project I undertake. I also have tenacity and resilience in facing challenges head-on. I leverage productive qualities and a creative mindset to contribute meaningfully to any team. I believe I am poised to make a significant impact in the world of software engineering and game development and that is my main ambition in computer science.",
  },
  {
    id: 2,
    name: "Adrian",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
  },
  {
    id: 3,
    name: "Vinnie",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
  },
  {
    id: 4,
    name: "Anthony",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
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
