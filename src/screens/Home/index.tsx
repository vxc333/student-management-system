import { Link } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";
import Card from "../../components/Card";

import { Student } from "../Add";
const Data = [
  {
    id: "1",
    name: "Artur",
    age: "21",
    course: "Sistemas p/Internet",
    register: "1231654",
  },
  {
    id: "2",
    name: "Mateus",
    age: "24",
    course: "Sistemas p/Internet",
    register: "1231655",
  },
];

import plus from "../../../assets/icons/add.png";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="flex-1 mx-auto max-w-[1440px] h-full min-h-screen p-10 bg-green-100 pb-20">
      <div className="mb-2.5 flex flex-col sm:flex-row justify-between">
        <h1 className="text-green-700 font-semibold text-2xl mb-4 sm:mb-0">
          Sistema de gerenciamento de alunos
        </h1>
        <Link to={`/add`}>
          <DefaultButton
            text={"Adicionar novo aluno"}
            primary
            onClick={() => {}}
            icon={plus}
          />
        </Link>
      </div>
      <div>
        <Search />
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row justify-between mb-10 bg-green-700 rounded-xl p-4">
            <h3 className="w-full md:w-48 text-center text-md font-medium text-white mb-4 md:mb-0">
              Nome
            </h3>
            <h3 className="w-full md:w-48 text-center text-md font-medium text-white mb-4 md:mb-0">
              Idade
            </h3>
            <h3 className="w-full md:w-48 text-center text-md font-medium text-white mb-4 md:mb-0">
              Curso
            </h3>
            <h3 className="w-full md:w-48 text-center text-md font-medium text-white mb-4 md:mb-0">
              Matricula
            </h3>
            <div className="w-full md:w-[20%] flex justify-center md:justify-around">
              <div></div>
              <div></div>
            </div>
          </div>
          {Data.map((item: Student) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
