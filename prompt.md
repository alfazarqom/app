# MASTER-PROMPT.md

# MODERN E-COMMERCE STOREFRONT — MOBILE-FIRST SKELETON UI

## 1. ROLE

Act as an AI Prompt Engineer, Senior Frontend Developer, E-Commerce Storefront Engineer, UI/UX Designer, and Frontend Architect.

Your task is to design and build a modern e-commerce storefront template that is responsive, mobile-first, modular, and easy to extend into a complete e-commerce application.

Prioritize UI structure, user experience, reusable components, navigation, and skeleton loading states.

## 2. PROJECT OBJECTIVE

Build an e-commerce frontend template that covers all major customer-facing pages, from the homepage to guest checkout, order confirmation, payment, and order status.

At this stage, the application does not contain real products and must not process real transactions.

Use neutral skeleton UI as a visual placeholder for content areas that will eventually be populated with product data from the backend.

Do not create dummy product catalogs, fictional business data, fake orders, or payment simulations that appear to represent real transactions.

The expected result is a clean, consistent, reusable storefront foundation that is ready for backend integration in a later development phase.

## 3. LOCKED PRODUCT REQUIREMENTS

The following requirements are mandatory and must remain unchanged:

- Modern e-commerce storefront.
- Mobile-first and responsive design.
- No customer authentication.
- No customer login.
- No customer registration.
- No customer accounts or profiles.
- Guest checkout as the only customer checkout flow.
- No real products during the template development phase.
- No dummy products or fictional catalogs.
- Skeleton UI for content that is currently loading.
- Empty states when data is genuinely unavailable.
- Simple, touch-friendly primary navigation.
- No real transactions before backend integration.
- No database changes or deployments without explicit approval.

Do not change any locked requirement without explicit approval.

## 4. TECHNOLOGY STACK

Use the following technologies:

- React.
- Vite.
- TypeScript.
- Tailwind CSS.
- React Router.
- Lucide React.
- Zustand when needed for cart state or other global state.
- Supabase as a potential future backend integration target, once confirmed.

Use dependency versions compatible with the existing repository.

If a repository is available, audit its current configuration and dependencies before making changes.

Do not add unnecessary libraries.

Do not implement a backend, authentication system, or payment gateway merely because these technologies are mentioned as future integration targets.

## 5. DESIGN SYSTEM

Use a modern, clean, minimal, and professional visual style.

### Visual principles

- Neutral backgrounds.
- Soft surface colors.
- Subtle borders.
- Consistent spacing.
- Clear typography hierarchy.
- Moderate border radii.
- Minimal shadows.
- Consistent iconography.
- Product-oriented layouts.
- Clear visual hierarchy.
- Minimal decorative effects.

Use centralized design tokens for colors, spacing, typography, border radii, shadows, and breakpoints.

Do not invent brand identities, logos, store addresses, contact information, or business policies.

Use neutral visual placeholders when brand information is unavailable.

## 6. RESPONSIVE AND MOBILE-FIRST DESIGN

Design the mobile experience first.

Target viewport sizes for testing:

- Mobile: 320–430 px.
- Tablet: 768 px.
- Desktop: 1024–1440 px.

Requirements:

- No horizontal overflow.
- Use a two-column product grid on mobile when appropriate.
- Adapt grid layouts to tablet and desktop widths.
- Maintain reasonable content width constraints.
- Ensure headers and navigation do not obscure content.
- Account for safe areas in bottom navigation.
- Make buttons and inputs comfortable to use with touch.
- Ensure checkout forms are easy to use on small screens.
- Ensure modals and drawers work well on touch devices.
- Design desktop layouts proportionally rather than simply enlarging the mobile layout.

## 7. GLOBAL LAYOUT

Create a reusable `StorefrontLayout` with the following elements.

### Store Header

- Logo placeholder.
- Search input or search trigger.
- Cart icon.
- Responsive spacing.
- Subtle bottom border.
- Sticky behavior when appropriate.

Do not display a fictional brand logo.

### Main Content

- Responsive content container.
- Consistent horizontal padding.
- Consistent spacing between sections.
- Appropriate content width.
- Stable layouts during loading.

### Mobile Bottom Navigation

Use four navigation items:

1. Home.
2. Categories.
3. Cart.
4. Orders.

The Orders item must open an order-status page through a secure guest-access mechanism. Do not introduce customer accounts as a substitute.

Navigation requirements:

- Active state follows the current route.
- Use Lucide React icons.
- Give every navigation item a visible label.
- Provide sufficiently large touch targets.
- Display a cart badge only when the actual cart item count is available.
- Never display fabricated badge counts.
- Ensure navigation does not obscure content.
- Checkout and payment pages may use a more focused layout without bottom navigation when appropriate.

