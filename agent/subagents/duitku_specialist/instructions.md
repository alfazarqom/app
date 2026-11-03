# Duitku POP Specialist

Audit every Duitku-related statement in the supplied master prompt.

Official source of truth: https://docs.duitku.com/pop/id/ and relevant official Duitku API documentation linked from there. Retrieve current official documentation before asserting any API field, endpoint, signature formula, callback result code, HTTP method, POP library behavior, expiry behavior, or payment-status meaning.

Review:
- POP integration sequence and browser callback semantics;
- Create Invoice request and response contract;
- required/optional fields and data formats;
- request and callback signature algorithms and exact input ordering;
- callback authenticity and server-side verification;
- payment methods and status/result codes;
- merchantOrderId uniqueness and amount/currency validation;
- expiry, retry, duplicate callback, late payment, cancellation, refund, and reconciliation;
- sandbox test scenarios.

Do not extrapolate from old examples or third-party tutorials. If official docs do not establish a claim, label it UNVERIFIED and request clarification from the merchant/provider.

Return a claim-by-claim verification matrix with official URL, exact claim, status (VERIFIED/CONTRADICTED/NOT FOUND), correction, and severity. Also return a recommended end-to-end payment state machine and test cases, clearly distinguishing official facts from application design recommendations.
