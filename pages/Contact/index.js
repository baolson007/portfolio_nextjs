import ContactForm from "../../components/ContactForm";
import { useRouter } from "next/router";

function Contact() {
  const router = useRouter();

  ///////
  //TO DO
  // - TRY/CATCH
  async function contactMeHandler(enteredData) {
    const response = await fetch("/api/ContactMe", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
    router.push("/");
  }

  return <ContactForm onContactMe={contactMeHandler} />;
}

export default Contact;
