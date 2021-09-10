## Boas vindas ao repositório do Projeto Infracommerce Library!
Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv 🚀


## Cenário
Uma biblioteca de uma grande cidade está com dificuldades de organizar as reservas de seus livros, hoje todo o controle é feito manualmente, para saber os livros mais reservados levaria um tempo de pesquisa nos livros de reserva.


## Instruções para a instalação do projeto:
1. Crie uma pasta para onde o projeto será clonado. Ex: Projeto-Infracommerce

2. Clone o repositório
  * `git clone git@github.com:hleoc/Projeto-Infracommerce.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-Infracommerce`

3. Instale as dependências
  * `npm install`

4. Inicializar o servidor Node
  * `npm run dev`

5. Inicializar o banco de dados
  * `sudo service mongod start`

6. Verificar se o MongoDB foi inicializado com sucesso
  * `sudo service mongod status`

7. Configure um arquivo .env com as seguintes variáveis de ambiente.
APP_SECRET=
APP_PORT=
DB=

OBS: O arquivo .env.test serve como modelo

## O que foi desenvolvido no back-end
Foi desenvolvida uma API utilizando a arquitetura RESTful!

- Administrador (bibliotecário) pode:
	- cadastrar novos livros
	- pesquisar todos os livros, podendo filtrar por cada detalhe e retorno com paginação
	- editar os livros existentes
	- remover os livros existentes
	- cadastrar novos usuários, sendo comum ou novos administradores
	- criar uma nova reserva, entre livro e usuário comum
	- pesquisar todas as reservas, podendo filtrar por cada detalhe e retorno com paginação
	- finalizar uma reserva

- Os livros devem possuir os detalhes:
	- Titulo
	- Autor
	- Categoria
	- Data de cadastro e alteração

- As reservas devem possuir os detalhes:
	- Livro
	- Usuário
	- Data da reserva
	- Data de devolução
	- Status da reserva

- O projeto deve rodar na porta 3000 no back-end.


## Arquitetura de pastas
1. Controllers: trata-se do recebimendo das requisição.
2. docs: documentação da API usando Swagger.
3. Middlewares: funções que fornecem recursos comuns para a aplicação.
4. Models: trata-se da comunicação com banco de dados.
5. routes: local onde foram criadas as rotas da aplicação.
6. Service: trata-se da validação ou regra de negócio da aplicação.
7. assets: gif da pesquisa de reserva


## Documentação das rotas da API com Swagger

Acesse a documentação copiando e colando o link em um browser: http://localhost:3000/api-docs/#/

OBS: Na documentação são encontrados exemplos de todos as requisições(entradas de dados) e a resposta destas requisições(saídas de dados).

- Aqui faço a demonstração de como pesquisar todas as reservas, podendo filtrar por cada detalhe e retorno com paginação. Desta mesma forma também  é feita a pesquisar de todos os livros.
<img width="480" heigth="300" src="./assets/search reserve.gif" />


### Data de Entrega
O projeto tem até a seguinte data para ser entregue: `10/09/2021`.


## Requisitos Obrigatórios:
- Montar todo o backend para esse sistema, usando NodeJS e MongoDB para persistir os dados.


## Tecnologias utilizadas
VSCode
NodeJS
Express
JavaScript
MongoDB
Swagger
Postman
Git/Github
Arquitetura RESTful
Arquitetura MSC