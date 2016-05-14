# Chaordic Endpoints

Projeto teste de um encurtador de URL.


## Iniciando

A aplicação foi desenvolvida em Node.js. Ela é composta por diretórios de rotas, serviços, modelos e configurações. No diretório rotas está descrito todos os Endpoints disponíveis. Em modelos é possivel identificar as duas entidades da aplicação, são elas: Urls e Users. O relacionamento delas é a seguinte, uma Url pertence a um User, e um User tem um conjunto de Url. No diretório serviços, está disponível a função para gerar uma Url aleatória e a pesquisa do endpoint "stats", tanto geral como para um usuário específico. Em configuração estão os arquivos do banco de dados e os códigos.


### Pré-Requisitos

Esta aplicação tem como pré-requisito:
* Node.js (A instalação está no arquivo install.sh)
* MondoDB (A instalação está no arquivo install.sh)
* Mocha (Necessário para os testes)


### Instalação

Para instalar, execute o arquivo (necessário permissão)

```
./install.sh
```


### Execução

Para executar, execute o arquivo (necessário permissão)

```
./init.sh
```


## Inicializão

Por padrão a aplicação utiliza as portas:

* 3000 para o Node.js
* 27017 para o MongoDB


## Testes

Para executar os testes, execute o arquivo

```
mocha tests/supe.test.js
```
