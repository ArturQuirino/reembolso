# Refund App

Esta é uma aplicação para simular a tela de pedido de reembolso de um funcionário.

## Executar
Para executar a aplicação é necessário ter o NodeJs instalado. Com isto, basta acessar a pasta "refund-app" e rodar o comando `npm install` ou `yarn` e em seguida o comando `npm start` ou `yarn start`

## Gerar artefato
Para gerar o código otimizado para publicar, basta digitar o comando `npm build` ou `yarn build`

## Tecnologias utilizadas
A aplicação foi desenvolvida em React, utilizando o script 'create-react-app' como boilerplate inicial.

Como dependencias de produção adicionais foram utilizadas os ícones do pacote "fontawesome" e o "axios" para requisições http.

Como dependencias de dev, foram utilizados os pacotes para lint, prettier e sonarqube.

## Estrutura de pastas
A aplicação possui basicamente três pastas principais
- components:
  - Esta é a pasta onde ficam todos os componentes mais genéricos que podem ser utilizados por toda a aplicação.

- pages
  - Nesta pasta ficam as páginas da aplicação. Por enquanto só temos uma página.

- repositories
  - Nesta pasta ficam as funções responsáveis por obter os dados da aplicação. Por enquanto, ela busca os dados do backend.
  
  
## Premissas
Por falta de tempo, algumas decisões foram feitas e algumas premissas foram adotadas que possivemente seriam diferentes em um projeto real:
- Não foram criados testes automatizados
- Não foi utilizado TypeScript
- Não foi feito validação nos inputs do formumário
- Não foram feitas trativas para erros de api
- A aplicação foi minimamente ajustada para se comportar bem em dispositivos de tamanhos diferentes, mas não foi pensada de maneira a ter uma experiência ótima em dispositivos menores.
- Não foi utilizado nenhum transpilador de css, como SASS ou LESS.
- Algumas informações deveriam estar como variáveis de ambiente, como o endpoint da api, por exemplo.
- Em alguns momentos o layout das instruções era diferente do layout do Zeplin. Neste caso, o desenvolvedor escolheu o que mais fazia sentido para ele.
- Algumas informações do protótipo não eram retornadas da API. Neste caso, elas não foram mostradas.
  
