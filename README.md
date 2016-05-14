# Chaordic Endpoints

Projeto teste de um encurtador de URL.


## Iniciando

A aplicação foi desenvolvida em Node.js. Ela é composta por diretórios de `rotas`, `serviços`, `modelos` e `configurações`. No diretório `rotas` está descrito todos os Endpoints disponíveis. Em `modelos` é possivel identificar as duas entidades da aplicação, são elas: Urls e Users. O relacionamento delas é a seguinte, uma Url pertence a um User, e um User tem um conjunto de Url. No diretório `serviços`, está disponível a função para gerar uma Url aleatória e a pesquisa do endpoint "stats", tanto geral como para um usuário específico. Em `configuração` estão os arquivos do banco de dados e os códigos.


### Pré-Requisitos

Esta aplicação tem como pré-requisito:
* Node.js (A instalação está no arquivo install.sh)
* MondoDB (A instalação está no arquivo install.sh)
* Mocha (Necessário para os testes)

IMPORTANTE: Para os procedimentos de Instalação e Execução, é necessário estar localizado na pasta raiz do projeto (é necessário devido a instalação dos pacotes NPM, e para o inicialização da aplicação).

Entre no diretório do projeto:

```
cd chaordic
```


### Instalação

Para instalar, execute o arquivo (necessário permissão)

```
./install.sh
```

Este procedimento irá fazer o download do Node.js, MongoDB, NPM, dependências da aplicação e do Mocha.


### Execução

Para iniciar, execute o arquivo (necessário permissão)

```
./start.sh
```

Este procedimento irá iniciar a aplicação.


## Inicializão

Por padrão a aplicação utiliza a porta 3000 para o Node.js.

Para alterar as porta da aplicação, é necessário alterar o arquivo de configuração `config.js`, localizado no diretório `config`.


## Testes

Para executar os testes, execute o arquivo

```
mocha tests/supe.test.js
```
