# Quality Gates

A. Baseline: source ref and blob SHA recorded; frozen input immutable.
B. Specialist coverage: product, frontend, backend, Duitku, security and QA reports complete; findings have evidence, severity, impact and recommendation.
C. Consistency: no unresolved blocker; frontend/backend/database/payment contracts agree; critical states define authority and failure handling; critical requirements have acceptance criteria and tests.
D. Candidate: no fabricated merchant facts or API details; no client secrets; guest access and tracking authorization explicit; payment confirmation server-authoritative; merchant policies match real operations or remain configurable.
E. Final audit: consistency/security re-audit candidate; QA verifies traceability and negative paths; max three remediation rounds; zero blockers and no unresolved owner decisions for READY FOR OWNER APPROVAL.

Statuses: NOT FINAL; READY FOR OWNER APPROVAL; FINAL only after explicit owner approval recorded with date and candidate SHA.
