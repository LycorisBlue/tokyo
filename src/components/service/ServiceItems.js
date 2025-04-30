import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Développement Mobile",
    text: [
      "Je développe des applications mobiles performantes et intuitives avec Flutter et React Native, offrant une expérience utilisateur fluide sur iOS et Android avec une seule base de code.",
      "Mes applications mobiles sont conçues pour répondre aux besoins spécifiques du marché africain, avec une attention particulière à l'optimisation des performances même sur des appareils moins puissants et dans des zones à connectivité limitée.",
      "Chaque application que je développe intègre les meilleures pratiques en matière de sécurité, de performance et d'expérience utilisateur. Je m'assure que le résultat final soit non seulement fonctionnel mais également agréable à utiliser, avec une interface moderne et adaptée à votre public cible.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Développement Web Fullstack",
    text: [
      "Je conçois et développe des applications web complètes, du frontend au backend, en utilisant des technologies modernes comme React.js pour l'interface utilisateur et Node.js pour la logique serveur.",
      "Mes solutions web sont construites pour être évolutives, maintenables et sécurisées. J'utilise des architectures éprouvées et des pratiques de développement qui garantissent la pérennité de votre investissement technologique.",
      "Que ce soit pour un site vitrine, une plateforme e-commerce ou une application web complexe, j'adapte mon approche à vos besoins spécifiques et vous accompagne à chaque étape du processus de développement, de la conception initiale au déploiement final.",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Architecture Logicielle",
    text: [
      "En tant qu'architecte logiciel, je conçois des solutions robustes et évolutives qui répondent aux besoins actuels tout en anticipant les évolutions futures de votre entreprise.",
      "Je mets en place des architectures orientées services (SOA), des microservices ou des architectures monolithiques selon les besoins spécifiques de votre projet, en veillant toujours à l'efficacité et à la maintenabilité du système.",
      "Mon approche d'architecture logicielle prend en compte tous les aspects critiques : sécurité, évolutivité, performance, et facilité d'intégration avec vos systèmes existants ou futurs.",
    ],
    image: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    name: "Solutions Cloud & DevOps",
    text: [
      "J'implémente des solutions cloud optimisées sur AWS et d'autres plateformes, permettant à votre entreprise de bénéficier de la flexibilité, la scalabilité et la fiabilité du cloud computing.",
      "Mes services incluent la mise en place de pipelines CI/CD, l'automatisation des déploiements, et l'optimisation de vos infrastructures pour garantir des performances optimales et des coûts maîtrisés.",
      "Je vous accompagne dans la migration de vos applications vers le cloud ou dans l'adoption des meilleures pratiques DevOps pour améliorer l'efficacité de vos équipes de développement et opérations.",
    ],
    image: "assets/img/news/4.jpg",
  },
  {
    id: 5,
    name: "Digitalisation & Innovation",
    text: [
      "Je vous accompagne dans votre transformation digitale en concevant des solutions innovantes adaptées aux défis spécifiques du marché africain et aux besoins particuliers de votre entreprise.",
      "De la digitalisation des processus métier à la création de nouveaux services numériques, j'apporte mon expertise technique et ma créativité pour vous aider à tirer le meilleur parti des opportunités offertes par le numérique.",
      "Mon approche de l'innovation est toujours pragmatique et orientée résultats, avec un focus sur la création de valeur réelle pour votre entreprise et vos utilisateurs.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 6,
    name: "Formation & Mentorat",
    text: [
      "Fort de mon expérience et de ma passion pour le partage de connaissances, je propose des services de formation et de mentorat pour les équipes techniques et les jeunes développeurs.",
      "Mes formations couvrent un large éventail de sujets techniques, du développement mobile et web aux pratiques DevOps, en passant par l'architecture logicielle et les méthodologies agiles.",
      "En tant que mentor, j'accompagne les jeunes talents dans leur développement professionnel, partageant non seulement des compétences techniques mais aussi des conseils pratiques pour réussir dans l'écosystème tech en Afrique.",
    ],
    image: "assets/img/news/2.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>En savoir plus</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;