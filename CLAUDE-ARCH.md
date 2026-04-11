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
2. @cloudflare/playwright -> explain free tier limits
  - this can be tested locally with Wrangler dev server
3. if there are issues with deliberate blocking of scrapers, shift to google cloud functions with full playwright

DO NOT USE PUPPETEER

## Voice and SMS

Use Twillio for number provisioning, telephony automation and SMS. Explain the admin side of that (compliance, bundles).
Use ElevenLabs for AI voice, point out there's no free tier. Explain that ElevenLabs integrates well with Twilio numbers.

## Email and notifications

For simple alerts use Ntfy, explain how it works, simple setup etc.
For sending small volume emails use Resend.

## AI 

Use Claude's API, explain it's the simplest for account convenience. Explain the costs, no free tier (bit of free credits at the beginning, informal).

## Sockets/realtime

Party Kit / Party Server

## iPhone/Android apps

Warn the user about how hard it is to actually publish an app, get registered, get approved etc.
Use Expo, explain the whole point of Expo, focus on the first phase, local emulator mode for super fast testing of what's possible.

## Tooling

- Biome (formatting + linting)
- Wrangler (dev server, types, deployment)
