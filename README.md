# Fest Orders - Gerenciador de Pedidos

Uma aplicação fullstack desenvolvida para listar e gerenciar os pedidos de itens de um festival, exibindo informações pertinentes de forma clara e objetiva, utilizando Nest.js e Angular.

## Funcionalidades Principais

  * **Listagem de Pedidos:** Exibe todos os pedidos com suas informações essenciais.
  * **Filtros Dinâmicos:** Permite a filtragem de pedidos por nome do cliente e data.
  * **Modal de Detalhes:** Apresenta informações detalhadas de cada pedido ao ser selecionado.
  * **Gerenciamento (CRUD):** Funcionalidades de criação, leitura, atualização e deleção para Pedidos, Clientes e Itens.
  * **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela (desktop e mobile).

## Tecnologias Utilizadas

| Categoria | Tecnologia |
| :--- | :--- |
| **Frontend** | Angular.js, Bootstrap, CSS |
| **Backend** | Nest.js, TypeORM |
| **Banco de Dados** | PostgreSQL |

## Design e Prototipação

O design inicial da interface foi prototipado no Figma, focando em uma experiência de usuário simples e funcional.

  * **[Link para o protótipo no Figma](https://www.figma.com/design/5tAIJ8CWFh1dOb94EruRQj/Untitled?node-id=0-1&p=f&t=PIo0NInISJgX8CwL-0)**

## Modelagem do Banco de Dados

O banco de dados foi modelado para normalizar as informações de clientes, itens e os pedidos que os relacionam. O TypeORM é utilizado para gerenciar as entidades e migrações automaticamente.

## Como Executar o Projeto

O projeto é dividido em duas pastas principais (`back` e `front`) e utiliza o Docker Compose para orquestrar o banco de dados PostgreSQL.

### Pré-requisitos

  * [Node.js](https://nodejs.org/en/) (v18+ recomendado)
  * [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
  * [NestJS CLI](https://docs.nestjs.com/) (`npm install -g @nestjs/cli`)
  * [Docker](https://www.docker.com/products/docker-desktop/)

### Passos para Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Suba o container do Banco de Dados:**
    (Na raiz do projeto, onde o `docker-compose.yml` está localizado)

    ```bash
    docker-compose up -d
    ```

3.  **Instale e execute o Backend (Nest.js):**

    ```bash
    cd back
    npm install
    npm run start:dev
    ```

    O servidor backend estará rodando em `http://localhost:3000`.

4.  **Instale e execute o Frontend (Angular):**
    (Em um novo terminal)

    ```bash
    cd front
    npm install
    ng serve
    ```

    A aplicação estará acessível em `http://localhost:4200`.

-----

## Autor

Desenvolvido por **Vinícius Araújo Messias**

  * **LinkedIn:** [https://www.linkedin.com/in/viniciusaraujomessias/](https://www.linkedin.com/in/viniciusaraujomessias/)
  * **GitHub:** [https://github.com/vinicete](https://github.com/vinicete)