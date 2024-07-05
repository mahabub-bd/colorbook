import PageBanner from "@/components/common/PageBanner";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/testimonial/TestimonialSection";

export default function ReviewPage() {
  return (
    <div>
      <PageBanner pageName="Review" />
      <Testimonials />
      <WhyChooseUs />
    </div>
  );
}
