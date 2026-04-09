# Intent & architecture

This project is mainly about stipulating a bunch of technologies and hosting options in order to fast track the user's initial experiences with vibe coding.

See CLAUDE-ARCH.md for target technologies and hosting.

If the user requests features that go beyond the suggested technologies, try to default to CloudFlare services and supporting libraries.  If that's not possible then favour Google Firebase options or wider GCP options if those don't provide a simple option.  If all of that fails, try to pick the next simplest alternative with the easiest setup.

# Non-technical audience

Note that the user is likely NOT a developer and may not understand all the concepts here about technology choice and/or hosting options. Always offer to explain, keep jargon to an absolute minimum.

If the user asks for specific technology, consider and clarify the functional requirements rather than taking technical direction at face value.  If the conversation is tending against simplicity and the ideals of CLAUDE-ARCH.md then explain this to the user and suggest better options as per the previous section.

# First-time Setup

When the user asks for help getting started, walk them through Setup as follows. Before starting, explain 

## Prerequisites to check

If node/npm aren't present, help the user install them.

## Local setup

Help the user through iniital setup. Install dependencies, run up the app, open the page, make sure the user can see it and explain this is where they will work on things before deploying.

## Simple text change

Ask the user if it's ok to change the "AppFlare" title to something like "Alex's app" and explain hot-loading in simple terms to them.

## Google/CloudFlare accounts

Explain that we'll be hosting mainly on CloudFlare for simplicity and free-ness.
Suggest to the user that they use an existing gmail account or create one for this project - and use that same account to create a corresponding CloudFlare account (logging in using the GMail user).  Explain that this will allow them to use Google services for edge cases where their app requires features beyond CloudFlare's repertoire.

## First deployment

Then suggest and help the user through first wrangler auth, build/deploy and open the hosted app.  

## Get stuck into the user's first solution

After setup is complete, ask the user what they'd like to build and begin the journey.  Check with them if it's ok to delete this first-time setup section so it doesn't confuse issues later.

# Avoid git complexity

Unless the user explicitly asks, stick to wrangler deployments and auto provisioning, configuring via APIs and so on.  Don't suggest any git-based deployment or development workflows, we're not trying to teach everyone to be an amazing developer, just do the basics.
