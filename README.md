# Student-Management-System
Esse repositório é um projeto que fornece uma solução para gerenciar informações de estudantes. Construído com Node.js e TypeScript, esse sistema permite a gestão de dados dos alunos, como informações pessoais, notas e outras métricas relevantes.

# Visão geral
O repositório é organizado da seguinte forma:

- src/: Contém o código-fonte principal do projeto.
- controllers/: Gerencia a lógica de controle das rotas e operações sobre os dados dos estudantes.
- routes/: Define as rotas da API.
- models/: Define os modelos de dados e a estrutura do banco de dados.
- services/: Contém serviços de lógica de negócios, como manipulação de dados e regras de validação.
- middlewares/: Implementa middlewares para funções auxiliares como autenticação e validação.
- utils/: Contém utilitários e funções auxiliares que podem ser reutilizadas em diferentes partes do projeto.
- app.ts: Arquivo principal para a inicialização da aplicação e configuração do servidor.
- tests/: Contém os testes automatizados do sistema, para garantir que todas as funcionalidades estejam funcionando corretamente.
- config/: Contém arquivos de configuração, como as configurações do banco de dados e variáveis de ambiente.
- public/: Contém arquivos estáticos que são servidos pela aplicação.
- migrations/: Scripts de migração para atualizar o banco de dados conforme a evolução do esquema.
- package.json: Gerencia as dependências e scripts do projeto.
- tsconfig.json: Configurações do TypeScript.
- README.md: Este arquivo de documentação.

# Guia de Instalação
* Clone o repositório:
git clone https://github.com/vxc333/student-management-system.git

* Navegue até o diretório do projeto:
cd student-management-system

* Instale as dependências:
npm install

* Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione as variáveis necessárias. Utilize o arquivo .env.example como referência para as variáveis de ambiente necessárias.

* Compile o TypeScript:
npm run build

* Execute as migrações:
npm run migrate

* Inicie o servidor:
npm start

# Scripts
- npm run build: Compila o código TypeScript para JavaScript.
- npm start: Inicia o servidor utilizando o código JavaScript compilado.
- npm run test: Executa os testes automatizados para verificar a integridade da aplicação.
- npm run migrate: Executa as migrações do banco de dados.
- npm run lint: Executa o linting para garantir a qualidade do código.

# Uso
Depois de seguir as instruções instalar e iniciar o sistema de forma correta, você pode realizar as seguintes ações:

- Cadastro de Novos Estudantes: Acesse a rota /students/new para adicionar um novo estudante.
- Visualização de Estudantes: Acesse a rota /students para ver a lista de todos os estudantes.
- Atualização de Informações: Utilize as rotas adequadas para atualizar os detalhes dos estudantes.
- Remoção de Estudantes: Acesse a rota /students/:id/delete para remover um estudante específico.

# Exemplos de Uso
Esse projeto poderá ser usado para um gerenciamento de estudantes de modo geral. Visando facilitar o complexo processo de cadastro, registro, atualização de informações, dentre outros, esse sistema compila códigos e ideias e permite uma simples e ágil coordenação de fluxo de dados e informações. 

# Considerações e Contribuições
De modo geral, esse é o projeto. Sinta-se à vontade para sugestão de alguma ideia ou observação. Certifique-se de seguir as diretrizes de contribuição descritas no arquivo CONTRIBUTING.md.

# Licença
Esse projeto está licenciado sob a MIT License.
