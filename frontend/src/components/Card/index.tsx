import { Student } from "../../screens/Add";
import DefaultButton from "../DefaultButton";
import { Link } from "react-router-dom";

interface CardProps {
  item: Student;
}

import trash from "../../../assets/icons/delete.png";
import edit from "../../../assets/icons/edit.png";
import axios from "axios";

interface TextProps {
  value: string;
}

const Text = ({ value }: TextProps) => {
  return (
    <h5 className="w-full md:w-48 text-center text-md font-medium text-green-700">
      {value}
    </h5>
  );
};

export default function Card({ item }: CardProps) {
  const handleDelete = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
      axios
        .delete(`http://localhost:3333/estudantes/${id}`)
        .then(() => {
          alert("Aluno excluído com sucesso!");
          // Atualize o estado da lista de alunos aqui, se necessário
          // Pode ser necessário adicionar um callback ou algum método para atualizar a lista
        })
        .catch((error) => {
          console.log("Erro ao excluir aluno:", error);
        });
    }
  };

  return (
    <div
      id={item.id}
      className="w-full flex flex-col md:flex-row justify-between rounded-xl items-center p-2 bg-white mb-2.5"
    >
      <Text value={item.name} />
      <Text value={item.age} />
      <Text value={item.course} />
      <Text value={item.register} />
      <div className="w-full md:w-[20%] flex justify-center md:justify-around">
        <Link to={`/edit/${item.id}`}>
          <DefaultButton
            text={"Editar"}
            primary
            icon={edit}
            onClick={() => {}}
          />
        </Link>
        <div>
          <DefaultButton
            text={"Excluir"}
            primary={false}
            onClick={() => handleDelete(item.id)}
            icon={trash}
          />
        </div>
      </div>
    </div>
  );
}
