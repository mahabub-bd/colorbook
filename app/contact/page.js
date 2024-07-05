import PageBannner from "@/components/common/PageBanner";
import ContactFeature from "@/components/contact/ContactFeature";
import ContactFormArea from "@/components/contact/ContactForm";
import ContactInfoArea from "@/components/contact/ContactInfoArea";
import Location from "@/components/contact/Location";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function ContactPage() {
  return (
    <div>
      <PageBannner pageName="Contact Us" />
      <ContactFeature />
      <ContactInfoArea />
      <Location />
      <ContactFormArea />
      <WhyChooseUs />
    </div>
  );
}
