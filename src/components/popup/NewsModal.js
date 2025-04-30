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
          <div className="descriptions w-full float-left">
            {/* Introduction */}
            <p className="bigger text-[#888] text-[20px] mb-[31px]">
              {newsModal.introduction}
            </p>

            {/* Contenu principal */}
            <p className="mb-[22px]">
              {newsModal.mainContent}
            </p>

            {/* Citation */}
            <div className="quotebox w-full clear-both float-left h-auto relative pl-[70px] mb-[24px]">
              <div className="icon absolute left-0 top-[5px]">
                <i className="icon-quote-left text-[40px] text-black" />
              </div>
              <p className="text-[20px]">
                {newsModal.quote}
              </p>
            </div>

            {/* Détails supplémentaires */}
            <p className="mb-[22px]">
              {newsModal.details}
            </p>

            {/* Conclusion */}
            <p>
              {newsModal.conclusion}
            </p>
          </div>

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
        </div>
      </div>
    </ModalContainer>
  );
};
export default NewsModal;