import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/nautilus.jpg",
    title: "Nautilus",
    text: [
      "Nautilus est une solution innovante pour la gestion dématérialisée des absences scolaires, conçue pour les établissements, les élèves/étudiants et leurs parents. Ce projet vise à simplifier, moderniser et rendre plus efficace la gestion des absences scolaires, en éliminant l'utilisation du papier et des tableurs.",
      "L'impact est triple: Pour les établissements, Nautilus augmente la productivité grâce à une gestion simplifiée des absences, permettant au personnel administratif de se concentrer sur d'autres tâches importantes. Pour les élèves/étudiants, elle améliore la traçabilité et la précision dans le suivi des absences, offrant une meilleure transparence. Pour les parents, elle offre un accès facile et rapide aux informations sur les absences de leurs enfants, favorisant une meilleure communication.",
      "Sur le plan environnemental, Nautilus contribue à la réduction de l'empreinte écologique des établissements scolaires en diminuant considérablement l'utilisation du papier. En numérisant la gestion des absences, cette solution favorise des pratiques plus durables et respectueuses de l'environnement, tout en créant une meilleure synergie entre établissements, élèves et parents."
    ],
    client: "Secteur Éducatif",
    date: "Avril 2025",
    category: "Éducation / Digitalisation",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/nautilus.jpg",
    images: ["assets/img/portfolio/nautilus_2.jpg", "assets/img/portfolio/nautilus_3.jpg"],
  },
  {
    id: 1,
    thumbnail: "assets/img/portfolio/edunova.jpg",
    title: "EduNova",
    text: [
      "EduNova est une plateforme éducative révolutionnaire conçue pour les élèves du secondaire (collège et lycée) en Côte d'Ivoire. En remplaçant les documents papier par des cours et exercices adaptés à chaque élève grâce à l'intelligence artificielle (IA), cette solution répond aux défis d'accès, de personnalisation et d'engagement dans le système éducatif ivoirien.",
      "La plateforme se distingue par cinq forces majeures: 1) Personnalisation grâce à l'IA qui adapte cours et exercices au niveau de chaque élève, 2) Accessibilité universelle avec une version disponible hors ligne et en langues locales, 3) Validation et reconnaissance via des mini-examens trimestriels et des quiz nationaux, 4) Engagement communautaire avec des interfaces pour parents et COGES, et 5) Innovation gratuite incluant des cours d'anglais natifs sans abonnement.",
      "Ce projet s'attaque directement aux problèmes de manque de personnalisation, d'inégalités d'accès, de progression floue, de déconnexion communautaire et de monotonie pédagogique dans l'éducation secondaire en Côte d'Ivoire. Une solution made in Côte d'Ivoire, alignée sur les priorités nationales du PND 2021-2025 et la Stratégie de Digitalisation."
    ],
    client: "Projet personnel",
    date: "Février 2025",
    category: "Education / IA",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/edunova.jpg",
    images: ["assets/img/portfolio/edunova_2.jpg", "assets/img/portfolio/edunova_3.jpg"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/railtrack.jpg",
    title: "RailTrack",
    text: [
      "RailTrack est une solution innovante de suivi et gestion pour le réseau ferroviaire de la Côte d'Ivoire, développée en collaboration avec SITARAIL. Cette plateforme combine IoT, analyse de données et interfaces intuitives pour optimiser les opérations ferroviaires.",
      "La solution permet le suivi en temps réel des trains, la maintenance prédictive des infrastructures, et une gestion optimisée du trafic. Grâce à des capteurs installés sur les voies et les trains, RailTrack collecte des données cruciales qui sont analysées par des algorithmes avancés pour détecter les anomalies avant qu'elles ne deviennent problématiques.",
      "Ce projet est né suite au Prix coup de cœur d'AGL obtenu lors du Hackathon PangaeaX 2024, qui m'a permis d'intégrer le centre d'incubation Yiri du groupe AGL. En développant ce business case pour SITARAIL, j'ai démontré ma capacité à traduire des concepts innovants en solutions commerciales viables pour des acteurs majeurs de l'infrastructure nationale."
    ],
    client: "SITARAIL / Groupe AGL",
    date: "Mars 2024",
    category: "IoT / Infrastructure",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/railtrack.jpg",
    images: ["assets/img/portfolio/railtrack_2.jpg", "assets/img/portfolio/railtrack_3.jpg"],
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/arise.jpg",
    title: "Arise",
    text: [
      "Arise est un système de digitalisation des listes de présence pour les réunions afin d'optimiser les coûts liés à l'impression et à l'achat de papier, réduire l'empreinte carbone et augmenter l'efficacité lors des réunions.",
      "Cette solution numérique transforme la façon dont les organisations gèrent leur présence lors des réunions, en remplaçant les méthodes traditionnelles basées sur le papier par une approche digitale plus efficace et respectueuse de l'environnement.",
      "L'application a été développée pour l'Agence Nationale du Service Universel des Télécommunications/TIC de Côte d'Ivoire, démontrant sa pertinence et son utilité dans un contexte institutionnel."
    ],
    client: "ANSUT - Agence Nationale du Service Universel des Télécommunications",
    date: "Juin 2024",
    category: "Application Web/Mobile",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/arise.jpg",
    images: ["assets/img/portfolio/arise_2.jpg", "assets/img/portfolio/arise_3.jpg"],
  },
  {
    id: 4,
    thumbnail: "assets/img/portfolio/smilepay.jpg",
    title: "SMILE PAY",
    text: [
      "SMILE PAY est une plateforme innovante qui permet à une entité de créer son propre service de transaction de façon simple et rapide. Cette solution est particulièrement adaptée aux entreprises souhaitant implémenter une économie circulaire interne.",
      "Un cas d'usage typique : Une entreprise propose des services internes comme des repas et boissons à ses employés. SMILE PAY permet aux employés d'acquérir une monnaie virtuelle pour acheter ces services, créant ainsi un écosystème économique interne efficace et transparent.",
      "Développé pour Smart Technology à Abidjan, ce projet illustre parfaitement ma capacité à concevoir des solutions fintech innovantes adaptées aux besoins spécifiques du marché africain."
    ],
    client: "Smart Technology",
    date: "Avril 2024",
    category: "Fintech",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/smilepay.jpg",
    images: ["assets/img/portfolio/smilepay_2.jpg", "assets/img/portfolio/smilepay_3.jpg"],
  },
  {
    id: 5,
    thumbnail: "assets/img/portfolio/floodguard.jpg",
    title: "FloodGuard",
    text: [
      "FloodGuard est une plateforme de surveillance avancée des zones humides et de prévention des inondations, conçue pour contribuer à la création de communautés plus sûres face aux risques climatiques.",
      "Cette solution innovante combine des technologies de surveillance en temps réel avec des algorithmes d'analyse pour fournir des alertes précoces et des recommandations adaptées, permettant aux communautés et aux autorités de mieux gérer les risques d'inondation.",
      "Développé pour MEDEV à Abidjan, ce projet démontre mon engagement à utiliser la technologie pour résoudre des problèmes environnementaux cruciaux en Afrique, contribuant ainsi à la résilience des communautés face au changement climatique."
    ],
    client: "MEDEV",
    date: "Mars - Avril 2024",
    category: "Solution Environnementale",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/floodguard.jpg",
    images: ["assets/img/portfolio/floodguard_2.jpg", "assets/img/portfolio/floodguard_3.jpg"],
  },
  {
    id: 6,
    thumbnail: "assets/img/portfolio/macoop.jpg",
    title: "MaCoop",
    text: [
      "MaCoop est une application qui révolutionne la gestion des coopératives en Côte d'Ivoire. Elle permet à l'utilisateur autorisé de créer et gérer entièrement une coopérative, qui représente l'unité organisationnelle de plus haut niveau abritant l'ensemble des informations.",
      "Cette solution digitale simplifie considérablement les processus administratifs et opérationnels des coopératives, offrant ainsi une meilleure transparence, efficacité et traçabilité dans leur gestion quotidienne.",
      "Développé pour Tuloss Solution à Abidjan, ce projet illustre ma capacité à créer des solutions adaptées aux besoins spécifiques du secteur agricole et coopératif en Afrique de l'Ouest."
    ],
    client: "Tuloss Solution",
    date: "Février - Mai 2024",
    category: "Gestion Agricole",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/macoop.jpg",
    images: ["assets/img/portfolio/macoop_2.jpg", "assets/img/portfolio/macoop_3.jpg"],
  },
  {
    id: 7,
    thumbnail: "assets/img/portfolio/fanzone.jpg",
    title: "ANSUT DIGITAL FANZONE",
    text: [
      "L'application ANSUT DIGITAL FANZONE a été développée spécialement pour la Coupe d'Afrique des Nations (CAN) organisée par la Côte d'Ivoire en 2023-2024, offrant une expérience numérique enrichie aux supporters.",
      "Cette plateforme combinait des informations en temps réel sur les matchs, les équipes et les stades, avec des fonctionnalités interactives permettant aux fans de partager leur enthousiasme et de rester connectés tout au long de la compétition.",
      "Ce projet, réalisé pour l'Agence Nationale du Service Universel des Télécommunications (ANSUT), illustre parfaitement ma capacité à développer des applications événementielles à fort impact, contribuant au rayonnement technologique de la Côte d'Ivoire lors d'événements internationaux majeurs."
    ],
    client: "ANSUT",
    date: "Décembre 2023 - Janvier 2024",
    category: "Application Mobile Événementielle",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/fanzone.jpg",
    images: ["assets/img/portfolio/fanzone_2.jpg", "assets/img/portfolio/fanzone_3.jpg"],
  },
  {
    id: 8,
    thumbnail: "assets/img/portfolio/lysgestion.jpg",
    title: "LYS Gestion",
    text: [
      "LYS Gestion est une plateforme de gestion des commandes qui simplifie la relation client et optimise les processus commerciaux. Du côté client, l'application permet de soumettre facilement des commandes, de suivre leur statut et de communiquer efficacement avec l'entreprise.",
      "Pour le back-office, LYS Gestion offre un système complet de traitement des commandes permettant d'accepter ou refuser les requêtes des clients, et d'envoyer des devis personnalisés, améliorant ainsi significativement l'efficacité opérationnelle.",
      "Ce projet, développé pendant ma formation à SIMPLON.CO, démontre ma maîtrise des solutions de gestion d'entreprise et ma capacité à concevoir des interfaces utilisateur intuitives et fonctionnelles."
    ],
    client: "SIMPLON.CO (Projet de formation)",
    date: "Novembre - Décembre 2023",
    category: "Application Web Gestion",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-github-circled",
        link: "https://github.com/LycorisBlue",
      },
      {
        id: 3,
        iconName: "icon-linkedin-squared",
        link: "www.linkedin.com/in/fulgence-medi-19b6b1279",
      }
    ],
    bigImage: "assets/img/portfolio/lysgestion.jpg",
    images: ["assets/img/portfolio/lysgestion_2.jpg", "assets/img/portfolio/lysgestion_3.jpg"],
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".list", {
        itemSelector: ".item__",
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Mes Projets"}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      Tous
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("mobile")}
                    >
                      Applications Mobiles
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("web")}
                    >
                      Applications Web
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("fintech")}
                    >
                      Fintech
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("gestion")}
                    >
                      Gestion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="list w-full h-auto clear-both float-left">
            <ul className="ml-[-40px] list-none flex flex-wrap">
              {detailData.map((project) => (
                <li className={`mb-[40px] w-1/3 pl-[40px] item__ ${project.category.toLowerCase().replace(/ /g, "").replace(/\//g, " ")}`} key={project.id}>
                  <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
                    <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                      {project.id <= 9 ? `0${project.id}` : project.id}
                    </span>
                    <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                      {project.title}
                    </h3>
                    <p className="text">{project.text[0].slice(0, 70)}...</p>
                    <div className="tokyo_tm_read_more">
                      <a
                        href="#"
                        onClick={() => {
                          setPortfolioDetailsModal(project);
                          modalToggle(true);
                        }}
                      >
                        <span>Voir plus</span>
                      </a>
                    </div>
                    <a
                      className="tokyo_tm_full_link"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(project);
                        modalToggle(true);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;