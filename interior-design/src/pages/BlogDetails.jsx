import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogs } from "./Blog";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="bg-orange-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[450px] object-cover rounded-[32px]"
          />

          <div className="mt-8">
            <span className="inline-block px-4 py-2 bg-orange-100 text-amber-700 rounded-full text-sm font-semibold">
              {blog.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-6">
              {blog.title}
            </h1>

            <p className="text-stone-600 text-lg leading-relaxed mt-6">
              {blog.desc}
            </p>

            <div className="mt-8 space-y-4 text-stone-700 leading-8">
              <p>
                This article explores premium interior concepts,
                practical styling tips, and design inspiration
                to help you create timeless and elegant spaces.
              </p>

              <p>
                Learn how colors, textures, furniture selection,
                and lighting can transform your home into a
                luxurious environment.
              </p>

              <p>
                Our experts share insights from real projects and
                current trends to help you make confident design
                decisions.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlogDetails;