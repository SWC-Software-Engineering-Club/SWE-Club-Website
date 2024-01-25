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
    name: "Luis",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
  },
  {
    name: "Adrian",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
  },
  {
    name: "Vinnie",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
  },
  {
    name: "Anthony",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
  },
  {
    name: "Kelvin",
    role: "Developer",
    testimonial:
      "Et obcaecati dignissimos a molestias minus eum labore laudantium aut atque nesciunt qui quasi galisum sit necessitatibus possimus",
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
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
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
