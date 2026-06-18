function BlogGrid() {
  const blogs = [
    "Modern Living Room Ideas",
    "Luxury Bedroom Design",
    "Kitchen Design Trends",
    "Bathroom Styling Tips",
    "Minimalist Interior Design",
    "Office Interior Inspiration",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl overflow-hidden"
            >
              <div className="h-56 bg-gray-200"></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {blog}
                </h3>

                <button className="mt-4 text-orange-500">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BlogGrid;