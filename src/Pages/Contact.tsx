import Navbar from "../HomePage/Navbar";
import ContactHeader from "../ContactComponents/ContactHeader";
import ContactForm from "../ContactComponents/ContactForm";
import FooterSection from "../AboutComponents/FooterSection";

const Contact = () => {
  return (
    <>
      <Navbar activePage="contact" />
      <ContactHeader />
      <ContactForm />
      <FooterSection />
    </>
  );
};

export default Contact;