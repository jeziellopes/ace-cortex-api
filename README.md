# ACE Cortex API

**ACE Cortex API** is **Nodejs/Express** API with **TypeScript**,  **PostgreSQL**, **Prisma**, **ESLint** and _Jest Test Coverage_ applying concepts from **Clean Architecture** by Robert C. Martin.

---

## Non-Functional Requirements

- Typescript
- Node JS (Express)
- Prisma.io
- PostgreSQL
- Git

## Functional Requirements

- List companies endpoint
- Show company endpoint
- Migrations/Seeds
- Bônus
  - Authentication
  - CRUD

## Company Entity

```json
{
  "name": "Ace Cortex",
  "taxId": "12580915000100",
  "about": "Queremos que o nosso trabalho contribua para um Brasil mais competitivo em âmbito global, levando nossa identidade e modo de fazer para empresas mundo afora. Vamos impactar negócios de forma que sejam reconhecidos como grandes exemplos de inovação, tornando-se referência para outros negócios.",
  "demand": "13 Bilhões",
  "annual_income": "Acima de R$ 500 milhões",
}
```

---

## How to start locally

```bash
  # Install dependencies
  yarn

  # Change to develop branch
  git checkout develop

  # Generate .env
  yarn env:copy

  # Start development server
  yarn dev
```
---

## How to test locally

```bash
  # Run tests once
  yarn test

  # Run and watch tests
  yarn test:watch

  # Run and watch tests coverage
  yarn test:cov
```
---
## 🚧 Important

- In order to prevent ```CORS``` errors, run ```API Requests``` only from allowed origins or change ```allowedOrigins``` inside ```@main/config/cors.config.ts```

```js
const allowedOrigins = ['http://localhost:3000']
```


