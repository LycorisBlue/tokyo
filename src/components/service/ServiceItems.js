import { TokyoContext } from "@/src/Context";
import { useContext, useEffect, useState } from "react";

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
  const { setServiceModal, modalToggle } = useContext(TokyoContext);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Fonction pour définir la largeur des éléments selon la taille de l'écran
  const getItemWidth = () => {
    if (windowWidth < 768) {
      return '100%'; // Mobile: 1 colonne
    } else if (windowWidth < 1024) {
      return '50%';  // Tablette: 2 colonnes
    } else {
      return '33.333%'; // Desktop: 3 colonnes
    }
  };

  // Mettre à jour la largeur de la fenêtre lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="list" style={{
      width: '100%',
      minHeight: '500px', // Hauteur minimale pour le conteneur principal
      height: 'auto',
      display: 'block',
      position: 'relative',
      overflow: 'visible' // Assurez-vous que le contenu ne soit pas coupé
    }}>
      <ul className="service-items-list" style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        marginLeft: '-40px',
        minHeight: '450px', // Hauteur minimale pour la liste
        height: 'auto',
        position: 'relative',
        overflow: 'visible' // Assurez-vous que le contenu ne soit pas coupé
      }}>
        {services.map((service) => (
          <li
            className="service-item mb-[40px] pl-[40px]"
            key={service.id}
            style={{
              width: getItemWidth(),
              minHeight: '300px', // Hauteur minimale pour chaque élément
              height: 'auto',
              marginBottom: '40px',
              paddingLeft: '40px',
              boxSizing: 'border-box',
              display: 'block',
              position: 'relative',
              overflow: 'visible' // Assurez-vous que le contenu ne soit pas coupé
            }}
          >
            <div
              className="service-item-inner"
              style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                minHeight: '250px', // Hauteur minimale pour chaque carte
                height: 'auto',
                backgroundColor: 'white',
                padding: '45px 30px 40px 30px',
                border: '1px solid rgba(0,0,0,.1)',
                borderRadius: '5px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                overflow: 'visible' // Assurez-vous que le contenu ne soit pas coupé
              }}
            >
              <span
                className="number"
                style={{
                  display: 'inline-block',
                  marginBottom: '25px',
                  width: '60px',
                  height: '60px',
                  lineHeight: '60px',
                  textAlign: 'center',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0,0,0,.03)',
                  fontWeight: 'bold',
                  color: 'black'
                }}
              >
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3
                className="title"
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: '18px',
                  marginBottom: '15px',
                  minHeight: '27px', // Hauteur minimale pour le titre
                  height: 'auto'
                }}
              >
                {service.name}
              </h3>
              <p
                className="description"
                style={{
                  marginBottom: '15px',
                  minHeight: '60px', // Hauteur minimale pour la description
                  height: 'auto'
                }}
              >
                {service.text[0].slice(0, 70)}...
              </p>
              <div
                className="read-more-link"
                style={{
                  minHeight: '24px', // Hauteur minimale pour le lien
                  height: 'auto'
                }}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                  style={{
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <span>En savoir plus</span>
                </a>
              </div>
              <a
                className="full-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  modalToggle(true);
                  setServiceModal(service);
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 5
                }}
              />
              {/* Image cachée pour le popup */}
              <img
                className="popup-image"
                src={service.image}
                alt="image"
                style={{
                  opacity: 0,
                  visibility: 'hidden',
                  position: 'absolute',
                  zIndex: -111
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceItems;