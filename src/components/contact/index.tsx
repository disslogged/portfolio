import emailjs from "@emailjs/browser";
import { BsSendFill } from "react-icons/bs";
import Section from "../../ui/Section";
import { FormEvent, useRef, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_3pinutq", "template_qmk5xu6", formRef.current!, {
        publicKey: "RPUH8_IU4R_EXEBe1",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        error => {
          alert(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Section id="contact">
      <h2 className="sectionTitle">Contact</h2>
      <p className="text-lightGray text-[1rem] text-center mb-4">
        please contact me directly at{" "}
        <a href="fardynmadany@gmail.com" className="text-black underline">
          fardynmadany@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="flex flex-col gap-4 text-xl"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          className="rounded bg-white py-1 px-4 text-lg outline-none placeholder:text-sm focus:ring-2 focus:ring-lightGray"
          placeholder="Your Name"
          name="user_name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          className="rounded bg-white py-1 px-4 text-lg outline-none placeholder:text-sm focus:ring-2 focus:ring-lightGray"
          placeholder="Your Email"
          name="user_email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          cols={40}
          rows={7}
          className="rounded bg-white placeholder:text-sm py-2 px-4 outline-none focus:ring-2 focus:ring-lightGray"
          placeholder="Your message ..."
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center gap-2 text-lg text-lightGray border border-lightGray w-max py-1 px-4 rounded hover:text-black hover:border-black transition"
        >
          Submit <BsSendFill />
        </button>
      </form>
    </Section>
  );
};

export default Contact;
