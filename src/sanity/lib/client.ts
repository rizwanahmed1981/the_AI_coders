import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ibs77l4l",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});