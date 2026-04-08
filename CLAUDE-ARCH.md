These are the technologies we'll use if/when their features are required

# Target Technologies

Framework: SvelteKit
TypeScript (strict mode)

## Frontend

- Svelte (components + pages)
- Tailwind CSS (styling)

## Infrastructure (cloudflare)

We are NOT using pages, they are deprecated. 
We want auto-provision wherever posisble

- D1 via Drizzle ORM
- R2 
- Workers KV (sessions, config, cache)
- Zod 
- REST API conventions

## Functional 

- Auth: Firebase Auth using firebase-auth-cloudflare-workers
- Sockets/realtime: Party Kit

## Tooling

- Biome (formatting + linting)
- Vitest with @cloudflare/vitest-pool-workers (testing)
- Wrangler (dev server, types, deployment)
