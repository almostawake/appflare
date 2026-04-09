These are the technologies we'll use if/when their features are required

# Target Technologies

Framework: SvelteKit
TypeScript (strict mode)

## Frontend

- Svelte (components + pages)
- Tailwind CSS (styling)

## Infrastructure (default to CloudFlare)

We are using Workers, NOT Pages.

### Workers vs Pages (as of 2026)
- Pages is being folded into Workers. New projects should always target Workers.
- `wrangler deploy` with a `"main"` field in `wrangler.jsonc` deploys as a Worker. Without `"main"`, wrangler may autoconfig as Pages.
- Use `@sveltejs/adapter-cloudflare` (the `-workers` variant is deprecated).
- Workers serve static assets natively via the `"assets"` config — no separate Pages project needed.
- If wrangler autoconfig creates a Pages project by mistake, delete it in the dashboard and redeploy with `"main"` set in `wrangler.jsonc`.
- Resources (D1, KV, R2) are provisioned via **bindings** in `wrangler.jsonc`, not manually in the dashboard. Define the binding without a resource ID and wrangler auto-creates the resource on deploy. Example: `"d1_databases": [{"binding": "DB", "database_name": "appflare-db"}]` — no `database_id` needed.
- Access bindings in SvelteKit server code via `platform.env` (e.g. `platform.env.DB`).
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
