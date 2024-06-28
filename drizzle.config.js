/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/Schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:XfKB2xuem9QD@ep-silent-math-a5b3j5tl.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
