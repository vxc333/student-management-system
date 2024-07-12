import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StudentOverview() {
  return (
    <main>
      <aside>
        <h1>SISTEMAS DE GERENCIAMENTO DE ALUNOS</h1>
      </aside>
      <section>
        <h1>Alunos</h1>
        <div>
          <Input/>
          <Button> Adicionar Novo Aluno </Button>
        </div>
        <div className="flex">
          <h3>Nome</h3>
          <h3>Idade</h3>
          <h3>Curso</h3>
          <h3>Matrícula</h3>
        </div>
        <div>
          {/* AQUI É PARA EXIBIR OS ALUNOS,
          PEGA UM GET LÁ DA API, E ESSE BOTOES, UM VAI EXCLUIR E O OUTRO 
          VAI LEVAR PRA UMA PAG DE ATUALIZAR OS DADOS */}
        </div>
      </section>
    </main>
  )
}
