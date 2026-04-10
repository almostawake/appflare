# Intent & architecture

This project is mainly about stipulating a bunch of technologies and hosting options in order to fast track the user's initial experiences with vibe coding with Claude Code.

See CLAUDE-ARCH.md for target technologies and hosting.

If the user requests features that go beyond the suggested technologies, try to default to CloudFlare services and supporting libraries.  If that's not possible then favour Google Firebase options or wider GCP options if those don't provide a simple option.  If all of that fails, try to pick the next simplest alternative with the easiest setup.

# Non-technical audience

Note that the user is likely NOT a developer and may not understand all the concepts here about technology choice and/or hosting options. Always offer to explain, keep jargon to an absolute minimum.

If the user asks for specific technology, consider and clarify the functional requirements rather than taking technical direction at face value.  If the conversation is tending against simplicity and the ideals of CLAUDE-ARCH.md then explain this to the user and suggest better options as per the previous section.

# When investigating, designing and testing - strongly favour the user's browser

- If the browser connection/MCP isn't working, spend time resolving it instead of trying to skip it
  - if necessary, get the user to restart the browser, reboot and so on
- When investigating websites/scraping, use screenshots to validate what's going on - don't just rely on direct fetch/curl
- when finalising a feature .. where possible/appropriate, use the browser to check it's working as intended locally or deployed

# Startup, shut down, deployments

Startup and shutdown local servers as needed, don't ask the user to do this.  If starting up, check first whether it's already running.

don't deploy without asking first.

# First-time Setup

When the user asks for help getting started, walk them through Setup as follows. Before starting, explain as tersely as possible what's coming.

Ask them how to address them for the session, what name they'd like to use.  Explain that this is for when we make a minor edit to the template app.

## Prerequisites to check

If node/npm aren't present, help the user install them.
Suggest to the user that they pay for Claude Pro plan at least for a month to evaluate it. Explain that Claude Code requiresa a paid plan. Explain that the author of this repo (almostawake) assumes a Claude Pro plan. If the user doesn't have Claude pro plan then just support them as best you 

## Local setup & run

Help the user through iniital setup. Install dependencies, run up the app, open the page.  If you don't have permissions to open the page for them, ask them if they'd like allow that and help them change config if so.

Make sure the user can see the local page and explain this is where they will work on things before deploying.

## Simple text change

Ask the user if it's ok to change the "AppFlare" title to {the name they supplied}'s first app .. and explain hot-loading in simple terms to them.  Ask them what they want to change it to.

## Google/CloudFlare accounts

Explain that we'll be hosting mainly on CloudFlare for simplicity and free-ness.
Suggest to the user that they use an existing gmail account or create one for this project - and use that same account to create a corresponding CloudFlare account (logging in using the GMail user).  Explain that this will allow them to use Google services for edge cases where their app requires features beyond CloudFlare's repertoire.

Before giving instructions for either, check if they have one or both already set up, give them only instructions for what's missing.

## First deployment

Then suggest and help the user through first wrangler auth, build/deploy and open the hosted app.  

Point out to them that they have two tabs, one for their local copy of the app and one where it's hosted.  Point out the public URL and explain they can connect to that from anywhere, including their mobile phone.

## Get stuck into the user's first solution

After setup is complete, ask the user what they'd like to build and begin the journey.  Check with them if it's ok to delete this first-time setup section so it doesn't confuse issues later.

# Avoid git complexity

Unless the user explicitly asks, stick to wrangler deployments and auto provisioning, configuring via APIs and so on.  Don't suggest any git-based deployment or development workflows, we're not trying to teach everyone to be an amazing developer, just do the basics.
