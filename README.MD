# API Formula 1 - Node.js

## 📌 Sobre o Projeto
Este projeto é uma API minimalista desenvolvida em **Node.js** para fornecer informações sobre a Fórmula 1, incluindo pilotos, equipes, corridas e estatísticas. A API retorna dados no formato JSON e pode ser usada para projetos pessoais ou integrações.

## 🚀 Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **Fastify.js** - Framework minimalista para APIs
- **Cors** - Middleware para habilitar requisições de diferentes origens
- **Axios** - Para consumir dados externos (se aplicável)

## 📦 Instalação e Execução
### 1️⃣ Clone este repositório:
```sh
git clone https://github.com/BennerDias/nodeJS_API_Formula1.git
```

### 2️⃣ Acesse a pasta do projeto:
```sh
cd nodeJS_API_Formula1
```

### 3️⃣ Instale as dependências:
```sh
npm install
```

### 4️⃣ Execute o servidor:
```sh
npm start
```

O servidor será iniciado na porta definida no código (padrão: **3000**). Você pode acessar via **http://localhost:3000**.

## 📡 Rotas da API
| Método | Rota               | Descrição                                      |
|--------|-------------------|--------------------------------|
| GET    | `/drivers`        | Retorna a lista de pilotos de F1  |
| GET    | `/escuderias`        | Retorna a lista de equipes de F1  |
| GET    | `/races`       | Retorna informações sobre corridas |
| GET    | `/classificacao`  | Retorna a classificação atual da F1 | (Função ainda não implementada)

## 📌 Exemplo de Requisição
### 🔹 Obter Lista de Pilotos
```sh
curl -X GET http://localhost:3000/pilotos
```
#### 🔹 Resposta JSON:
```json
[
  {
    "id": 1,
    "nome": "Lewis Hamilton",
    "equipe": "Mercedes",
  },
  {
    "id": 2,
    "nome": "Max Verstappen",
    "equipe": "Red Bull Racing",
  }
]
```

## 📜 Licença
Este projeto está licenciado sob a licença **MIT**. Sinta-se à vontade para usá-lo e modificá-lo! 🏎️💨

---
📌 **Criado por [Benner Dias](https://github.com/BennerDias)**

