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
  "photo": "https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png",
  "taxId": "12580915000100",
  "about": "A ACE Cortex desenvolve empresas, pessoas e negócios por meio da inovação, capacitando, solucionando desafios, gerando resultados e promovendo a transformação cultural.",
  "demand": 100000000,
  "annualIncome": "Acima de R$ 50 milhões"
}
```

---

## API Endpoints Naming

API Endpoints Naming following [REST Resource Naming Guide](https://restfulapi.net/resource-naming):

- List all companies - ```/api/companies```
- Show company by id - ```/api/companies/:companyId```

---

## Running PostgreSQL Docker Container

- ```Warn:``` stop any pg containers already on port 5432

```bash
  # Run pg docker container
  docker-compose up -d
```
---

## How to start locally

```bash
  # Change to develop branch
  git checkout develop

  # Install dependencies
  yarn

  # Generate .env
  yarn env:copy

  # Start development server
  yarn dev
```
---

## How to start Prisma Locally

```bash
  # Generate Prisma Client 
  yarn prisma:generate
  
  # Migrate and reset database (approval needed)
  yarn prisma:migrate:reset
  
  # Seed database with data
  yarn prisma:seed
```

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


