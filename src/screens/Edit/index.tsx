const item = {
  id: "1",
  name: "Artur",
  age: 21,
  course: "Sistemas p/Internet",
  register: "1231654",
};

const Edit = () => {
  return (
    <div className="flex-1 max-w-[1440px] h-screen p-10 bg-green-100">
      <div className="mb-10 flex justify-between">
        <h1 className="text-green-700 font-semibold text-2xl">
          Atualizar dados do aluno
        </h1>
        <div className="w-fit border border-green-700 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          <button>Voltar para a lista de alunos</button>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center border border-red-500">
          <div className="border border-red-500 max-w-[1440px] flex flex-col mb-14 bg-green-700 rounded-xl p-5">
            <div className="border border-red-500 w-full flex flex-col items-start mb-2.5">
              <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                Nome
              </h3>
              <input
                value={item.name}
                placeholder="Nome"
                className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between border border-black w-full">
              <div className="border border-red-500 w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Idade
                </h3>
                <input
                  value={item.age}
                  placeholder="Idade"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className="border border-red-500 w-full lg:w-[32%] flex flex-col items-start mb-2.5">
                <h3 className="w-48 text-start mb-2.5 text-lg font-medium text-white">
                  Curso
                </h3>
                <input
                  value={item.course}
                  placeholder="Curso"
                  className="w-full text-start p-2.5 text-lg font-medium rounded-xl text-slate-700"
                />
              </div>
              <div className="border border-red-500 w-full lg:w-[32%] flex flex-col items-start mb-2.5">
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
            <button className="border border-green-700 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
              Salvar
            </button>
            <button className="border border-red-700 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
              Desfazer alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
