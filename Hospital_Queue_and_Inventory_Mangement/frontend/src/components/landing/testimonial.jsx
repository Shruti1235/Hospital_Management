export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "HospitalQ made hospital visits so much easier! Quick and efficient service.",
    },
    {
      name: "Jane Smith",
      feedback: "Amazing platform! Reduced waiting times significantly.",
    },
    {
      name: "Michael Lee",
      feedback: "A must-have for any hospital. The bed management system is top-notch!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold rounded-full">
                {testimonial.name.substring(0,2)}
              </div>
              <div>
                <div className="text-gray-900 font-medium">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">Content Creator</div>
              </div>
            </div>
            <div className="flex text-blue-500 text-xl">★★★★★</div>
            <p className="text-gray-700">
              {testimonial.feedback}
            </p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}