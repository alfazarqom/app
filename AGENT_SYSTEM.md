# Multi-Agent System Contract

## Objective

Turn the repository's current `master-prompt.md` into a complete, internally consistent, evidence-grounded MASTER PROMPT FINAL for ASRI STORE.

## Roles

1. **Root Orchestrator** — owns the workflow, task decomposition, evidence ledger, decision log, conflict resolution, integration, and final quality gate.
2. **Product Requirements Agent** — scope, customer journey, feature requirements, business rules, merchant information, and acceptance criteria.
3. **Frontend Architecture Agent** — React/Vite/TypeScript architecture, routes, UI states, data flow, state management, accessibility, and performance.
4. **Backend Architecture Agent** — Supabase schema, constraints, transactions, Edge Functions, data ownership, storage, and deployment boundaries.
5. **Duitku Specialist Agent** — official POP integration, invoice creation, POP JavaScript, callback, signature, payment status, expiry, retries, and sandbox tests.
6. **Security Auditor Agent** — threat model, guest access, secrets, RLS, abuse prevention, callback authenticity, idempotency, privacy, and data exposure.
7. **QA Engineer Agent** — test strategy, acceptance criteria, negative paths, concurrency, integration, regression, and release gates.
8. **Consistency Auditor Agent** — cross-domain contradictions, missing dependencies, duplicated rules, ambiguity, and unresolved decisions.
9. **Documentation Editor Agent** — integrates only resolved requirements into the final prompt; cannot silently make business or architecture decisions.

## Workflow

1. Freeze and identify the baseline by Git ref and blob SHA.
2. Extract a structured requirement inventory without changing meaning.
3. Delegate independent domain reviews in parallel.
4. Require each specialist to return findings with evidence, severity, impact, recommendation, and confidence.
5. Cross-review domain boundaries: product↔frontend, frontend↔backend, backend↔payment, payment↔security, security↔QA.
6. Consolidate contradictions and missing decisions in `DECISION_LOG.md`. Do not guess; classify as confirmed, recommended, or owner decision required.
7. Ask the editor to produce a candidate only after the orchestrator resolves all blocking conflicts.
8. Run a fresh consistency and security audit against the candidate.
9. Iterate a maximum of three remediation rounds per run. If blockers remain, stop with `NOT FINAL` and list required decisions.
10. Produce a final quality report and candidate artifact. Do not overwrite `master-prompt.md` or push to `main` automatically.

## Required artifacts per run

- `00-baseline.md`
- `01-requirement-inventory.md`
- `02-agent-reports/` (one report per specialist)
- `03-cross-review.md`
- `04-decision-log.md`
- `05-master-prompt-candidate.md`
- `06-final-audit.md`
- `07-run-summary.md`

## Evidence and truth rules

- Evidence classes: `BASELINE`, `OFFICIAL_SOURCE`, `REPO_EVIDENCE`, `INFERENCE`, `UNVERIFIED`.
- Cite the exact baseline section or official source URL for material claims.
- No invented merchant identity, address, policy, legal status, stock behavior, fee, shipping tariff, API field, endpoint, signature formula, or provider capability.
- For Duitku, consult current official documentation at https://docs.duitku.com/pop/id/ before asserting request fields, signature composition, callback semantics, POP behavior, or expiry behavior.
- A recommendation is not a confirmed requirement until explicitly classified.
- Conflicts are resolved by explicit evidence and declared authority, not majority vote.

## Definition of done

A candidate may be marked `FINAL CANDIDATE — READY FOR OWNER APPROVAL` only when:
- all critical and high findings are resolved or explicitly accepted by the owner;
- no unresolved cross-domain contradiction remains;
- every feature has testable acceptance criteria;
- security and payment lifecycle are coherent end-to-end;
- all external API claims are supported by current official documentation;
- all unknown merchant-specific values remain configurable and unpublished;
- the final audit finds zero blockers.

The system must not claim owner approval or mark the source file as finalized without an explicit approval event.
