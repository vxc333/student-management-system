import { Student } from "../../screens/Add";
import DefaultButton from "../DefaultButton";
import { Link } from "react-router-dom";

interface CardProps {
  item: Student;
}

import trash from "../../../assets/icons/delete.png";
import edit from "../../../assets/icons/edit.png";

interface TextProps {
  value: string;
}

const Text = ({ value }: TextProps) => {
  return (
    <h5 className="w-48 text-center text-md font-medium text-green-700 ">
      {value}
    </h5>
  );
};

export default function Card({ item }: CardProps) {
  return (
    <div
      id={item.id}
      className=" w-full flex flex-row justify-between rounded-xl items-center p-2 bg-white mb-2.5"
    >
      <Text value={item.name} />
      <Text value={item.age} />
      <Text value={item.course} />
      <Text value={item.register} />
      <div className=" w-[20%] flex justify-around">
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
            onClick={() => {}}
            icon={trash}
          />
        </div>
      </div>
    </div>
  );
}
