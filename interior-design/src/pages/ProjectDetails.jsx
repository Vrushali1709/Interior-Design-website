import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projectsData";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-orange-50">
          <h1 className="text-3xl font-serif text-stone-900">
            Project not found
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-orange-50 min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-amber-600 font-medium hover:text-amber-700"
          >
            ← Back to Portfolio
          </button>

          <p className="text-amber-600 uppercase tracking-[4px] text-sm font-semibold">
            {project.type}
          </p>

          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mt-4">
            {project.title}
          </h1>

          <p className="text-stone-600 mt-6 max-w-3xl leading-relaxed">
            {project.desc}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div>
              <img
                src={project.before}
                alt="Before"
                className="rounded-[32px] h-[450px] w-full object-cover"
              />

              <p className="mt-4 text-center text-stone-500 uppercase tracking-wider">
                Before
              </p>
            </div>

            <div>
              <img
                src={project.after}
                alt="After"
                className="rounded-[32px] h-[450px] w-full object-cover"
              />

              <p className="mt-4 text-center text-amber-600 uppercase tracking-wider">
                After
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white rounded-3xl p-6 border border-orange-100">
              <p className="text-stone-400 uppercase text-xs">
                Area
              </p>

              <h3 className="text-2xl font-serif mt-2">
                {project.area}
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-orange-100">
              <p className="text-stone-400 uppercase text-xs">
                Budget
              </p>

              <h3 className="text-2xl font-serif mt-2 text-amber-600">
                {project.budget}
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-orange-100">
              <p className="text-stone-400 uppercase text-xs">
                Duration
              </p>

              <h3 className="text-2xl font-serif mt-2">
                {project.duration}
              </h3>
            </div>

          </div>

          <div className="mt-12 bg-white rounded-3xl p-8 border border-orange-100">
            <h2 className="text-3xl font-serif text-stone-900 mb-6">
              Project Highlights
            </h2>

            <ul className="space-y-3">
              {project.highlights.map((item, index) => (
                <li key={index} className="text-stone-600">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProjectDetails;