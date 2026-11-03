# ASRI Master Prompt Finalizer — Multi-Agent System

A repository-local multi-agent workflow for auditing and finalizing `master-prompt.md`.

## Baseline

- Source: [`master-prompt.md`](./master-prompt.md)
- Baseline branch: `main`
- Baseline blob SHA: `fe34b959fec7f25dba8cba41e2a271784c8db879`
- Frozen sandbox copy: `agent/sandbox/workspace/master-prompt.md`
- The frozen copy is an immutable run input, not a second editable source of truth.

## Runtime

This project uses [eve](https://eve.dev/) for durable orchestration and specialist subagents.

Requirements:
- Node.js supported by the installed eve release
- npm
- Vercel AI Gateway credentials or a configured provider login
- A model supported by the selected eve runtime

## Run locally

```bash
npm install
npx eve@latest info
npm run dev
```

Use the local eve terminal UI to ask the root orchestrator to run a complete finalization cycle against the frozen baseline. The orchestrator writes run artifacts under `output/<run-id>/`.

## Important operating rules

- This system audits and drafts. It does not change `main`, merge, deploy, or publish a final prompt automatically.
- Each run preserves its baseline, specialist reports, decision log, draft, and final audit.
- Unverified facts are marked `UNVERIFIED`; agents must not invent business facts, API contracts, or merchant requirements.
- Official Duitku documentation is the authority for Duitku behavior.
- Human approval is required before declaring a version final or replacing the repository's source prompt.
- eve is currently in preview; verify runtime behavior against the installed package's bundled documentation before production use.
