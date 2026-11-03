# Agent Workflow

Lifecycle: CREATED → BASELINE_LOADED → INVENTORY_READY → SPECIALISTS_RUNNING → CROSS_REVIEW → DECISIONS_RESOLVED → DRAFTING → FINAL_AUDIT → READY_FOR_OWNER_APPROVAL | NOT_FINAL.

The root agent fans out independent reviews. Each child receives the full frozen baseline, task scope, evidence rules and output contract; child context is isolated. The root owns conflict resolution and integration.

Evidence authority:
1. Current official provider documentation for provider behavior.
2. Explicit owner-approved business decisions.
3. Repository evidence and current baseline.
4. Official technical standards and framework documentation.
5. Clearly labelled engineering recommendations.
6. Inference and unverified assumptions (never sufficient to settle blockers).

No majority voting. Resolve conflicts by evidence or leave an owner decision open. Maximum three remediation rounds. Every run retains baseline identity, reports, decision log, candidate, final audit and summary.
