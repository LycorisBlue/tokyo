import emailjs from "emailjs-com";
import { useState } from "react";
const ContactForm = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_id", // remplacer par votre service ID EmailJS
          "template_id", // remplacer par votre template ID EmailJS
          mailData,
          "public_key" // remplacer par votre clé publique EmailJS
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="fields w-full float-left clear-both h-auto">
      <div className="tokyo_tm_contact_title">
        <h3 className="text-[20px] font-bold mb-[25px]">Me contacter</h3>
        <p className="mb-[25px]">
          N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question concernant mes services. Je vous répondrai dans les meilleurs délais.
        </p>
        <div className="tokyo_tm_short_info w-full h-auto clear-both float-left mb-[40px]">
          <div className="left">
            <div className="tokyo_tm_info">
              <ul className="m-0 list-none">
                <li className="m-0 mb-[10px]">
                  <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                    Email:
                  </span>
                  <span>
                    <a
                      className="text-[#767676] transition-all duration-300 hover:text-black"
                      href="mailto:lycorisblue99@gmail.com"
                    >
                      lycorisblue99@gmail.com
                    </a>
                  </span>
                </li>
                <li className="m-0 mb-[10px]">
                  <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                    Téléphone:
                  </span>
                  <span>
                    <a
                      className="text-[#767676] transition-all duration-300 hover:text-black"
                      href="tel:+225 05 75 63 5710"
                    >
                      +225 05 75 63 5710
                    </a>
                  </span>
                </li>
                <li className="m-0">
                  <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                    Adresse:
                  </span>
                  <span>Abidjan, Cocody, Côte d'Ivoire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <form
        className="contact_form"
        id="contact_form"
        onSubmit={(e) => onSubmit(e)}
      >
        <div
          className={error ? "empty_notice" : "returnmessage"}
          style={{ display: error == null ? "none" : "block" }}
        >
          <span>
            {error
              ? "Veuillez remplir tous les champs requis"
              : "Votre message a bien été envoyé. Je vous répondrai dès que possible."}
          </span>
        </div>
        <div className="first w-full float-left">
          <ul className="list-none">
            <li className="w-full mb-[30px] float-left">
              <input
                name="name"
                onChange={(e) => onChange(e)}
                value={name}
                id="name"
                type="text"
                placeholder="Nom"
              />
            </li>
            <li className="w-full mb-[30px] float-left">
              <input
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
                id="email"
                type="email"
                placeholder="Email"
              />
            </li>
          </ul>
        </div>
        <div className="last">
          <textarea
            name="message"
            onChange={(e) => onChange(e)}
            value={message}
            id="message"
            placeholder="Message"
          />
        </div>
        <div className="tokyo_tm_button" data-position="left">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;