import { useState, useEffect } from "react";

// Données des témoignages
const testimonialData = [
  {
    id: 1,
    text: "Fulgence a fait preuve d'une créativité et d'une capacité d'innovation remarquables lors du Hackathon PangaeaX. Son approche collaborative a été déterminante pour le succès du projet.",
    authorImage: "assets/img/testimonials/1.jpg",
    authorName: "Jury du Hackathon PangaeaX",
    authorDesignation: "AGL Group",
  },
  {
    id: 2,
    text: "Le travail de Fulgence sur l'application ANSUT DIGITAL FANZONE pendant la CAN 2023 a démontré sa capacité à livrer des solutions de qualité dans des délais serrés.",
    authorImage: "assets/img/testimonials/2.jpg",
    authorName: "Équipe ANSUT",
    authorDesignation: "Agence Nationale",
  },
  {
    id: 3,
    text: "Sa maîtrise des technologies mobiles et son approche orientée solutions ont permis de développer une application qui répond parfaitement aux besoins de nos utilisateurs.",
    authorImage: "assets/img/testimonials/3.jpg",
    authorName: "Smart Technology",
    authorDesignation: "Partenaire de projet",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("fade-in");
  const [isAnimating, setIsAnimating] = useState(false);

  // Fonction pour passer au témoignage suivant avec animation
  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimation("fade-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
      setAnimation("fade-in");

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  // Fonction pour revenir au témoignage précédent avec animation
  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimation("fade-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
      );
      setAnimation("fade-in");

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  // Rotation automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000); // Change toutes les 6 secondes

    return () => clearInterval(interval);
  }, [isAnimating]); // Dépendance à isAnimating pour éviter les conflits

  // Fonction pour sélectionner directement un témoignage
  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);
    setAnimation("fade-out");

    setTimeout(() => {
      setCurrentIndex(index);
      setAnimation("fade-in");

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  // Témoignage actuellement affiché
  const currentTestimonial = testimonialData[currentIndex];

  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Témoignages</h3>
        </div>

        <div className="testimonial_wrapper w-full h-auto clear-both float-left relative" style={{ minHeight: "250px" }}>
          {/* Navigation */}
          <div className="testimonial_navigation w-full h-auto flex justify-between absolute top-1/2 transform -translate-y-1/2 z-10 px-4">
            <button
              onClick={prevTestimonial}
              className="prev_button w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              disabled={isAnimating}
            >
              <i className="icon-left-open-big"></i>
            </button>
            <button
              onClick={nextTestimonial}
              className="next_button w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              disabled={isAnimating}
            >
              <i className="icon-right-open-big"></i>
            </button>
          </div>

          {/* Témoignage actuel avec animation */}
          <div
            className={`testimonial_item w-full max-w-[800px] mx-auto transition-all duration-500 ${animation === "fade-in"
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
              }`}
          >
            <div className="list_inner w-full h-auto clear-both float-left relative">
              <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative bg-white">
                <p>{currentTestimonial.text}</p>
                {/* Élément décoratif flèche */}
                <div className="svg-triangle absolute bottom-[-15px] left-[40px] w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-[#E5EDF4] border-r-[15px] border-r-transparent"></div>
              </div>
              <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                <div className="image relative w-[60px] h-[60px] transition-all duration-300 transform hover:scale-110">
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full border-2 border-[#E5EDF4]"
                    style={{ backgroundImage: `url(${currentTestimonial.authorImage})` }}
                  />
                </div>
                <div className="info pl-[20px]">
                  <h3 className="text-[16px] mb-[2px] font-semibold">
                    {currentTestimonial.authorName}
                  </h3>
                  <span className="text-[14px]">
                    {currentTestimonial.authorDesignation}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs de pagination animés */}
          <div className="pagination_indicators flex justify-center mt-[30px]">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-[12px] h-[12px] rounded-full mx-1 transition-all duration-500 ${index === currentIndex
                    ? "bg-black transform scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                  }`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;