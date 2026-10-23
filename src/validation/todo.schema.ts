import {z} from 'zod'
import { string } from 'zod/v3'

export const todoValidationSchema = z.object({
  id: z.string().describe('Id of the Todo'),
  title:z.string().describe('Title of the todo'),
  description: z.string().optional().describe('Description for the todo'),
  isCompleted:z.boolean().default(false).describe('if the todo item is completed or not'),
})

export type Todo = z.infer<typeof todoValidationSchema>
//isequalto

// export interface ITodo{
//   id: string
//   title: string
//   description?: string
//   isCompleted:boolean
// }