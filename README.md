# Projeto teste para Fullstack developer - Bossabox

## Instruções para executar em produção

1. Acessar o link: https://vuttr-test.herokuapp.com/.

## Teste da api em produção usando o swagger

1. Executar o seguinte comando no terminal para receber o token de acesso a API
```
curl --request POST \
  --url https://dev-k95jas1q.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"DTnJ3sZMS220Nda7rpyNcdlKRJWWPAch","client_secret":"Fa_pzyuAkIPIXC66PSmdT6CBV9uW6M13rpD6F5QoYUF-rOPg1o20pYKuJSKx46rR","audience":"https://vuttr/api","grant_type":"client_credentials"}'
```
2. Da resposta dessa chamada copiar o valor da chave acess_token
3. Acessar o link: https://api-vuttr-test.herokuapp.com/
4. Clicar no botão Authorize
5. No campo Value colocar o valor Bearer string copiada no passo 2
6. Clicar em logar

## Execução do projeto em ambiente local

### Backend
  1. É necessário ter o Docker instalado
  2. Iniciar o container do banco de dados usando docker-compose up
  3. Entrar na pasta backend
  4. Digitar o comando npm install
  5. Após a finalização da instalação das dependências iniciar o backend usando o comando npm start

### Frontend
  1. Entrar na pasta frontend
  2. Digitar o comando yarn install
  3. Iniciar o frontend usando o comando npm start

## Observação

Para logar no app tanto em produção quanto local usar o usuário: ribedeg@7dmail.com e a senha @senhateste123



