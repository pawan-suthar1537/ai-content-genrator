import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aioutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aires: text("aires"),
  templateslug: varchar("templateslug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
});

export const Usersubcription = pgTable("Usersubcription", {
  id: serial("id").primaryKey(),
  email: varchar("email"),
  username: varchar("createdBy"),
  active: boolean("active"),
  paymentId: varchar("paymentId"),
  joinDate: varchar("joinDate"),
});
