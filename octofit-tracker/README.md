# OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Express, and MongoDB.

## Architecture

OctoFit Tracker is a full-stack application with the following components:

- **Frontend**: React 19 + Vite (Port: 5173)
- **Backend**: Node.js + Express + TypeScript (Port: 8000)
- **Database**: MongoDB (Port: 27017)

## Project Structure

```
octofit-tracker/
├── frontend/           # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── backend/            # Express + TypeScript API
    ├── src/
    ├── dist/
    ├── package.json
    ├── tsconfig.json
    └── .env
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB running locally or a MongoDB connection string

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend API will be running at `http://localhost:8000`

### MongoDB Setup

Ensure MongoDB is running on `localhost:27017` or update the `MONGODB_URI` in `.env`

```bash
# If using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## Development

### Frontend Development
- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend Development
- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript
- `npm start` - Run compiled JavaScript
- `npm run lint` - Run ESLint

## Technologies Used

### Frontend
- React 19
- Vite
- CSS3

### Backend
- Express.js
- TypeScript
- Mongoose (MongoDB ODM)
- Node.js

## Ports

- Frontend: `5173`
- Backend: `8000`
- MongoDB: `27017`

## License

MIT
