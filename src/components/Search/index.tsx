import search from "../../../assets/icons/search.png";

export default function Search() {
  return (
    <div className="hover:border hover:border-green-700 w-fit flex items-center px-5 mb-10 rounded-xl bg-white">
      <img src={search} alt="" className="w-6 h-6 bg-cover" />
      <input
        type="text"
        className="rounded-xl p-2.5 w-80"
        placeholder="Procurar aluno"
        style={{ outline: "none" }}
      />
    </div>
  );
}