### Footer

Provide placeholders for store information, customer support, policies, and contact information.

Do not invent business information or unspecified links.

## 8. REQUIRED STOREFRONT PAGES

### 8.1 Home Page

Section order:

1. Store header.
2. Search bar.
3. Promotional banner skeleton.
4. Category shortcuts skeleton.
5. Featured products skeleton.
6. New arrivals skeleton.
7. Additional product section skeleton.
8. Footer.

All sections must use reusable components.

Do not invent product or category names.

When loading has finished and no data is available, display an appropriate empty state.

### 8.2 Category Page

Provide:

- Page title.
- Search entry point.
- Category skeleton.
- Category grid or list.
- Empty state.
- Loading state.
- Error state.

Do not create fictional categories.

### 8.3 Product Listing Page

Provide:

- Back navigation or breadcrumbs.
- Page title placeholder.
- Result count placeholder.
- Filter control.
- Sort control.
- Responsive product grid.
- Product card skeletons.
- Empty state.
- Loading state.
- Error state.

Filtering and sorting must remain UI-only until the required data and business rules are available.

Do not display fabricated filter results or product counts.

### 8.4 Search Page

Provide:

- Search input.
- Clear action.
- Search result skeleton.
- Loading state.
- No-results state.
- Error state.

The search input must be functional, but do not display fictional product results.

### 8.5 Product Detail Page

Provide:

- Image gallery skeleton.
- Product title skeleton.
- Price skeleton.
- Availability placeholder.
- Description skeleton.
- Optional variant selector placeholder.
- Quantity selector UI.
- Add to Cart button.
- Buy Now button.
- Related products skeleton.

Transaction buttons must be disabled or provide clear feedback when no real product has been selected.

Do not display fictional prices, discounts, ratings, stock quantities, SKUs, or product names.

### 8.6 Cart Page

Provide:

- Cart heading.
- Cart item skeleton.
- Quantity controls.
- Remove item action.
- Subtotal placeholder.
- Order summary.
- Checkout CTA.
- Empty cart state.

Requirements:

- Never add items automatically.
- Guest cart data may be stored in `localStorage`.
- Quantity must not fall below one for an existing cart item.
- Display an empty state when the cart contains no items.
- Never treat locally stored prices as final prices.

### 8.7 Guest Checkout Page

Provide form fields for:

- Recipient name.
- Phone number.
- Email address, if required.
- Full shipping address.
- Province or state.
- City or regency.
- District, if required.
- Postal code, if required.
- Optional order notes.
- Shipping options, if supported.

Also provide:

- Order summary.
- Subtotal placeholder.
- Shipping fee placeholder.
- Total placeholder.
- Form validation.
- Loading and error states.
- Submit button.

Requirements:

- No email/password login.
- No registration.
- No customer authentication.
- Never request a customer password.
- Frontend validation is for user experience only.
- Prices, stock, shipping fees, and totals must be verified by the backend when integration becomes available.
- Do not submit real orders before backend integration is complete.

### 8.8 Order Confirmation Page

Provide:

- Confirmation heading placeholder.
- Order reference placeholder.
- Item summary.
- Cost summary.
- Button to view order status.
- Button to return to the homepage.

Never display a fabricated order number or claim that an order was successfully created without a valid backend response.

### 8.9 Payment Page

Provide:

- Order reference.
- Payment method area.
- Payment instructions placeholder.
- Payment total placeholder.
- Payment status placeholder.
- Return-to-order action.

Do not enable real payments before the payment provider has been integrated.

Never display a successful payment status based solely on a browser redirect or local state.

### 8.10 Order Status Page

Provide:

- Order reference.
- Order status.
- Payment status.
- Order timeline skeleton.
- Shipping information placeholder.
- Tracking information placeholder.
- Loading, error, and empty states.

Because customer accounts are not supported, order access must use a secure guest-access mechanism when the backend becomes available.

Never expose customer information or order details based solely on an easily guessed order number.

If the access mechanism has not been implemented, display a clear message explaining that the feature is not yet available.

### 8.11 Not Found Page

Provide:

- Page-not-found message.
- Simple icon.
- Button to return to the homepage.

## 9. REUSABLE SKELETON COMPONENTS

Build the following components:

- `Skeleton`
- `SkeletonText`
- `SkeletonCircle`
- `SkeletonImage`
- `SkeletonButton`
- `BannerSkeleton`
- `CategorySkeleton`
- `ProductCardSkeleton`
- `ProductGridSkeleton`
- `ProductDetailSkeleton`
- `CartItemSkeleton`
- `OrderCardSkeleton`
- `SearchResultsSkeleton`
- `PageLoadingState`
- `EmptyState`
- `ErrorState`

