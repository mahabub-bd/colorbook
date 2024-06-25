import ColorbookAbout from "@/components/about/About";
import Goal from "@/components/about/Goal";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import PageBannner from "@/components/common/PageBanner";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function AboutPage() {
  return (
    <div>
      <PageBannner pageName="About Us" />
      <ColorbookAbout />
      <Values />
      <Goal />
      <Team />
      <WhyChooseUs />
    </div>
  );
}
