
#  Pokémon Battle Simulator

A **full-stack Pokémon Battle Simulator** built with:
-  **Node.js + TypeScript** (backend)
-  **React + Vite + TypeScript** (frontend)
-  **Vitest + Testing Library** (tests)
-  **Docker Compose** (optional)

---

## 🚀 Features
Working API endpoint: accepts two Pokémon names and returns a battle result  
Simple React frontend: trigger battles & display results  
Unit & integration tests: backend & frontend  
Docker Compose support: run locally in containers  
Clean & extensible architecture  

---

##  Project Structure
```
PokemonBattleSimulator/
├── backend/         # Node.js + TypeScript backend
├── frontend/        # React + Vite frontend
├── docker-compose.yml
├── README.md
├── .gitignore
└── pokedex.json     # Pokémon dataset
```

---

## Run Locally

### Clone the repo
```bash
git clone https://github.com/Elias101984/PokemonBattleSimulator.git
cd PokemonBattleSimulator
```

---

### 1 Backend
```bash
cd backend
npm install
npx ts-node-dev src/server.ts
```
 Runs on: [http://localhost:5000](http://localhost:5000)

---

###  2 Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on: [http://localhost:5173](http://localhost:5173)

---

##  Run with Docker
Make sure you have Docker installed: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

```bash
docker-compose up --build
```

 Frontend: [http://localhost:5173](http://localhost:5173)  
 Backend: [http://localhost:5000](http://localhost:5000)

---

##  Run Tests

### Backend tests:
```bash
cd backend
npx jest
```

### Frontend tests:
```bash
cd frontend
npm test
```

---

##  API Reference

### POST `/api/battle`
Simulate a Pokémon battle.

#### Request Body:
```json
{
  "pokemon1": "Bulbasaur",
  "pokemon2": "Charmander"
}
```

#### Response:
```json
{
  "winner": "Bulbasaur",
  "explanation": "Bulbasaur wins with higher stats."
}
```

---

##  Notes & Implementation Choices
 Used **Vite + React** for faster builds & modern DX.  
 Chose **Vitest** because it integrates cleanly with Vite.  
 Used **Axios** on frontend for HTTP requests.  
 Dockerized for reproducibility & easy deployment.  
 `.gitignore` excludes IDE, build & OS artifacts for clean repo.

---

##  Repository
 [https://github.com/Elias101984/PokemonBattleSimulator](https://github.com/Elias101984/PokemonBattleSimulator)

---
