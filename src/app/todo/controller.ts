import type {Request, Response} from 'express'
import type { Todo } from "../../validation/todo.schema.js";
import {todoValidationSchema} from "../../validation/todo.schema.js"

class TodoController{
  private _db: Todo[]

  constructor() {
    this._db=[]
  }

  public handleGetAllTodos(req: Request, res: Response) {
    const todos = this._db
    return res.json({todos})
  }

  public async handdleInsertTodo(req: Request, res: Response) {
    try { 
      const unvalidated = req.body
      const validationResult = await todoValidationSchema.parseAsync(unvalidated);
      this._db.push(validationResult);
      return res.status(201).json({todo: validationResult})
    } catch (error) {
      return res.status(500).json(error)
    } 
  }
}

export default TodoController

