import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewStudent() {
  return (
    <main>
      <aside>
        <h1>SISTEMAS DE GERENCIAMENTO DE ALUNOS</h1>
      </aside>
      <section>
        <div className="flex">
          <h1>Adicionar Novo Alunos</h1>
          <a href="">Retornar para todos os Alunos</a>
        </div>
        <div>
          <Input type="text" />
          <div className="flex">
            <Input type="number" />
            <Input type="text" />
            <Input type="text" />
          </div>
          <Button> Salvar </Button>
        </div>
      </section>
    </main>
  );
}
