# Modern E-Commerce Storefront

A mobile-first, responsive e-commerce storefront UI template designed as a modular foundation for a future full e-commerce application.

This repository currently documents the intended product requirements and target source structure. The application implementation and project configuration have not yet been added to the `main` branch.

## Project status

- **Current phase:** Blueprint and requirements documentation
- **Target frontend:** React, Vite, TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Icons:** Lucide React
- **State management:** Zustand when needed, particularly for cart state
- **Potential future backend:** Supabase, subject to API and schema verification
- **Transactions:** No real orders or payments during the UI-template phase

These are planned technologies and boundaries from the project prompt, not confirmation that dependencies or integrations are already installed.

## Goals

- Build a clean, modern, responsive storefront with a mobile-first approach.
- Use reusable components and a feature-based architecture.
- Provide realistic loading skeletons and clearly separated loading, empty, error, and content states.
- Prepare typed UI boundaries for future backend integration without inventing API endpoints or database schemas.
- Keep implementation safe to extend and easy to test.

## Planned storefront pages

1. Home
2. Categories
3. Product listing
4. Search
5. Product details
6. Cart
7. Guest checkout
8. Order confirmation
9. Payment
10. Order status
11. Not found (404)

The page list describes the intended UI scope. It does not mean these pages are implemented yet.

## Target source structure

The planned application structure is feature-based:

```text
src/
├── app/
│   ├── App.tsx
│   └── router.tsx
├── layouts/
│   └── StorefrontLayout.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── CategoryPage.tsx
│   ├── ProductListingPage.tsx
│   ├── SearchPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── OrderConfirmationPage.tsx
│   ├── PaymentPage.tsx
│   ├── OrderStatusPage.tsx
│   └── NotFoundPage.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   └── skeletons/
├── features/
│   ├── catalog/
│   ├── search/
│   ├── cart/
│   ├── checkout/
│   ├── payments/
│   └── orders/
├── stores/
├── hooks/
├── types/
├── utils/
└── styles/
    └── index.css
```

This is the target structure described in [app-struktur.md](./app-struktur.md), not a verified listing of existing source files.

## Core requirements

### UI and responsive behavior

- Design mobile first and support mobile (320–430 px), tablet (768 px), and desktop (1024–1440 px) layouts.
- Prevent horizontal overflow and ensure navigation does not obscure page content.
- Use reusable skeleton components for banners, categories, product cards, product details, cart items, order cards, and search results.
- Distinguish loading, empty, error, and valid-content states.
- Use accessible labels, visible focus states, keyboard navigation, sufficient contrast, and reduced-motion support.

### Guest-only customer flow

- No customer login, registration, authentication, accounts, or profiles.
- Guest checkout is the only planned customer checkout flow.
- A future order-status page must use a secure guest-access mechanism; an easily guessed order number must not be the sole authorization mechanism.

### Data and transaction boundaries

- Do not invent products, categories, prices, stock counts, orders, business details, or payment statuses.
- Do not automatically add cart items.
- Local cart prices must never be treated as authoritative totals.
- Do not create real orders or enable real payments before backend integration is implemented and verified.
- Do not treat a browser redirect or local state as proof of payment success.
- Do not add database migrations, change secrets, or deploy without explicit approval.

### Future backend security

Before backend integration, verify the actual API contracts, database tables and columns, permissions, and response formats. When implemented, the backend must validate inputs, recalculate prices and totals, verify stock, prevent duplicate submissions, protect guest order access, and verify payment status server-side. No secrets may be included in the frontend bundle.

## Skeleton and state components

The prompt calls for reusable components such as:

- `Skeleton`, `SkeletonText`, `SkeletonCircle`, `SkeletonImage`, and `SkeletonButton`
- `BannerSkeleton`, `CategorySkeleton`, `ProductCardSkeleton`, and `ProductGridSkeleton`
- `ProductDetailSkeleton`, `CartItemSkeleton`, `OrderCardSkeleton`, and `SearchResultsSkeleton`
- `PageLoadingState`, `EmptyState`, and `ErrorState`

These are planned components; their presence should be confirmed during implementation audit.

## Getting started

Setup commands are intentionally omitted for now. At the time of this README update, the default branch contains the project documentation but no `package.json` or `src/` directory. Therefore, install, development, build, lint, and test commands cannot yet be verified.

Once the application scaffold is added:

1. Inspect the package manifest and lockfile.
2. Install dependencies using the repository's documented package manager.
3. Add and verify the development, type-check, lint, test, and build scripts.
4. Document the verified commands here.

Do not assume a command is supported until it exists in the project configuration and has been checked.

## Project documentation

- [`app-struktur.md`](./app-struktur.md) — planned source directory and file structure.
- [`prompt.md`](./prompt.md) — master prompt, locked requirements, design guidance, security boundaries, and execution workflow.

## Development workflow

Follow the documented workflow:

**AUDIT → REQUIREMENTS → RECOMMENDATIONS → APPROVAL → IMPLEMENTATION → VERIFICATION**

Audit the existing repository before implementation. Present gaps and risks before making changes. Do not modify files before the implementation scope is approved. Database changes, secrets, deployments, changes to `main`, and merges require explicit approval.

## Current verification status

- [x] Requirements and target structure documented.
- [ ] React/Vite application scaffold committed.
- [ ] Storefront pages implemented.
- [ ] Responsive behavior tested at target viewport sizes.
- [ ] Type checking, linting, tests, and production build verified.
- [ ] Backend and payment integration audited and approved.

Checklist items reflect the repository state to be verified; they must only be marked complete when evidence is available.

## Audit scope and limitations

This README is based on `app-struktur.md` and `prompt.md`, plus a read-only check of the default branch contents. The current `main` branch contains `README.md`, `app-struktur.md`, and `prompt.md`. No `package.json` or `src/` directory was found in the checked branch. Runtime behavior, dependencies, CI, backend, database, payment integration, secrets, and deployment have not been verified.
