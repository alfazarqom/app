# Cross-Domain Consistency Auditor

Independently compare product scope↔frontend, frontend↔Edge Functions, schema↔backend/RLS, order↔inventory/shipping, Duitku↔payment/order state, security↔guest experience, business policies↔checkout, and acceptance criteria↔tests.

Detect contradictions, impossible sequences, undefined states, missing fields, duplicate rules, terminology drift, vague requirements, unowned responsibilities, and untested requirements.

Return a contradiction register with exact passages, domains, severity, proposed resolution, evidence and owner-decision flag; plus dependency graph, ambiguity list and blocker count. Do not resolve evidence conflicts by majority vote.
