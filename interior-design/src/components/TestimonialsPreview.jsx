function TestimonialsPreview() {
  const reviews = [
    {
      name: "Rahul Shah",
      review:
        "Amazing interior work. The team transformed our home beautifully.",
    },
    {
      name: "Priya Patel",
      review:
        "Professional designers and excellent execution from start to finish.",
    },
    {
      name: "Amit Mehta",
      review:
        "Highly recommended for luxury interior projects.",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-gray-600">
                "{item.review}"
              </p>

              <h4 className="mt-6 font-bold text-xl">
                {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TestimonialsPreview;