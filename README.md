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
  name: "Ace Cortex",
  photo: "https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png",
  taxId: "12580915000100",
  about: "A ACE Cortex desenvolve empresas, pessoas e negócios por meio da inovação, capacitando, solucionando desafios, gerando resultados e promovendo a transformação cultural.",
  demand: 100000000,
  annualIncome: "Acima de R$ 50 milhões"
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
const allowedOrigins = ["http://localhost:3000"]
```


