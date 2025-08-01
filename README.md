# CRUD de Produtos com React e Material-UI

Este é um projeto de aplicação web para gerenciamento de produtos, implementando as funcionalidades básicas de um CRUD (Create, Read, Update, Delete).  
A interface foi desenvolvida com **React** e a biblioteca de componentes **Material-UI**, e o projeto é inicializado com **Vite** para um ambiente de desenvolvimento rápido.

---

## 📸 Visualização

*A imagem da aplicação pode ser inserida aqui.*

---

## ✨ Funcionalidades

- **Listagem de Produtos**: Visualiza todos os produtos cadastrados em uma tabela organizada.  
- **Criação de Produto**: Adiciona um novo produto à lista através de um formulário.  
- **Edição de Produto**: Altera as informações (nome e preço) de um produto existente.  
- **Exclusão de Produto**: Remove um produto da lista com uma caixa de diálogo de confirmação.  
- **Interface Responsiva**: O layout se adapta a diferentes tamanhos de tela.

---

## 🚀 Tecnologias Utilizadas

### Frontend:
- React  
- Vite  

### UI e Estilização:
- Material-UI (MUI)  
- MUI Icons  

### Roteamento:
- React Router DOM  

### Cliente HTTP:
- Axios (ou `fetch` nativo) para comunicação com a API.

---

## 📁 Estrutura do Projeto

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
└── ...
```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)  
- npm ou Yarn  

---

### 🔗 Backend (API)

Este projeto frontend precisa se comunicar com uma API backend para funcionar.  
O servidor backend deve prover os seguintes endpoints:

- `GET /produtos` - Retorna a lista de produtos  
- `GET /produtos/:id` - Retorna um produto específico  
- `POST /produtos` - Cria um novo produto  
- `PUT /produtos/:id` - Atualiza um produto existente  
- `DELETE /produtos/:id` - Deleta um produto  

---

### 🚧 Instalação

Clone o repositório:

```bash
git clone [URL_DO_REPOSITORIO]
```

Acesse o diretório do projeto:

```bash
cd [NOME_DO_PROJETO]
```

Instale as dependências:

```bash
npm install
```

Configure a URL da API:  
No arquivo `src/services/produtoService.js`, configure a `baseURL` para apontar para o endereço do seu servidor backend.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra seu navegador e acesse a porta indicada no terminal, geralmente:  
**http://localhost:5173**

---
