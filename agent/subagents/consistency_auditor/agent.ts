import { defineAgent } from "eve";
export default defineAgent({
  model: "openai/gpt-6-luna-fast",
  reasoning: "high", description: "Independently detects contradictions, missing dependencies, ambiguous wording, duplicated requirements, cross-domain contract mismatches, and incomplete decisions in ASRI STORE specifications." });
