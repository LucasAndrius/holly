import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
  projectId: "ntpxgn8o",
  dataset: "production",
  title: "Holly Agência",
  apiVersion: "2023-11-11",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});

export default config;
