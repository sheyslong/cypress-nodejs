# Cypress com NodeJS 

Olá pessoal! Vou apresentar para vocês uma forma bem bacana de criar testes para uma quantidade massiva de dados. 

Se você é tester, com certeza já se deparou com uma planilha de dados gigante! Na qual, mandam você validar se os dados estão corretos no sistema! Por exemplo: validar uma lista de produtos em um site de vendas, onde cada produto possue diversas informações. Como fazer isso em pouco tempo? A resposta é simples: 

Automação, meus queridos testers! 

## Tutorial

Nesse tutorial eu vou trabalhar sobre o seguinte cenário:

*Validar se os produtos contidos na [planilha](data/data.xlsx) estão com o preço correto no site.*

O teste é separado em dois passos:

1. Gerar um arquivo **json** com os dados da planilha.
2. Criar o script de teste.

*Obs: Esses passos deverão ficar dentro do seu projeto front-end* 

Para exemplificar o teste, eu criei um projetinho Node.js com o objetivo de apenas simular o processo de criação e execução do teste. O projeto, contém:

* A planilha com os dados .
* O script para gerar o arquivo json.
* O script de teste. 

A planilha de exemplo, possui o seguinte formato:

Modelo | Versão | Valor
------ | ------ | ------

No script de geração do arquivo json eu organizei os dados em um formato específico para o meu teste.

Para simular a aplicação em que desejo realizar essas validações, eu optei por escolher um site de vendas. Nesse caso eu escolhi a [submarino](https://www.submarino.com.br/).

Vamos ao que interessa! 

### Framework

O framework utilizado foi o [Cypress](https://www.cypress.io/). 

Para aqueles que não conhecem, o Cypress é um framework de testes end-to-end que diferente de outros frameworks, ele trabalha diretamente com o servidor do Node.js. Isso permite a ele responder aos eventos da aplicação em tempo real, visto que ele possui acesso ao back-end e front-end do projeto. Se quiserem conhecer mais sobre esse framework, [clique-aqui](https://medium.com/@faelbercam/um-overview-sobre-cypress-io-framework-de-automa%C3%A7%C3%A3o-de-testes-end-to-end-dc438b9ee7a1) para ler um artigo bem bacana a respeito do Cypress.
