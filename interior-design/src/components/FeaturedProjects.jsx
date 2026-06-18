function FeaturedProjects() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Some of our latest interior designs
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            className="rounded-2xl h-96 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156"
            className="rounded-2xl h-96 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
            className="rounded-2xl h-96 object-cover w-full"
          />

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;