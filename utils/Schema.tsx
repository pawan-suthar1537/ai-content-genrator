import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aioutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aires: text("aires"),
  templateslug: varchar("templateslug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  updatedBy: varchar("updatedBy"),
});
