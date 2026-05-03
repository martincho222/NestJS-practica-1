<p align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo" />
  </a>
</p>

<h1 align="center">Car Dealership API</h1>

<p align="center">
  A RESTful API for managing a car dealership's vehicle and brand inventory, built with <a href="http://nestjs.com/" target="_blank">NestJS</a> and TypeScript.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-11-E0234E?style=flat-square&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-22-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/License-UNLICENSED-lightgrey?style=flat-square" alt="License" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Project Structure](#project-structure)

---

## Overview

**Car Dealership API** provides full CRUD operations for two core resources — **Cars** and **Brands** — and exposes a `/seed` endpoint to populate the in-memory store with realistic sample data. All identifiers are UUID v4 and all incoming payloads are validated via `class-validator`.

> **Note:** Data is stored in-memory. It resets on every server restart. A seed endpoint is provided to quickly restore sample data.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [NestJS](https://nestjs.com/) | ^11.0 | Application framework |
| [TypeScript](https://www.typescriptlang.org/) | ^5.7 | Language |
| [class-validator](https://github.com/typestack/class-validator) | ^0.14 | DTO validation |
| [class-transformer](https://github.com/typestack/class-transformer) | ^0.5 | Object transformation |
| [uuid](https://github.com/uuidjs/uuid) | ^11.0 | Unique ID generation |
| [Jest](https://jestjs.io/) | ^29.7 | Unit & E2E testing |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Running the Application

```bash
# Development (watch mode)
npm run start:dev

# Production build
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

The API will be available at **`http://localhost:3000`**.

To populate the database with sample data after startup:

```
GET http://localhost:3000/seed
```

---

## API Reference

### Cars

Base path: `/cars`

| Method | Endpoint    | Description           | Body required |
|--------|-------------|-----------------------|:---:|
| `GET`    | `/cars`     | Retrieve all cars     | No |
| `GET`    | `/cars/:id` | Retrieve a car by ID  | No |
| `POST`   | `/cars`     | Create a new car      | Yes |
| `PATCH`  | `/cars/:id` | Update a car by ID    | Yes |
| `DELETE` | `/cars/:id` | Delete a car by ID    | No |

**Request body** (`POST` / `PATCH`):

```json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": "2023"
}
```

**Response example** (`GET /cars/:id`):

```json
{
  "id": "a3bb189e-8bf9-3888-9912-ace4e6543002",
  "brand": "Toyota",
  "model": "Camry",
  "year": "2023"
}
```

---

### Brands

Base path: `/brands`

| Method | Endpoint      | Description             | Body required |
|--------|---------------|-------------------------|:---:|
| `GET`    | `/brands`     | Retrieve all brands     | No |
| `GET`    | `/brands/:id` | Retrieve a brand by ID  | No |
| `POST`   | `/brands`     | Create a new brand      | Yes |
| `PATCH`  | `/brands/:id` | Update a brand by ID    | Yes |
| `DELETE` | `/brands/:id` | Delete a brand by ID    | No |

**Request body** (`POST` / `PATCH`):

```json
{
  "name": "Toyota"
}
```

**Response example** (`GET /brands/:id`):

```json
{
  "id": "c5073cb1-a8f4-4a2d-b0a3-29cf78d8b73f",
  "name": "Toyota",
  "createdAt": 1714694400000,
  "updatedAt": 1714694500000
}
```

---

### Seed

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`    | `/seed`  | Populate the in-memory store with sample cars and brands |

Preloads vehicles from brands including Toyota, Honda, BMW, Mercedes-Benz, Volkswagen, and Ford.

---

## Testing

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# Test coverage report
npm run test:cov

# End-to-end tests
npm run test:e2e
```

---

## Project Structure

```
src/
├── cars/
│   ├── dto/                  # CreateCarDto, UpdateCarDto
│   ├── interfaces/           # Car interface
│   ├── cars.controller.ts    # Route handlers
│   ├── cars.service.ts       # Business logic & in-memory store
│   └── cars.module.ts
├── brands/
│   ├── dto/                  # CreateBrandDto, UpdateBrandDto
│   ├── entities/             # Brand entity class
│   ├── brands.controller.ts
│   ├── brands.service.ts
│   └── brands.module.ts
├── seed/
│   ├── data/                 # cars.seed.ts, brands.seed.ts
│   ├── seed.controller.ts
│   ├── seed.service.ts
│   └── seed.module.ts
├── app.module.ts
└── main.ts
```
