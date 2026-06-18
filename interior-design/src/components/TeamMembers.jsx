function TeamMembers() {
  const team = [
    "Lead Designer",
    "Architect",
    "Project Manager",
    "Interior Stylist",
    "3D Artist",
    "Site Supervisor",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-8 text-center"
            >
              <div className="h-48 bg-gray-200 rounded-lg"></div>

              <h3 className="mt-6 text-2xl font-bold">
                {member}
              </h3>

              <p className="text-gray-500 mt-2">
                Interior Studio Team
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TeamMembers;