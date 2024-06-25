import TeamMemberCard from "./TeamMemberCard";

const ceoImage =
  "https://res.cloudinary.com/mahabub-bd/image/upload/v1718975313/colorbook/photo-1599566150163-29194dcaad36_oqd3su.jpg";
const managerImage1 =
  "https://res.cloudinary.com/mahabub-bd/image/upload/v1718975428/colorbook/photo-1507003211169-0a1dd7228f2d_iz4sit.jpg";
const managerImage2 =
  "https://res.cloudinary.com/mahabub-bd/image/upload/v1718975313/colorbook/photo-1599566150163-29194dcaad36_oqd3su.jpg";

const Team = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <TeamMemberCard
          name="John Doe"
          title="CEO"
          image={ceoImage}
          description="John has over 20 years of experience in the printing industry and leads our team with a commitment to excellence."
        />
        <TeamMemberCard
          name="Jane Smith"
          title="Manager"
          image={managerImage1}
          description="Jane specializes in project management and ensures that our clients' needs are met with precision and care."
        />
        <TeamMemberCard
          name="Bob Johnson"
          title="Manager"
          image={managerImage2}
          description="Bob brings a wealth of knowledge in logistics and operations, making sure that our services are delivered on time and within budget."
        />
      </div>
    </div>
  );
};

export default Team;
