function TestimonialsList() {
  const reviews = [
    "Amazing experience and beautiful interiors.",
    "Professional team and timely delivery.",
    "Highly recommended for luxury projects.",
    "Excellent communication and quality work.",
    "Loved every detail of the final design.",
    "Worth every penny."
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 shadow-lg rounded-xl"
            >
              <p>{review}</p>

              <h4 className="mt-6 font-bold">
                ★★★★★
              </h4>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TestimonialsList;