const Data = [
  {
    id: "1",
    name: "Artur",
    age: 21,
    course: "Sistemas p/Internet",
    register: "1231654",
  },
  {
    id: "1",
    name: "Mateus",
    age: 24,
    course: "Sistemas p/Internet",
    register: "1231654",
  },
];

const Add = () => {
  return (
    <div className="flex-1 max-w-[1440px] h-screen p-10 border border-red-500 bg-green-100">
      <div className="mb-2.5">
        <h1 className="text-green-700 font-semibold text-2xl">
          Adicionar novo aluno
        </h1>
      </div>
      <div>
        <div className="w-fit border border-red-500 mb-10 rounded-xl">
          <input
            type="text"
            className="rounded-xl p-2.5 w-80"
            placeholder="Procurar aluno"
          />
          <img src="" alt="" />
        </div>
        <div className="border border-red-500 flex flex-col items-center">
          <div className="border border-red-500 w-full flex flex-row justify-between mb-10 bg-green-700 rounded-xl">
            <h3 className="w-48 text-center text-md font-medium border border-red-500 text-white">
              Nome
            </h3>
            <h3 className="w-48 text-center   text-md font-medium border border-red-500 text-white">
              Idade
            </h3>
            <h3 className="w-48 text-center   text-md font-medium border border-red-500 text-white">
              Curso
            </h3>
            <h3 className="w-48 text-center   text-md font-medium border border-red-500 text-white">
              Matricula
            </h3>
            <div className="w-[20%]">
              <div></div>
              <div></div>
            </div>
          </div>
          {Data.map((item) => (
            <div
              id={item.id}
              className="border border-red-500 w-full flex flex-row justify-between bg-green-700 mb-2.5"
            >
              <h5 className="w-48 text-center text-md font-medium border border-red-500 text-white ">
                {item.name}
              </h5>
              <h5 className="w-48 text-center text-md font-medium border border-red-500 text-white">
                {item.age}
              </h5>
              <h5 className="w-48 text-center text-md font-medium border border-red-500 text-white">
                {item.course}
              </h5>
              <h5 className="w-48 text-center text-md font-medium border border-red-500 text-white">
                {item.register}
              </h5>
              <div className="border border-blue-500 w-[20%] flex justify-center">
                <button className="border w-[40%] border-blue-500 text-md font-medium text-white">
                  <span>Editar</span>
                </button>
                <button className="border w-[40%] border-blue-500 text-md font-medium text-white">
                  <span>Excluir</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Add;
