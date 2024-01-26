import TestimonialsCard from "./testimonials-card";

const Testimonials = () => {
  return (
    <div className="flex flex-col w-4/5">
      <div className="p-12">
        <h3 className="text-3xl font-medium">Club Testimonials</h3>
      </div>
      <div className="m-auto w-5/6">
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Testimonials;
