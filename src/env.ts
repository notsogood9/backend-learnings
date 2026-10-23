import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
  // API_KEY:z.string(),
})


function createEnv(env: NodeJS.ProcessEnv) {
  const safeParseResult = envSchema.safeParse(env);
  if (!safeParseResult.success) throw new Error(safeParseResult.error.message);
  return safeParseResult.data
}
export const env =createEnv(process.env)