const partners = [
  { id: 1, name: "ANSUT" },
  { id: 2, name: "AGL Group" },
  { id: 3, name: "BYTEOPS" },
  { id: 4, name: "Centre YIRI" },
  { id: 5, name: "SIMPLON.CO" },
  { id: 6, name: "Tuloss Solution" },
  { id: 7, name: "MEDEV" },
  { id: 8, name: "HETEC" },
];

const Partners = () => {
  return (
    <div className="tokyo_tm_partners w-full h-auto clear-both float-left bg-white py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Collaborations</h3>
        </div>
        <div className="partners_inner w-full h-auto clear-both float-left">
          <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left pl-[2px]">
            {partners.map((partner) => (
              <li
                key={partner.id}
                className="m-0 float-left w-1/4 border-solid border-[#eee] border-2 text-center h-[145px] flex items-center justify-center relative mt-[-2px] ml-[-2px] overflow-hidden"
              >
                <div className="list_inner w-full h-full clear-both float-left opacity-70 transition-all duration-300 hover:opacity-100 flex items-center justify-center">
                  <h4 className="text-[18px] font-semibold">{partner.name}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Partners;