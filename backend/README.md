# CRUD de Estudante usando TypeScript, Prisma e Express

Este projeto consiste em um CRUD (Create, Read, Update, Delete) para o cadastro de clientes. Utiliza TypeScript para garantir tipagem estática, Prisma como ORM para interagir com o banco de dados, e Express como framework web.

## Requisitos

- Node.js (v14.0.0 ou superior)
- npm ou yarn
- Banco de dados PostgreSQL(Neon.tech)

## Configuração

1. Clone o repositório:

    ```bash
    git clone https://github.com/vxc333/student-management-system.git
    ```

2. Instale as dependências:

    ```bash
    cd backend
    npm install
    ```

    ou

    ```bash
    cd backend
    
    yarn install
    ```
3. Inicialize o Typescript
    ```
    npx tsc --init
    ```
3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    ```
    DATABASE_URL= Seu DATABASE_URL exportado do Neon.tech
    DIRECT_URL= Seu DIRECT_URL exportado do Neon.tech
    ```
4. Execute o comando a seguir

   ```
   npx prisma generate
   ```

## Uso

1. Inicie o servidor:

    ```bash
    npm run dev # ou yarn dev
    ```

2. Acesse a API em [http://localhost:3333](http://localhost:3000/)

## Rotas

- **GET /estudantes**: Retorna a lista de todos os estudante.
- **GET /estudantes/:id**: Retorna os detalhes de um estudante específico.
- **POST /estudantes**: Cadastra um novo estudante.
- **PUT /estudantes/id**: Atualiza os dados de um estudante específico. Envie um corpo JSON com os campos a serem atualizados.
- **DELETE /estudantes/:id**: Exclui um estudante específico.

## Estrutura do Banco de Dados

O banco de dados contém uma tabela `estudantes` com os seguintes campos:

- `id` (chave estudante)
- `name` (nome do estudante)
- `age` (idade do estudante)
- `course` (curso do estudante)
- `register` (número de registro do estudante)
  
Certifique-se de que seu banco de dados PostgreSQL esteja configurado corretamente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas.

---

Este README fornece uma visão geral básica do projeto. Consulte o código-fonte para obter detalhes específicos da implementação.
