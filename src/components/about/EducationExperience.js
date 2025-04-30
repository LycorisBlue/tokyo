const experiencesData = [
  {
    id: 1,
    date: "Actuel",
    designation: "Architecte Logiciel",
    company: "BYTEOPS",
  },
  {
    id: 2,
    date: "2024",
    designation: "Architecte Logiciel",
    company: "Ascens Service (filiale du groupe AGL)",
  },
  {
    id: 3,
    date: "Depuis juin 2024",
    designation: "Développeur Fullstack",
    company: "ANSUT - Agence Nationale du Service Universel des Télécommunications",
  },
  {
    id: 4,
    date: "Avril 2024 - Présent",
    designation: "Développeur Mobile",
    company: "Smart Technology",
  },
  {
    id: 5,
    date: "Déc 2023 - Janvier 2024",
    designation: "Développeur Web/Mobile",
    company: "ANSUT DIGITAL FANZONE",
  },
];
const educationData = [
  {
    id: 1,
    date: "Depuis juillet 2023",
    degree: "Développeur Web/Mobile & IOT",
    institute: "SIMPLON.CO",
  },
  {
    id: 2,
    date: "2022 - 2023",
    degree: "Licence en Informatique",
    institute: "École Supérieure des Hautes Études Technologiques",
  },
  {
    id: 3,
    date: "2024",
    degree: "Certifications Techniques",
    institute: "UDEMY, W3 SCHOOLS (JS, NODE, FLUTTER, REACT JS)",
  },
];

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Formation</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {educationData.map((edu, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${i == educationData.length - 1 ? "" : "pb-[45px]"
                      }`}
                    key={edu.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {edu.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {edu.institute}
                        </h3>
                        <span className="text-[14px]">{edu.degree}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Expérience</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {experiencesData.map((exp, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${i == experiencesData.length - 1 ? "" : "pb-[45px]"
                      }`}
                    key={exp.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {exp.company}
                        </h3>
                        <span className="text-[14px]">{exp.designation}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;