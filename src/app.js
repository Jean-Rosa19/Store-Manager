const express = require('express');
const { productRouter } = require('./router/product.router');
const checkError = require('./middlewares/error');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(checkError);
app.use('/products', productRouter);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
      
module.exports = app;