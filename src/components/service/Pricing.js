const Pricing = () => {
  return (
    <div className="tokyo_tm_pricing w-full h-auto clear-both float-left px-[0px] pt-[100px] pb-[60px] bg-white">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Forfaits</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left">
          <ul className="ml-[-40px]">
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>
                      Starter<span className="currency"></span>
                    </span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Applications Simples
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>Application mobile ou web simple</p>
                  </li>
                  <li className="active">
                    <p>Interface utilisateur épurée</p>
                  </li>
                  <li className="active">
                    <p>Fonctionnalités basiques</p>
                  </li>
                  <li className="active">
                    <p>Support après livraison (1 mois)</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="mailto:lycorisblue99@gmail.com">
                    <span>Demander un devis</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>
                      Standard<span className="currency"></span>
                    </span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Applications Professionnelles
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>Application complète multi-plateforme</p>
                  </li>
                  <li className="active">
                    <p>Design personnalisé et responsive</p>
                  </li>
                  <li className="active">
                    <p>Intégration backend et API</p>
                  </li>
                  <li className="active">
                    <p>Support et maintenance (3 mois)</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="mailto:lycorisblue99@gmail.com">
                    <span>Demander un devis</span>
                  </a>
                </div>
                <span className="popular absolute inline-block bg-black text-white text-[13px] px-[20px] pb-[3px] pt-0 top-[-17px] right-[10px]">
                  Populaire
                </span>
              </div>
            </li>
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>
                      Premium<span className="currency"></span>
                    </span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Solutions Entreprise
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>Système complet sur mesure</p>
                  </li>
                  <li className="active">
                    <p>Architecture avancée et évolutive</p>
                  </li>
                  <li className="active">
                    <p>Intégration systèmes existants</p>
                  </li>
                  <li className="active">
                    <p>Support continu et évolutions</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="mailto:lycorisblue99@gmail.com">
                    <span>Demander un devis</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Pricing;