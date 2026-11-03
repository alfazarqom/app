import { defineAgent } from "eve";

export default defineAgent({
  model: "openai/gpt-6-luna-fast",
  reasoning: "high",
  description: "Specialist auditor for Duitku POP official documentation, Create Invoice, POP JavaScript, callbacks, signatures, payment lifecycle, and sandbox verification.",
});
