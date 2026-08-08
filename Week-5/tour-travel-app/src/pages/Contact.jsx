import Hero from "../components/Hero/Hero";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {
  const heroData = {
    heading: "Contact Us",
    text: "Get in touch with our team",
    buttonText: "Send Message",
  };

  return (
    <>
      <Hero heroData={heroData} />
      <ContactForm />
    </>
  );
}

export default Contact;
