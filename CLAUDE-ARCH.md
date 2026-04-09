These are the technologies we'll use if/when their features are required

# Target Technologies

Framework: SvelteKit
TypeScript (strict mode)

## Frontend

- Svelte (components + pages)
- Tailwind CSS (styling)

## Infrastructure (cloudflare)

We are NOT using pages, they are deprecated. 
We want auto-provision wherever possible.
Worker name is "appflare". All resources use the naming convention appflare-{type} (e.g. appflare-db, appflare-kv, appflare-r2) unless otherwise specified.

- D1 via Drizzle ORM (add drizzle-orm, drizzle-kit, drizzle.config.ts, and db:* scripts when needed)
- R2 
- Workers KV (sessions, config, cache)
- Zod 
- REST API conventions

## Auth

Cloudflare Access (Zero Trust) with One-time PIN (email OTP). Configured via dashboard, not in code. On first deployment, ask the user which email addresses should have access.

Do NOT implement custom password auth, token auth, Firebase Auth, or roll-your-own login flows. Explain the user what is required to set up these things.

## Sockets/realtime

Party Kit

## Tooling

- Biome (formatting + linting)
- Wrangler (dev server, types, deployment)
