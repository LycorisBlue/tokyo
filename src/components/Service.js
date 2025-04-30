import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import FunFact from "./service/FunFact";
import Partners from "./service/Partners";
import Pricing from "./service/Pricing";
import ServiceItems from "./service/ServiceItems";
import { useEffect, useState } from "react";

const Service = () => {
  const [deviceType, setDeviceType] = useState("desktop"); // Par défaut, on considère que c'est un PC

  // Détection du type d'appareil
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Vérifier immédiatement
    checkDeviceType();

    // Ajouter un listener pour les changements de taille
    window.addEventListener('resize', checkDeviceType);

    // Nettoyer le listener
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Déterminer la hauteur en fonction du type d'appareil
  const getMainSectionHeight = () => {
    switch (deviceType) {
      case "mobile":
        return 2500;
      case "tablet":
        return 1200;
      case "desktop":
      default:
        return 1050;
    }
  };

  // Pour la compatibilité avec le code existant
  const isMobile = deviceType === "mobile";

  return (
    <SectionContainer name={"service"}>
      {/* SECTION PRINCIPALE DES SERVICES */}
      <div
        className="service-main-section"
        style={{
          display: 'block',
          width: '100%',
          minHeight: getMainSectionHeight(),
          height: 'auto',
          paddingTop: '100px',
          paddingBottom: '100px',
          clear: 'both',
          position: 'relative'
        }}
      >
        <div
          className="container"
          style={{
            minHeight: '400px', // Hauteur minimale pour le container
            height: 'auto'
          }}
        >
          <div
            className="service-header"
            style={{
              width: '100%',
              marginBottom: '62px',
              minHeight: '50px', // Hauteur minimale pour l'en-tête
              height: 'auto',
              clear: 'both',
              position: 'relative'
            }}
          >
            <SectionTitle pageName={"Services"} title={"Ce que je fais"} />
          </div>
          <div
            style={{
              width: '100%',
              minHeight: '300px', // Hauteur minimale pour la section des services
              height: 'auto'
            }}
          >
            <ServiceItems />
          </div>
        </div>
      </div>

      {/* SECTION PARTENAIRES */}
      <div
        className="partners-section"
        style={{
          display: 'block',
          width: '100%',
          minHeight: '300px', // Hauteur minimale
          height: 'auto',
          clear: 'both',
          position: 'relative',
          padding: isMobile ? '50px 0' : '70px 0'
        }}
      >
        <Partners />
      </div>

      {/* SECTION FAITS MARQUANTS - Visible uniquement sur desktop */}
      {deviceType === "desktop" && (
        <div
          className="funfacts-section"
          style={{
            display: 'block',
            width: '100%',
            minHeight: '300px', // Hauteur minimale
            height: 'auto',
            clear: 'both',
            position: 'relative'
          }}
        >
          <FunFact />
        </div>
      )}

      {/* SECTION TARIFS */}
      <div
        className="pricing-section"
        style={{
          display: 'block',
          width: '100%',
          minHeight: '400px', // Hauteur minimale
          height: 'auto',
          clear: 'both',
          position: 'relative',
          padding: isMobile ? '50px 0' : '70px 0'
        }}
      >
        <Pricing />
      </div>
    </SectionContainer>
  );
};

export default Service;