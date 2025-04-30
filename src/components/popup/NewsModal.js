import { TokyoContext } from "@/src/Context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";

const NewsModal = () => {
  const { newsModal, setNewsModal } = useContext(TokyoContext);
  return (
    <ModalContainer nullValue={setNewsModal}>
      <div className="news_popup_details w-full h-auto clear-both float-left">
        {/* Image d'en-tête */}
        <div className="top_image w-full h-auto clear-both float-left relative mb-[30px]">
          <img
            className="min-w-full opacity-0"
            src="assets/img/thumbs/40-25.jpg"
            alt="image"
          />
          <div
            className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
            data-img-url={newsModal.image}
            style={{ backgroundImage: `url(${newsModal.image})` }}
          />
        </div>

        {/* Entête de l'article */}
        <div className="news_main_title w-full float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
          <h3 className="text-[25px] font-bold mb-[5px]">{newsModal.title}</h3>
          <p className="date font-montserrat text-[15px] text-[#767676]">
            Par <span className="font-medium text-black">{newsModal.author}</span> |
            <span className="relative ml-[5px]">{newsModal.date}</span>
          </p>
        </div>

        {/* Contenu de l'article */}
        <div className="news_content w-full float-left">
          <div className="descriptions w-full float-left" dangerouslySetInnerHTML={{ __html: newsModal.content }} />

          {/* Section de partage */}
          <div className="news_share w-full float-left flex items-center mt-[40px] pt-[35px] border-solid border-[#DFDFDF] border-t">
            <span className="mr-[15px] font-medium text-black">Partager:</span>
            <ul className="social flex items-center">
              <li className="mr-[10px]">
                <a href="#" className="text-[20px] hover:text-black">
                  <i className="icon-facebook-squared"></i>
                </a>
              </li>
              <li className="mr-[10px]">
                <a href="#" className="text-[20px] hover:text-black">
                  <i className="icon-twitter-squared"></i>
                </a>
              </li>
              <li className="mr-[10px]">
                <a href="#" className="text-[20px] hover:text-black">
                  <i className="icon-linkedin-squared"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation entre articles */}
          <div className="post_pagination w-full float-left flex justify-between mt-[40px]">
            <div className="prev">
              <a href="#" className="text-[16px] hover:text-black flex items-center" onClick={(e) => { e.preventDefault(); }}>
                <i className="icon-left-open-big mr-[10px]"></i>
                <span>Article précédent</span>
              </a>
            </div>
            <div className="next">
              <a href="#" className="text-[16px] hover:text-black flex items-center" onClick={(e) => { e.preventDefault(); }}>
                <span>Article suivant</span>
                <i className="icon-right-open-big ml-[10px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
export default NewsModal;