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
    id: "1",
    name: "Mateus",
    age: "24",
    course: "Sistemas p/Internet",
    register: "1231654",
  },
];

import plus from "../../../assets/icons/add.png";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="flex-1 max-w-[1440px] h-screen p-10  bg-green-100">
      <div className="mb-2.5 flex flex-row justify-between ">
        <h1 className="text-green-700 font-semibold text-2xl">
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
        <div className=" flex flex-col items-center">
          <div className=" w-full flex flex-row justify-between mb-10 bg-green-700 rounded-xl">
            <h3 className="w-48 text-center text-md font-medium  text-white">
              Nome
            </h3>
            <h3 className="w-48 text-center   text-md font-medium  text-white">
              Idade
            </h3>
            <h3 className="w-48 text-center   text-md font-medium  text-white">
              Curso
            </h3>
            <h3 className="w-48 text-center   text-md font-medium  text-white">
              Matricula
            </h3>
            <div className="w-[20%]">
              <div></div>
              <div></div>
            </div>
          </div>
          {Data.map((item: Student) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
