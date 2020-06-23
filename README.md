# pokedex

Consumo da pokeAPI RESTful com Anúncios ReactJS

## Instalação

**NOTA:** Para executar qualquer um dos comandos abaixo, é imprescindível ter o gerenciador de dependência NPM instalado globalmente em seu computador, e nagevar para dentro do diretório root da aplicação para que todos os comandos possam ser executados com sucesso.

### Instalação local

Para fazer a instalação de todas as dependências da aplicação, execute a seguinte linha de comando no terminal.

    npm i

**Nota**: Se após a intalação você receber informações de vulnerabilidades nas dependências instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades.

    npm audit fix && npm audit fix --force

### Modo desenvolvimento

Os arquivos do código fonte da aplicação estão contidos dentro do diretório `./src`.
Após concluir a instalação de todas as dependências da aplicação, é possível executar o comando de desenvolvimento no terminal.

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3000](http://localhost:3000) para renderizar a aplicação no seu browser preferido.
A página será recarregada sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros no código no seu console e no próprio browser.

### Construção do projeto

Este comando cria os arquivos de produção dentro do diretório `./build`. Os arquivos de produção são compilados para a versão ES5 do JS.
Para construir a aplicação em modo producão, execute o seguinte comando:

    npm run build

### Modo produção

Este comando cria os arquivos de produção dentro do diretório ./build e inicia um servidor Express para servir a aplicação em questão. Os arquivos de produção são transpilados e minificados para obter uma melhor performance e otimização de trafego de dados ao acessar a aplicação. Para construir a aplicação em modo producão, execute o seguinte comando

    npm run start

**Nota:** Esta aplicação esta online no Heroku, sob o seguinte link: [https://pokedex-on.herokuapp.com/](https://pokedex-on.herokuapp.com/). Se você possui um servidor local capaz de executar aplicações web, e quiser executar o projeto em modo produção, rode no terminal o comando `npm run start`. O servidor Express esta configurado para utilizar a porta 3030, o link para acessar localmente é [https://http://localhost:3030/](https://http://localhost:3030/).

## Uso da aplicação

Acesso: [https://pokedex-on.herokuapp.com/](https://pokedex-on.herokuapp.com/)

### Home - Lista de Pokemon

A página home da aplicação lista e cria a paginação orientada pela URL da mesma com o limite de fixado em 20 itens. O campo de busca filtra por nome dos Pokemons da página atual, o mesmo não busca Pokemons por id. Isso não foi feito devido ao tempo.
Ao clicar em um card da lista, você sera redirecionado para a página de informações de um Pokemon específico.

### Pokemon - Sobre

Nesta página é renderizado o nome, id, abilidades, e estatísticas como: HP; Ataque; Defesa e velocidade da criatura selecionada.

## Metodologia e arquitetura

Levando em consideração que menos é mais, acredito que não seja necessário a implementação de uma dependência como Redux nesta aplicação, visando mantê-la mais enxuta possível em todos os níveis. Até cogitei implementar a metodologia Flux, para que os componentes pudessem se comunicar entre si, mas ao invés disso, utilizei a React Hooks api para o fluxo de dados do Context, mantendo tudo rápido e fluído. Fazendo uma analogia, é como se a arquitetura da aplicação fosse uma fonte de água, onde o fluxo de água escorre de cima para baixo. Tudo foi encapsulado e fragmentado em suas respectivas responsabilidades, componentes, views, componentes de estilo. Ou seja, cada parte da aplicacão, por menor que seja, foi componentizada/modularizada.

## Tecnologias integradas

- [x] Ant Design
- [x] Axios
- [x] ESlint
- [x] Express
- [x] Git
- [x] JavaScript - ES5 (Express)
- [x] JSX
- [x] React - hooks: Context, useState, useEffect, useCallback, useContext
- [x] TypeScript
- [x] Styled Components
