#!/bin/bash
echo "========================================================"
echo "  FutbolLive Pro - 10,000 Concurrency Platform"
echo "========================================================"

cd "$(dirname "$0")"

echo "1. Starting Fastify Backend on http://localhost:4000..."
(cd backend && npm run dev) &
BACKEND_PID=$!

echo "2. Starting Vite Frontend on http://localhost:3000..."
(cd frontend && npm run dev) &
FRONTEND_PID=$!

echo "Ilova ishga tushdi: http://localhost:3000"

trap "kill $BACKEND_PID $FRONTEND_PID" EXIT
wait
