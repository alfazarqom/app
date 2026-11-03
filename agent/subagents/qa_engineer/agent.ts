import { defineAgent } from "eve";
export default defineAgent({
  model: "openai/gpt-6-luna-fast",
  reasoning: "high", description: "Audits testability and produces acceptance criteria, test matrices, edge cases, integration tests, security tests, and release gates for ASRI STORE." });
