These are the technologies we'll use if/when their features are required

# Target Technologies

Framework: SvelteKit
TypeScript (strict mode)

## Frontend

- Svelte (components + pages)
- Tailwind CSS (styling)

## Infrastructure (default to CloudFlare)

We are using workers NOT pages as pages are deprecated. 
- Auto-provision wherever possible
- Configure via APIs otherwise - for first time setup of tokens, instruct the user on how to do this in the CloudFlare dashboard
- Provide instructions to configure via CloudFlare dash as a last resort
- Worker name is "appflare" unless the user decides to change it 
- All resources use the naming convention appflare-{type} (e.g. appflare-db appflare-kv, appflare-r2) unless otherwise specified

- D1 via Drizzle ORM (add drizzle-orm, drizzle-kit, drizzle.config.ts, and db:* scripts when needed)
- R2 
- Workers KV (sessions, config, cache)
- Zod 
- REST API conventions

## Auth

Use the simplest tool for the job:
- Start with no auth
- Help the user understand whether it's admin-only or if the app will have end users
  - If it's just an admin login, suggest zero trust for simplicity
  - Otherwise help the user set up Google/Microsoft login

Avoid implementing custom password auth, token auth, Firebase Auth, or roll-your-own login flows. Explain the user what is required to set up these things.   

## Fetching information from services and websites

Start with the simplest option, only escalate if absolutely necessary. 
1. fetch
2. cf playwright -> explain free tier limits
3. google cloud functions with full playwright

## Sockets/realtime

Party Kit

## Tooling

- Biome (formatting + linting)
- Wrangler (dev server, types, deployment)
