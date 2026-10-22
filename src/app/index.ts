import express from 'express'
import type { Application } from 'express'

export function createServerApplication(): Application  {
  const app = express();

  app.get('/', function (req, res) {
    return res.json({message:` heelo ji, kaise ho`})
  })

  
  app.get('/kkrh', function (req, res) {
    return res.json({message:` hello ji shreya, kaise ho`})
  })
  return app;
}