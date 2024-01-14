import TestimonialsCard from "./testimonials-card";

const Testimonials = () => {
  return (
    <div className="flex flex-col p-16">
      <div className="p-12">
        <h3 className="text-3xl font-medium">Club Testimonials</h3>
      </div>
      <div className="flex gap-9">
        <TestimonialsCard />
      </div>
      <div className="flex gap-4">
        {/* <TestimonialsCard /> */}
      </div>
    </div>
  );
};

export default Testimonials;
