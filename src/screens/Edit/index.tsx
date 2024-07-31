import { Link } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";

const item = {
  id: "1",
  name: "Artur",
  age: 21,
  course: "Sistemas p/Internet",
  register: "1231654",
};

import back from "../../../assets/icons/arrow_back.png";
import desfazer from "../../../assets/icons/undo.png";
import check from "../../../assets/icons/check.png";
const Edit = () => {
  return (
    <div className="flex-1 max-w-[1440px] h-screen p-10 bg-green-100">
      <div className="mb-10 flex justify-between">
        <h1 className="text-green-700 font-semibold text-2xl">
          Atualizar dados do aluno
        </h1>
        <div>
          <Link to={".."}>
            <DefaultButton
              text={"Voltar para lista de alunos"}
              primary={true}
              onClick={() => {}}
              icon={back}
            />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center ">
          <div className=" max-w-[1440px] flex flex-col mb-14 bg-green-700 rounded-xl p-5">
            <div className=" w-full flex flex-col items-start mb-2.5">
              <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                Nome
              </h3>
              <input
                value={item.name}
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
                  value={item.age}
                  placeholder="Idade"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Curso
                </h3>
                <input
                  value={item.course}
                  placeholder="Curso"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Registro
                </h3>
                <input
                  value={item.register}
                  placeholder="Registro"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-row justify-center gap-x-2">
            <DefaultButton
              text="Salvar"
              primary
              onClick={() => {}}
              icon={check}
            />
            <DefaultButton
              text="Desfazer alterações"
              primary={false}
              onClick={() => {}}
              icon={desfazer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
