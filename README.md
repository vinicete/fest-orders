# Descrição da Solução e Detalhamento do Pogresso - Desafio Feng

Minha solução é o desenvolvimento do desafio para a vaga de desenvolvedor fullstack na Feng, trata-se de uma aplicação fullstack em Angular e Nestjs, utilizando Postgres e Bootstrap pra estilização. Seu objetivo é listar os pedidos de itens de um festival e exibir as informações pertinentes a ele.

Em seguida segue o registro do meu progresso no desafio-feng-dev.

## Definindo o setup:

Comecei fazendo meu registro no gitlab, criando e referenciando a chave SSH, depois fiz o fork do repo e clonei. Em seguida baixei o git kraken e instalei a cli do angular e nest.

Criei uma branch nova → dev-v.01 e fiz a criacao dos diretorios back e front.

## Primeiras decisões:

Decidi pelo Angular.js para o frontend e Nest.js para o backend por serem os mais populares e o que foi requisitado na descrição da vaga, nada em especial ou preferência.

Optei por uma spa pois trata-se de um sistema simples, apenas uma pagina e sem necessidade de seo.

Criei os projetos nas pastas e fiz o primeiro commit :) 

## Requerimentos:

Vou listar o que precisa fazer →

- [x]  Levantar requisitos
- [x]  Documentar as APIs
- [x]  Modelar o banco (Postgres)
    
    Por enquanto não vou implementar autenticação, se der tempo faço depois
    
- [x]  Instalar outras dependencias (typeorm, db, etc)
- [x]  Fazer design inicial no figma
    
    Apenas o simples, deixo bonito depois 
    
- [x]  Desenvolver funcionalidades principais
- [x]  Desenvolver o front com responsividade
- [x]  Integrar tudo claro

Se der tempo→→

- [ ]  Fazer autenticação e login (com jwt acho)
- [ ]  Deixar mais bonito
- [ ]  Testes com Jest
- [ ]  Ver como posso usar Redis
- [ ]  Gerenciar autorização (adm, user comum)

### Requisitos:

- [x]  Seção de filtros
- [x]  Lista de pedidos filtrados
- [x]  Modal de exibição de informações
- [ ]  Botão de criação e deleção de pedido (se tiver auth seria interessante excluir apenas os seus)

### Documentação de APIs:

- [x]  Clientes
    - [x]  GET
    - [x]  POST
    - [x]  DELETE
    - [ ]  PUT
- [x]  Itens
    - [x]  GET
    - [x]  POST
    - [x]  DELETE
    - [ ]  PUT
- [x]  Pedidos
    - [x]  GET
        - [x]  GET byDateAsc
        - [x]  GET byDateDesc
        - [x]  GET byName
        - [ ]  GET byValue
    - [x]  POST
    - [x]  POST Empty
    - [x]  DELETE
    - [ ]  PUT

### Pendências:

- [x]  Aplicar filtros no get
- [x]  Deixar responsivo
- [ ]  Mudar nome do atributo de price pra value
- [x]  Tratar formato de data do pedido
- [ ]  Filtragem por preço
- [x]  Criar arquivo docker pro pg

## Modelagem dos dados:

Por enquanto vou utilizar o postgres localmente pois gosto da visualizacao do pgadmin porem vou setar as configuracoes pra subir um container tambem.

![image.png](attachment:baf2cfb8-abbb-468e-b848-3e47fa6aa240:image.png)

Fiz dessa forma inicialmente apenas pra me localizar melhor e deixar visivel as tabelas, apesar de eu usar o typeOrm e fazer automaticamente a criacao delas.

Após finalizado o crud básico, fiz o design no figma:

https://www.figma.com/design/5tAIJ8CWFh1dOb94EruRQj/Untitled?node-id=0-1&p=f&t=PIo0NInISJgX8CwL-0

Bem simples, mas bonitinho

## Desenvolvimento:

Fiz a lógica de criação e retorno das informações do pedido de acordo com o arquivo “pedidos.json” para que eu pudesse ao menos listar os pedidos e mostrar o modal.

Comecei a implementar o design no front e pra começar instalei o bootstrap pra facilitar um pouco.

Fiz a estilização básica com css padrão pois confesso que não conhecia o padrão BEM e o Scss que o angular recomenda, portanto se der tempo eu mudo (estou mt habituado ao tailwind kkk)

Deixei o design responsivo, conseguindo listar os pedidos criados pelo postman (botao de criar ainda n funciona) e mostrando as infos no modal 

![image.png](attachment:209ec043-0e32-42a9-926b-17fa37baccce:image.png)

![image.png](attachment:c4d0fac2-9c51-44c4-9d73-fc8eaf6b59c0:image.png)

A filtragem foi uma parte complicada pois percebi que para filtrar por preço eu deveria fazer algumas alterações na entidade order, entao eu decidi filtrar apenas por data e nome por enquanto.

Utilizei bastante dos modais do bootstrap com angular e dos recursos de form do angular, facilitam muito o desenvolvimento

Consegui finalizar a listagem com filtro de data e nome, decidi implementar um arquivo docker-compose para utilizar o banco de dados de maneira fácil.

Acredito que eu implementei todas as funcionalidades requisitadas explicitamente

- Seção de filtros
- Lista dos pedidos filtrados
- Modal exibindo informações

Como falta pouco tempo vou criar o modal de criação de pedido (apesar de não ter sido requisitado explicitamente no desafio eu interpretei que precisava ter pois trata-se da vaga fullstack)

Infelizmente não consegui filtrar por preço, tentei algumas abordagens mas precisaria de diversas modificações e não tenho mais tempo

## Finalizado!

Agora são 00:35, segunda feira dia 28/07. To muito feliz por ter conseguido completar o desafio, eu me dediquei quase 100% nele desde que me foi apresentado. Talvez não tenha conseguido completar totalmente, mas independente disso foi uma experiência de aprendizado, e espero que vos agrade :) 

Eu dividi em 2 branches, uma até 23:59 do sábado (dev-v.01), pois foi ali que terminou os 5 dias corridos do prazo, e a outra (dev-v.02) vou entregar na segunda pela manhã, como foi autorizado pela Letícia, o que permitiu eu finalizar com tranquilidade.

Não sei como vocês lidam com isso mas eu tentei minimizar ao máximo o uso de IA no desenvolvimento, baseando-me apenas em documentação, videos, tutoriais, mas claro que não foi 100%, tentei usá-la de maneira consciente e mais como ferramenta de pesquisa rápida.

No mais é isso, quero muito seguir em frente com a vaga por isso dei meu máximo nesse desafio, espero entrar em contato com vocês em breve, muito obrigado!

Meu currículo está anexado mas segue meus contatos:

https://www.linkedin.com/in/viniciusaraujomessias/

https://github.com/vinicete