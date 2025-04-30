import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import FunFact from "./service/FunFact";
import Partners from "./service/Partners";
import Pricing from "./service/Pricing";
import ServiceItems from "./service/ServiceItems";

const Service = () => {
  return (
    <SectionContainer name={"service"}>
      {/* SECTION PRINCIPALE DES SERVICES */}
      <div className="container">
        <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Services"} title={"Ce que je fais"} />
            </div>
          </div>
          <ServiceItems />
        </div>
      </div>

      {/* SECTION PARTENAIRES - Avec container séparé */}
      <div className="tokyo_tm_partners_section w-full float-left">
        <Partners />
      </div>

      {/* SECTION FAITS MARQUANTS - Avec container séparé */}
      <div className="tokyo_tm_funfacts_section w-full float-left">
        <FunFact />
      </div>

      {/* SECTION TARIFS - Avec container séparé */}
      <div className="tokyo_tm_pricing_section w-full float-left">
        <Pricing />
      </div>
    </SectionContainer>
  );
};
export default Service;