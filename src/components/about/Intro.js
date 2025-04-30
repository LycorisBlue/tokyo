import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/1.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Fulgence G. MEDI</h3>
        <span>Développeur Fullstack/Mobile</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          À seulement 20 ans, je me suis fixé un objectif ambitieux : devenir un modèle d'excellence et d'innovation pour la jeunesse ivoirienne. Passionné par le potentiel transformateur de la technologie, j'ai rapidement compris que le développement numérique représentait une opportunité unique pour l'Afrique.
        </p>
        <p>
          Ma vision va au-delà du code. Je veux montrer à chaque jeune Ivoirien qu'avec détermination et créativité, nous pouvons bâtir des solutions technologiques adaptées à nos défis locaux, créer de la valeur et contribuer activement au développement de notre pays. Chaque application que je développe est guidée par cette ambition.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Naissance:
                </span>
                <span>18.03.2005</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Âge:
                </span>
                <span>20</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Adresse:
                </span>
                <span>Abidjan, Cocody, Côte d'Ivoire</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:g.fulgence.medi@hotmail.com"
                  >
                    g.fulgence.medi@hotmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Téléphone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+225 07 59 67 0150 /+225 05 75 63 5710"
                  >
                    +225 07 59 67 0150 /+225 05 75 63 5710
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationalité:
                </span>
                <span>Ivoirienne</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Formation:
                </span>
                <span>École Supérieure des Hautes Études Technologiques</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Diplôme:
                </span>
                <span>Licence en Informatique</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Intérêts:
                </span>
                <span>Musique, Sport, Recherche, Fiction</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Disponible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/CV_2024-06-05_Medi_Gouandeuh Fulgence.pdf" download>
          <span>Télécharger CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;