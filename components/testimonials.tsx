import TestimonialsCard from "./testimonials-card";

const Testimonials = () => {
  return (
    <div className="flex flex-col m-16">
      <div className="p-12">
        <h3 className="text-3xl font-medium">Club Testimonials</h3>
      </div>
      <div>
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Testimonials;
