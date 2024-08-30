import { Link, useNavigate, useParams } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";

import back from "../../../assets/icons/arrow_back.png";
import desfazer from "../../../assets/icons/undo.png";
import check from "../../../assets/icons/check.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [item, setItem] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    register: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3333/estudantes/${id}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.log("Erro ao buscar dados:", error);
        });
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSave = () => {
    console.log("Dados enviados:", item); // Verifique os dados que estão sendo enviados
  
    axios
      .put(`http://localhost:3333/estudantes/${id}`, item)
      .then((response) => {
        console.log("Resposta da atualização:", response); // Verifique a resposta da API
        alert("Dados atualizados com sucesso!");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Erro ao atualizar dados:", error.response ? error.response.data : error.message);
        setError("Erro ao atualizar dados.");
      });
  };
  
  return (
    <div className="flex-1 mx-auto max-w-[1440px] h-full min-h-screen p-10 bg-green-100 pb-20">
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
                name="name"
                value={item.name}
                placeholder="Nome"
                onChange={handleInputChange}
                className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between  w-full">
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Idade
                </h3>
                <input
                  name="age"
                  value={item.age}
                  placeholder="Idade"
                  onChange={handleInputChange}
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Curso
                </h3>
                <input
                  name="course"
                  value={item.course}
                  placeholder="Curso"
                  onChange={handleInputChange}
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className=" w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Registro
                </h3>
                <input
                  name="register"
                  value={item.register}
                  placeholder="Registro"
                  onChange={handleInputChange}
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-row justify-center gap-x-2">
            <DefaultButton
              text="Salvar"
              primary
              onClick={handleSave}
              icon={check}
            />
            <DefaultButton
              text="Desfazer alterações"
              primary={false}
              onClick={() => {
                navigate("/");
              }}
              icon={desfazer}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Edit;
