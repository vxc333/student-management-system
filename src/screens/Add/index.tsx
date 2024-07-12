import { Link } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";

export interface Student {
  id: string;
  name: string;
  age: string;
  course: string;
  register: string;
}

import back from "../../../assets/icons/arrow_back.png";
import add from "../../../assets/icons/check.png";
import cancel from "../../../assets/icons/close.png";

const Add = () => {
  return (
    <div className="flex-1 max-w-[1440px] h-screen p-10 bg-green-100">
      <div className="mb-10 flex justify-between">
        <h1 className="text-green-700 font-semibold text-2xl">
          Adicionar novo aluno
        </h1>
        <Link to={"/"}>
          <DefaultButton
            text={"Voltar para a lista de alunos"}
            primary
            onClick={() => {}}
            icon={back}
          />
        </Link>
      </div>
      <div>
        <div className="flex flex-col items-center ">
          <div className=" max-w-[1440px] flex flex-col mb-14 bg-green-700 rounded-xl p-5">
            <div className=" w-full flex flex-col items-start mb-2.5">
              <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                Nome
              </h3>
              <input
                placeholder="Nome"
                className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between  w-full">
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Idade
                </h3>
                <input
                  placeholder="Idade"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Curso
                </h3>
                <input
                  placeholder="Curso"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Registro
                </h3>
                <input
                  placeholder="Registro"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-row justify-center gap-x-2">
            <DefaultButton
              text={"Adicionar"}
              primary
              onClick={() => {}}
              icon={add}
            />
            <DefaultButton
              text={"Cancelar"}
              primary={false}
              onClick={() => {}}
              icon={cancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
