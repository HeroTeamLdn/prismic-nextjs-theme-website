
# Prismic NextJS Website Theme

Use this theme to create a new prismic project with the following pages:

- Basic 
- Blog Landing
- Blog Post
- Landing Page (also used for Home page)


## Before you start

Install the cli

    npm i -g prismic-cli

> Ensure you are logged into either the HeroTeam Prismic account or the Prismic account of the client you are working on.

## Create a new project from this theme

    prismic theme https://github.com/HeroTeamLdn/prismic-nextjs-theme-website

You'll be directed through setup on the command line. 

> Repositories must always be unique (like a domiain name) - so always prefix the repo name with Hero Team initials eg `ht-` 

Then log into Prismic in the browser and create some content within the repository you just created. 

Update the contents of config.local.js with the endpoint and (if required) the api token to access the private Prismic repo.

Run the build and see the content in your application.

> **Delete from here up in the created project's README.md file**


## Running the build

    npm run dev
    
## Deploying with Zeit Now

Ensure you have the Now CLI

    npm i -g now

To deploy to Zeit run

    now
