# Project Architecture

See CLAUDE-ARCH.md for target technologies and architecture decisions.

# First-time Setup

When the user asks for help getting started, walk them through these steps in order. Check each prerequisite before proceeding. Use plain, friendly language — the user may not be technical.

## Prerequisites to check

1. **Node.js** — run `node --version`. If missing, tell the user to install it from https://nodejs.org (recommend the LTS version) and restart their terminal.
2. **npm** — comes with Node.js, but verify with `npm --version`.

## Setup steps

Help the user through these, keeping in mind they're likely not a developer.  Wherever possible do it for them.

1. **Install dependencies** — run `npm install`.
2. **Create a Cloudflare account** — ask the user if they already have one. If not, direct them to https://dash.cloudflare.com/sign-up — it's free, no credit card required.
3. **Authenticate wrangler** — run `npx wrangler login`. This will open a browser window. Tell the user to approve the access request. Verify with `npx wrangler whoami`.
4. **Choose a name** — ask the user what they'd like to call their app. This becomes the worker name and the subdomain (e.g. "my-tool" becomes my-tool.<subdomain>.workers.dev). Update the `name` field in `wrangler.jsonc`.
5. **Build and deploy** — run `npm run build && npx wrangler deploy`. Share the URL with the user when it succeeds.
6. **Set up access control** — ask the user which email addresses should be able to access the app. Walk them through the Cloudflare Zero Trust dashboard to create an Access application with email OTP (see CLAUDE-ARCH.md for auth approach).

After setup is complete, ask the user what they'd like to build.
