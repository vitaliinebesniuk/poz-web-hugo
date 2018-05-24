# Structure

There are two versions of the site 

- vanilla-html - pure html implementation of the site
- hugo - a hugo website with the theme that is designed based on the html 

we are also using nanobox to deploy the project 
for this purpose there is a nanobox boxfile.yml config provided in each folder

Config is a prerequisite but not sufficient to run a full deploy. More about how to use it in [nanobox documentation](https://docs.nanobox.io/) and in the [nanobox section](#Nanobox) of this doc

# Deployments

- Hugo (dev): staging.pozitiff.me
- Hugo (prod): pozitiff.me, dev.pozitiff.me...
- Vanilla: static-dev.pozitiff.me

# Hugo

[Quick Start Guide](https://gohugo.io/getting-started/quick-start/)

Hugo is a Framework for building sites. So in order to make it work with our design we need to make a theme with it.

We used command:

> hugo new theme pozitiff-dev

to generate a new theme and then customised it to look as we want

Few hints: 

- static folder will be mounted as route of your deployment. 
Ex: themes/pozitiv-dev/static/images will be mounted as images/ on the web server
- themes/pozitiv-dev/layouts/index.html - default index that loads
- themes/pozitiv-dev/layouts/partials/ - holds the partial templates that are referenced in index


after that edited auto-generated config.toml (to make hugo use our new theme)

> theme = "pozitiff-dev"

To work on hugo you run 

> hugo server -D

you get something like this :

> Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)

And can check your work locally. Hugo has a live watcher so your changes to files after save will be rerendered and the server and view refreshed.

## HUGO Notes

accessing data:

    {{.Site.Data.members.top.maximtereshko.name}}

looping through data: 

    {{ range $.Site.Data.members.top }}
    
    {{ partial "top-member.html" . }}
    
    {{ end }} 

# Nanobox 

First of all you need a nanobox account and it has to be linked with our team

So if you don't have one, register on your pozitiff email and let me know your username via slack or termax@pozitiff.ua

After that install nanobox on your system

After that you need to attach each nanobox project to appropriate server:

- cd to hugo and 

  - *HUGO DEV*

            nanobox remote add staging-pozitiff

 - *HUGO PRODUCTION*

            nanobox remote add dev-pozitiff

- cd to vanilla-html 
 
        nanobox remote add dev-pozitiff-static

Those two variations run on different servers (nanobox apps) so you need to connect each folder independently.

After that you can run:

> nanobox deploy dry-run

to check the project on your local machine. Or:

> nanobox deploy

to deploy to the server




