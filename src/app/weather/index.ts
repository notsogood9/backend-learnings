import express from 'express'
import type { Application } from 'express'
import todoRouter from '../todo/routes.js'
//Router

export function createServerApplication(): Application  {
  const app = express();

  app.use(express.json());
  app.use('/todo', todoRouter)
  
  
  return app;
}