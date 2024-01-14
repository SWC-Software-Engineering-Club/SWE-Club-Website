import TestimonialsCard from "./testimonials-card";

const Testimonials = () => {
  return (
    <div className="flex flex-col p-16">
      <div>
        <h3 className="text-xl">Club Testimonials</h3>
      </div>
      <div className="flex gap-4">
        <TestimonialsCard />
      </div>
      <div className="flex gap-4">
        {/* <TestimonialsCard /> */}
      </div>
    </div>
  );
};

export default Testimonials;