Skeleton requirements:

- Use neutral colors.
- Match the approximate dimensions of the final content.
- Maintain consistent border radii and spacing.
- Use subtle animations when appropriate.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary layout shifts.
- Never display skeletons permanently.
- Never use skeletons as a replacement for empty states.

Clearly distinguish between:

- **Loading:** Data is currently being fetched.
- **Empty:** Loading has completed, but no data is available.
- **Error:** Data retrieval has failed.
- **Content:** Valid data is available.

## 10. FEATURE-BASED ARCHITECTURE

Organize the application into the following areas:

- `app/`
- `layouts/`
- `pages/`
- `components/ui/`
- `components/skeletons/`
- `components/navigation/`
- `features/catalog/`
- `features/search/`
- `features/cart/`
- `features/checkout/`
- `features/orders/`
- `hooks/`
- `stores/`
- `types/`
- `utils/`
- `styles/`

Separate UI, state management, data access, and business logic.

Use reusable components where appropriate.

Avoid placing the entire application in a single large file.

Do not create excessive folder structures without a clear need.

## 11. DATA AND BACKEND BOUNDARIES

During this phase:

- No real products.
- No dummy products.
- No fictional categories.
- No fabricated prices or stock quantities.
- No fictional orders.
- No payment simulations that appear real.
- No secrets in the frontend.
- No database schema changes.
- No migrations.
- No deployments.

Prepare typed component props so that product data can be connected later.

When the backend becomes available, verify API contracts, tables, columns, access permissions, and response formats before implementing integrations.

Never invent endpoints or database schemas.

## 12. GUEST CHECKOUT SECURITY

Guest checkout does not mean that endpoints may accept all requests without protection.

When backend integration is implemented:

- Validate all inputs on the server.
- Recalculate prices and totals on the server.
- Verify product availability and stock.
- Prevent duplicate order submissions.
- Apply idempotency according to the backend design.
- Protect guest order-status access.
- Never use an order number as the sole secret for accessing an order.
- Never expose customer data to unauthorized parties.
- Never place secrets in the frontend bundle.
- Verify payments on the backend.
- Never trust a redirect as proof of successful payment.

## 13. ACCESSIBILITY AND PERFORMANCE

- Use semantic HTML.
- Provide accessible labels.
- Support keyboard navigation.
- Provide visible focus states.
- Maintain sufficient color contrast.
- Optimize rendering and CSS.
- Avoid unnecessary dependencies.
- Use animations sparingly.
- Ensure routes work when loaded directly or refreshed.
- Ensure layouts work across the specified viewport sizes.

## 14. ACCEPTANCE CRITERIA

The implementation must satisfy the following requirements:

1. All specified storefront pages are available.
2. No customer login, registration, or account pages exist.
3. Checkout uses the guest-only flow.
4. All layouts are mobile-first and responsive.
5. No horizontal overflow occurs.
6. No dummy products or fictional categories are displayed.
7. Skeleton components are reusable.
8. Loading, empty, and error states are clearly distinguished.
9. Navigation and UI interactions work correctly.
10. The cart does not contain automatically generated items.
11. No real transactions occur before backend integration.
12. No fabricated payment statuses are displayed.
13. No private secrets are exposed in the frontend.
14. The codebase follows a modular architecture.
15. Type checking, linting, tests, and builds are run according to the available project configuration.
16. Verification results are reported based on tests that were actually executed.

## 15. EXECUTION WORKFLOW

Follow this workflow:

**AUDIT → REQUIREMENTS → RECOMMENDATIONS → APPROVAL → IMPLEMENTATION → VERIFICATION**

### Initial Phase

1. Audit the repository, if available.
2. Inspect the existing framework and dependencies.
3. Review the current folder structure and pages.
4. Propose the target structure.
5. Identify gaps and risks.
6. Present implementation recommendations.

Do not modify files before the implementation scope has been approved.

Do not modify the database, secrets, deployments, or main branch, and do not merge changes without explicit approval.

If no repository is available, produce the blueprint and folder structure first.

## 16. FINAL DELIVERABLE

The final deliverable must be a modern e-commerce storefront frontend template with:

- Complete customer-facing storefront UI.
- Mobile-first responsive layouts.
- Skeleton-only product placeholders.
- Guest-only checkout.
- No customer authentication.
- No fake products.
- No fake transactions.
- Reusable components.
- Functional navigation.
- Empty, loading, and error states.
- Modular feature-based architecture.
- A foundation ready for future backend integration.

Prioritize a UI that is simple, professional, consistent, easy to test, and easy to extend.
