import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./Schema";

// Ensure the environment variable is set
const connectionString = process.env.NEXT_PUBLIC_DRIZZLE_DB;
if (!connectionString) {
  throw new Error("No database connection string was provided to `neon()`.");
}

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });
