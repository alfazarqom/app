# Implementation Notes

V1 adds an eve root orchestrator, specialist subagents and workflow contracts to a repository that previously contained a single Markdown prompt.

Deliberate limits:
- No GitHub write, commit, push, merge, deploy or public chat capability is granted to the agents.
- The baseline is a frozen snapshot with a recorded Git blob SHA.
- The final prompt remains a candidate until owner approval.
- eve is in preview; verify installed package docs and runtime behavior before production use.

Verification checklist:
1. npm install
2. npx eve@latest info
3. npm run build
4. npm run dev
5. Smoke-test specialist discovery and delegation.
6. Confirm /workspace/master-prompt.md is seeded.
7. Confirm run artifacts persist in /workspace/output/<run-id>/.
8. Execute a full finalization run and manually inspect its artifacts.
