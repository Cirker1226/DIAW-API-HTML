# DIAW API

API REST de produtos com uma interface web simples para gerenciamento de estoque.

## Tecnologias

- Node.js
- Express
- HTML, CSS e JavaScript

## Estrutura

```text
.
├── app.js              # Servidor e rotas da API
├── package.json        # Dependências do projeto
└── site/
    ├── index.html      # Interface web
    ├── server.js       # Integração da interface com a API
    └── style.css       # Estilos da interface
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
node app.js
```

3. Acesse a interface no navegador:

```text
http://localhost:3000/site/
```

O servidor utiliza a porta `3000`.

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca um produto pelo ID |
| POST | `/produtos` | Cadastra um novo produto |
| PUT | `/produtos/:id` | Atualiza um produto existente |
| DELETE | `/produtos/:id` | Exclui um produto |

## Exemplos

### Cadastrar produto

```http
POST http://localhost:3000/produtos
Content-Type: application/json
```

```json
{
  "descricao": "Mouse sem fio",
  "preco": 89.90,
  "categoria": "Periféricos",
  "estoque": 20
}
```

### Atualizar produto

```http
PUT http://localhost:3000/produtos/1
Content-Type: application/json
```

```json
{
  "descricao": "Teclado Mecânico RGB",
  "preco": 299.90,
  "categoria": "Periféricos",
  "estoque": 10
}
```

### Resposta de produto

```json
{
  "id": 1,
  "descricao": "Teclado Mecânico",
  "preco": 249.9,
  "categoria": "Periféricos",
  "estoque": 15
}
```

## Observações

- Os produtos são armazenados em um array na memória do servidor.
- Os dados são perdidos quando o servidor é reiniciado.
- A interface permite carregar, cadastrar, editar e excluir produtos.
- A API retorna status `404` quando o produto solicitado não é encontrado.
