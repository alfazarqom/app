# Start a Finalization Run

Start the local agent with:

```bash
npm install
npm run info
npm run dev
```

In the eve terminal UI, send this task:

```text
Run a complete MASTER PROMPT FINALIZATION cycle using the frozen baseline at /workspace/master-prompt.md.

Do not edit the baseline. Read /workspace/BASELINE-MANIFEST.md and /workspace/AGENT_SYSTEM.md first. Delegate independent domain audits to every relevant specialist subagent, preferably in parallel. Produce all required artifacts under /workspace/output/<run-id>/.

Verify Duitku claims against current official documentation at https://docs.duitku.com/pop/id/. If the official source cannot be retrieved, mark the claim UNVERIFIED; do not guess.

Run cross-domain review, resolve evidence-based conflicts, record owner decisions required, ask the documentation editor to draft the complete candidate, and run independent consistency, security, and QA audits on the full candidate. Allow no more than three remediation rounds.

Do not commit, push, merge, deploy, or replace master-prompt.md. If any blocker or owner decision remains, mark the result NOT FINAL. Otherwise mark it READY FOR OWNER APPROVAL, not FINAL.
```

After the run, inspect every artifact in the output directory. Only after owner approval should the candidate be promoted to the repository's canonical `master-prompt.md`.
