import { defineAgent } from "eve";

export default defineAgent({
  model: "openai/gpt-6-luna-fast",
  reasoning: "high",
  description: "Performs a threat-model-driven security audit of guest checkout, Supabase, RLS, secrets, order access, payment callbacks, abuse prevention, privacy, and operational controls.",
});
