# Pokedex App

ReactJS e TypeScript

Acesso: [https://pokedex-on.herokuapp.com/](https://pokedex-on.herokuapp.com/)

## Metodologia e arquitetura

Levando em consideração que menos é mais, acredito que não seja necessário a implementação de uma dependência como o Redux nesta aplicação, principalmente porque não foi necessário gerenciar o estado de uma forma complexa/global.
Visando mantê-la mais enxuta possível em todos os níveis, até cogitei implementar a metodologia Flux, para que os componentes pudessem se comunicar entre si(fluxo de dados), mas, ao invés disso, utilizei o Hooks Context API da React para o fluxo de dados, mantendo tudo rápido e fluído.
Fazendo uma analogia, é como se esta arquitetura fosse uma fonte de água, onde o fluxo de água flui de cima para baixo.
Tudo foi encapsulado e fragmentado de acordo com suas respectivas responsabilidades, componentes funcionais, componentes de estilo e views. Ou seja, cada parte da aplicacão, por menor que seja, foi componentizada visando a reutilização de acordo com a demanda de escalabilidade.

## Tecnologias integradas

```
- Ant Design
- [x] Axios
- [x] CSR - SPA
- [x] ESlint
- [x] Express
- [x] Git
- [x] JavaScript
- [x] JSX
- [x] React - hooks: Context, useState, useEffect, useCallback, useContext
- [x] Styled Components
- [x] TypeScript
```

## Páginas

### Home - Lista de Pokemon

A página home da aplicação, lista e cria a paginação orientada pela URL com limite pre-fixado de 20 itens por página.
O campo de busca filtra por nome ou ID dos Pokemons da página vigente (O campo busca não procura em todos os Pokemons da API, apenas na página atual).
Ao clicar em um card da lista, você sera redirecionado para a página de informações de um Pokemon específico.

### Pokemon - Informações

Nesta página é renderizado o nome, id, abilidades, e estatísticas como: HP; Ataque; Defesa e velocidade da criatura selecionada.

## Baixando a aplicação

Para fazer a instalação local da aplicação, execute a seguinte linha de comando no seu terminal:

    git clone git@github.com:i-espinola/pokedex.git pokedex

## Instalando dependências

Para instalar todas as dependências exigidas pela aplicação, execute a linha asseguir:

    npm i

**Nota**:
Se após a intalação você receber informações de vulnerabilidades nas dependências instaladas, execute o seguinte comando para tentar corrigir eventuais vulnerabilidades:

    npm audit fix && npm audit fix --force

## Modo desenvolvimento

Os arquivos do código fonte da aplicação estão contidos dentro do diretório `./src`.
Após concluir a instalação de todas as dependências da aplicação, é possível executar o seguinte comando de desenvolvimento no terminal:

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3000](http://localhost:3000) para renderizar a aplicação no seu browser preferido.
A página será recarregada(Hot reload) sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros no código no seu console e no próprio browser.

## Construção do projeto

Este comando cria os arquivos de produção dentro do diretório `./build`, e transpila os arquivos fonte para a versão ES5 do JS.
Para construir a aplicação em modo producão, execute o seguinte comando:

    npm run build

## Modo produção

Este comando cria os arquivos de produção dentro do diretório ./build, e inicializa um servidor web com a tecnologia Express para servir a aplicação em questão. Os arquivos de produção são transpilados e minificados para obter uma melhor performance e otimização de trafego de dados ao acessar a aplicação.
Para construir a aplicação em modo producão, execute o seguinte comando:

    npm run start

**Nota:**
Esta aplicação esta online na plataforma Heroku, e é servida sob o link:
[https://pokedex-on.herokuapp.com/](https://pokedex-on.herokuapp.com/).
Se você possui um servidor local capaz de executar aplicações web, e quiser executar o projeto em modo produção, rode no terminal o comando `npm run start`. O servidor Express esta configurado para utilizar a porta _3030_ quando executado localmente. Desta forma, o link para acessar local é
[https://http://localhost:3030/](https://http://localhost:3030/).
