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
Worker name is "appflare". All resources use the naming convention appflare-{type} (e.g. appflare-db, appflare-kv, appflare-r2) unless otherwise specified.

- D1 via Drizzle ORM (add drizzle-orm, drizzle-kit, drizzle.config.ts, and db:* scripts when needed)
- R2 
- Workers KV (sessions, config, cache)
- Zod 
- REST API conventions

## Functional 

- Auth: Firebase Auth using firebase-auth-cloudflare-workers
  - When adding auth: install firebase (dep), firebase-auth-cloudflare-workers (dep), firebase-tools (dev dep)
  - Add firebase.json with auth emulator (port 9099) and emulator UI (port 4000)
  - Add start:emulators script: "firebase emulators:start --only auth"
  - use redirect-based auth (signInWithRedirect) for LLM and test friendliness
  - Firebase project config (apiKey, projectId, authDomain) via environment variables
  - Google sign-in provider must be enabled in Firebase console
  - Proxy Firebase /__/auth/* routes through a SvelteKit catch-all server route
- Sockets/realtime: Party Kit

## Tooling

- Biome (formatting + linting)
- Vitest with @cloudflare/vitest-pool-workers (testing)
- Wrangler (dev server, types, deployment)
