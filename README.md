# Linkr

O Linkr é uma rede social desenvolvida para web que permite que os usuários realizem seu cadastro, façam login e interajam com uma comunidade virtual através do compartilhamento de posts. 

Este projeto faz parte do meu portfólio pessoal e foi desenvolvido em equipe com mais três desenvolvedores ([Mathews](https://github.com/PQPMath3ws), [Rubia](https://github.com/RubsRafa) e [Francisco](https://github.com/franciscojrdev)). 
Você pode experimentá-lo [aqui](https://projeto-frontend-linkr.vercel.app/). 

## Funcionalidades

- Cadastro e login de usuário
- Seguir ou deixar de seguir um usuário
- Criar uma publicação
- Timeline com as publicações de quem o usuário já segue
- Curtir, comentar e repostar publicações
- Vizualizar comentário e pessoas que curtiram uma publicação
- Filtrar as postagens através das hashtags utilizadas
- Vizualiazr as hastags que estão em alta no momento

## Desenvolvimento
As seguintes ferramentas foram utilizados na construção do projeto:
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Postgres-%2320232a.svg?&style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-context%20api%20-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-Tooltip-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-react%20icons-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-tagify-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-node%20js%20-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-express-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-JOI-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-bcrypt-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/.env-%2320232a.svg?&style=for-the-badge&logo=.ENV"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JWT-JSON%20Web%20Tokens-%2320232a.svg?&style=for-the-badge&logo=JSON%20Web%20Tokens"/>
</p>

## Iniciando

### Instalação

1. Clone o repositório back-end disponível em https://github.com/mmagalhaesjr/projeto-backend-linkr e siga as intruções para executá-lo
2. Clone este repositório front-end
3. Instale as dependências:
```bash
npm i
```
4. Crie um arquivo .env na raiz do projeto conforme o arquivo .env.example e defina a variável de ambiente REACT_APP_API_URL de acordo com a porta em que o back-end estiver rodando em seu computador. Exemplo: 
```bash
REACT_APP_API_URL=//localhost:5001
```
5. Rode o front-end através do comando:
```bash
npm start
```
6. Opcionalmente, pode ser feito o build do projeto através do comando:
```bash
npm run build
```
7. Finalmente, acesse http://localhost:3000 através do seu browser
