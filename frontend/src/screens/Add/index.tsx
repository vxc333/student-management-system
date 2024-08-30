export interface Student {
  id: string;
  name: string;
  age: string;
  course: string;
  register: string;
}

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DefaultButton from "../../components/DefaultButton";

import back from "../../../assets/icons/arrow_back.png";
import add from "../../../assets/icons/check.png";
import cancel from "../../../assets/icons/close.png";

const Add = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    register: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleAdd = () => {
    if (!student.name || !student.age || !student.course || !student.register) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    axios
      .post("http://localhost:3333/estudantes", student)
      .then(() => {
        alert("Aluno adicionado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        console.error(
          "Erro ao adicionar aluno:",
          error.response ? error.response.data : error.message
        );
        setError("Erro ao adicionar aluno.");
      });
  };

  return (
    <div className="flex-1 mx-auto max-w-[1440px] h-full min-h-screen p-10 bg-green-100 pb-20">
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
          <div className="max-w-[1440px] flex flex-col mb-14 bg-green-700 rounded-xl p-5">
            <div className="w-full flex flex-col items-start mb-2.5">
              <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                Nome
              </h3>
              <input
                name="name"
                value={student.name}
                placeholder="Nome"
                onChange={handleInputChange}
                className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
              <div className="w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Idade
                </h3>
                <input
                  name="age"
                  value={student.age}
                  placeholder="Idade"
                  onChange={handleInputChange}
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className="w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Curso
                </h3>
                <input
                  name="course"
                  value={student.course}
                  placeholder="Curso"
                  onChange={handleInputChange}
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className="w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Registro
                </h3>
                <input
                  name="register"
                  value={student.register}
                  placeholder="Registro"
                  onChange={handleInputChange}
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-row justify-center gap-x-2">
            <DefaultButton
              text={"Adicionar"}
              primary
              onClick={handleAdd}
              icon={add}
            />
            <DefaultButton
              text={"Cancelar"}
              primary={false}
              onClick={() => navigate("/")}
              icon={cancel}
            />
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Add;
