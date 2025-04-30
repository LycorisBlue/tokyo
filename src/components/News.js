import { useContext } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const news = [
  {
    id: 1,
    title: "Prix coup de cœur d'AGL au Hackathon PangaeaX 2024",
    image: "assets/img/news/hackathon_agl.jpg",
    author: "Fulgence G. MEDI",
    date: "Mars 2024",
    introduction: "J'ai eu l'honneur de recevoir le Prix coup de cœur d'AGL lors du prestigieux Hackathon PangaeaX 2024, une reconnaissance qui a ouvert les portes du centre d'incubation Yiri du groupe AGL.",
    mainContent: "Ce prix témoigne non seulement de la qualité technique de notre solution, mais aussi de son potentiel d'innovation et de sa pertinence pour le marché africain. La reconnaissance par un groupe aussi respecté qu'AGL est une validation importante de notre approche et de notre vision.",
    quote: "L'innovation ne naît pas seulement d'une idée brillante, mais de la capacité à transformer cette idée en solution concrète qui répond à des besoins réels. C'est ce que nous avons cherché à faire lors de ce hackathon.",
    details: "Suite à cette distinction, mon équipe et moi avons développé un business case pour SITARAIL, démontrant ainsi notre capacité à traduire des concepts innovants en solutions commerciales viables. Cette expérience a considérablement renforcé ma compréhension des enjeux business liés au développement technologique.",
    conclusion: "Cette reconnaissance s'inscrit parfaitement dans ma vision d'utiliser la technologie comme levier de développement pour l'Afrique, en créant des solutions adaptées à nos contextes spécifiques et capables de résoudre des problématiques locales."
  },
  {
    id: 2,
    title: "Lancement réussi de la plateforme SMILE PAY pour Smart Technology",
    image: "assets/img/news/smilepay_launch.jpg",
    author: "Fulgence G. MEDI",
    date: "Avril 2024",
    introduction: "Avril 2024 a marqué le lancement officiel de SMILE PAY, une plateforme innovante de services de transaction que j'ai développée pour Smart Technology à Abidjan.",
    mainContent: "SMILE PAY représente une avancée significative dans le domaine des solutions financières digitales en Côte d'Ivoire. Cette plateforme permet aux entreprises de créer leur propre écosystème financier interne, facilitant ainsi les transactions entre l'entreprise et ses employés.",
    quote: "Avec SMILE PAY, nous avons voulu démontrer que les solutions fintech peuvent être à la fois sophistiquées et parfaitement adaptées aux réalités africaines, répondant ainsi à des besoins spécifiques que les solutions internationales ne couvrent pas toujours.",
    details: "Le développement de SMILE PAY a impliqué la mise en œuvre de technologies avancées en matière de sécurité des transactions et d'expérience utilisateur, garantissant ainsi une solution robuste, fiable et agréable à utiliser pour tous les acteurs concernés.",
    conclusion: "Ce projet illustre parfaitement ma conviction que l'innovation technologique en Afrique doit s'ancrer dans une compréhension profonde des contextes locaux pour apporter une valeur réelle et durable."
  },
  {
    id: 3,
    title: "Reconnaissance au Hackathon de l'ANSUT: Prix de la COLLABORATION",
    image: "assets/img/news/ansut_award.jpg",
    author: "Fulgence G. MEDI",
    date: "Février 2024",
    introduction: "J'ai eu l'honneur de recevoir le Prix de la COLLABORATION lors du Hackathon organisé par l'Agence Nationale du Service Universel des Télécommunications (ANSUT), une distinction qui met en lumière non seulement mes compétences techniques mais aussi mes aptitudes humaines.",
    mainContent: "Cette reconnaissance souligne l'importance que j'accorde au travail d'équipe et à la communication dans le développement de solutions technologiques. La complexité des défis actuels exige une approche collaborative où différentes expertises se complètent pour créer des solutions vraiment pertinentes.",
    quote: "La technologie est avant tout une aventure humaine. Les meilleures solutions naissent souvent de la rencontre entre différentes perspectives et expertises, harmonisées par une collaboration efficace et respectueuse.",
    details: "Ce prix reflète ma conviction profonde que l'innovation n'est pas seulement une question de code ou d'algorithmes, mais aussi de capacité à fédérer, à communiquer et à faire avancer collectivement des projets complexes.",
    conclusion: "Je suis particulièrement fier de cette reconnaissance car elle valide mon approche du développement technologique comme un processus profondément collaboratif et humain."
  },
  {
    id: 4,
    title: "Contribution à la résilience climatique: 3ème Prix au Hackathon sur les innovations géospatiales",
    image: "assets/img/news/climate_innovation.jpg",
    author: "Fulgence G. MEDI",
    date: "Janvier 2024",
    introduction: "J'ai eu le privilège de remporter le 3ème Prix au Hackathon sur les \"Innovations géospatiales pour la gestion durable de l'espace marin et côtier en Côte d'Ivoire\", organisé en collaboration avec plusieurs institutions prestigieuses dont l'UFHB de Cocody et le CURAT.",
    mainContent: "Ce concours m'a permis d'explorer l'application des technologies géospatiales à la résolution de problématiques environnementales critiques, notamment la gestion des zones côtières face aux défis du changement climatique.",
    quote: "La technologie peut et doit être un outil majeur dans notre réponse collective aux défis environnementaux. Les innovations géospatiales offrent des possibilités immenses pour améliorer notre compréhension et notre gestion des écosystèmes fragiles.",
    details: "La solution que j'ai développée intègre des données satellites et des modèles prédictifs pour offrir une meilleure compréhension des dynamiques côtières et faciliter la prise de décision en matière de protection environnementale.",
    conclusion: "Cette reconnaissance confirme mon engagement à utiliser mes compétences technologiques au service de causes essentielles comme la protection de l'environnement et l'adaptation au changement climatique."
  },
];

const News = () => {
  const { setNewsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"news"}>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Actualités"} title={"Dernières Actualités"} />
            </div>
          </div>
          <ul className="ml-[-50px] list-none">
            {news.map((item) => (
              <li
                className="mb-[50px] float-left w-1/2 pl-[50px]"
                key={item.id}
              >
                <div className="list_inner w-full clear-both float-left h-auto relative">
                  <div className="image relative overflow-hidden">
                    <img
                      className="min-w-full opacity-0"
                      src="assets/img/thumbs/40-25.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                      data-img-url={item.image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <a
                      className="tokyo_tm_full_link"
                      href="#"
                      onClick={() => {
                        modalToggle(true);
                        setNewsModal(item);
                      }}
                    />
                  </div>
                  <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                    <div className="extra flex items-center justify-between mb-[25px] relative">
                      <div className="short">
                        <p className="date font-montserrat text-[13px] text-[#767676]">
                          Par{" "}
                          <a
                            className="text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            onClick={() => {
                              modalToggle(true);
                              setNewsModal(item);
                            }}
                          >
                            {item.author}
                          </a>{" "}
                          <span className="relative">{item.date}</span>
                        </p>
                      </div>
                    </div>
                    <h3 className="title mb-[10px] leading-[1.4]">
                      <a
                        className="text-black text-[18px] font-semibold inline-block transition-all duration-300 hover:text-black"
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setNewsModal(item);
                        }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <div className="tokyo_tm_read_more">
                      <a
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setNewsModal(item);
                        }}
                      >
                        <span>Lire Plus</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
export default News;