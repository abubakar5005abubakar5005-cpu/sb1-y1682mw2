# Royals Kingdom

A premium luxury storefront for curated collections with direct-contact ordering. No checkout card payment is processed in the storefront.

## Stack
- Next.js 14
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth with Google OAuth
- OpenAI Concierge
- Royal boutique storefront UI

## Features
- Active category filtering only shows categories with products available for sale.
- Product detail pages include pricing, specs, and gallery views.
- Cart persists in localStorage.
- Purchase flow directs users to direct contact via phone, WhatsApp or email.
- Concierge chatbot can recommend products and answer buying questions.
- Admin console and protected route pattern are included.

## Required setup
1. Copy `.env.example` to `.env.local`.
2. Fill in your database and auth values.
3. Install dependencies: `npm install`
4. Run Prisma setup: `npx prisma generate` and `npx prisma db push`
5. Start the app: `npm run dev`

## QA / audit checklist
- Confirm categories are only visible when they have active products.
- Verify product specs and pricing match the product card and detail page.
- Check that imagery and category content load correctly.
- Verify no payment form is active for direct sale checkout.
- Test phone, email and chat ordering flow.
- Validate admin route protection and environment guard rails.
- Confirm no hidden archived category is surfaced in the storefront.

## Brand credits
Designed and Branded by Wajji, Armi, Sarmi, and Bakr.
