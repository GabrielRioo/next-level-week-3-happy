# Happy

### Estrutura Inicial:
* `yarn create react-app <nomeProjeto> --template typescript`- cria o projeto em REACT
   * **Arquivos que podem ser deletados:**
   * /public
      * favicon.ico
      * logo192.png
      * logo512.png
      * manifest.json
      * robots.txt
   * /src
      * App.css
      * App.test.tsx
      * index.css
      * logo.svg
      * serviceWorker.ts
      * setupTests.ts
   * README.md

### Conceitos:
* [**Leaflet**](https://leafletjs.com/) - API - biblioteca de mapas
* [**React Leaflet**](https://react-leaflet.js.org/) - API - biblioteca de mapas
* [**OpenStreetMap](https://www.openstreetmap.org/#map=4/-15.13/-53.19) 
* JSX: Java Script + XML (codigo de HTML dentro do JS)
* Componentes:
   * Primeira Letra maisucula.
   * SEMPRE retornam funções HTML/JSX.
   * O que se repete muito entre as telas, pode ser um componente.
* **Variavel Ambiente** - (.env) - TODAS devem começar com: REACT_APP_<nome> = ...

### Hierarquia:
* **/node_modules**
* **/public**
   * **index.html**
* **/src**
   * **/pages** - Onde ficaram todas as paginas
   * **/images** - imagens
   * **/styles** - css
      * **/pages** - Estilo das paginas
         * **landing.css**
      * **global.css** - utilização para todas paginas
* **.env** - Variavel ambiente - Apenas para o projeto. para não subir ao Github

### Pacotes:
* `yarn add react-icons` - adicionar icones
* `yarn add react-router-dom` - gerencidor de rotas
   * `yarn add @types/react-router-dom -D` - **BrowserRouter**, Switch, Route...
* `yarn add leaflet react-leaflet` - API de Mapas
   * Latitude e Longtud - maps.google.com

