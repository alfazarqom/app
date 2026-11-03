import { defineAgent } from "eve";

export default defineAgent({
  model: "openai/gpt-6-luna-fast",
  reasoning: "high",
  description: "Audits the React, Vite, TypeScript storefront frontend architecture, routes, state, UI behavior, accessibility, and performance requirements.",
});
