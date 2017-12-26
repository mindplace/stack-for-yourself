---
layout: post
title: "Static & Simple Sites: Generators and Hosting"
shortnote: "Jekyll and other static site generators."
tags: [javascript, front-end, all]
categories: [front-end]
---

## Start Here

**What's a static site?**

A static site is a website that has only client-side files: meaning it doesn't use a database. The site is completely comprised of HTML, CSS, and maybe JavaScript files, and if you were to take all these files from the server where they are kept and put them somewhere else, you would have the complete site re-built. In a static site, all the pages are already ready for the visitor before the visitor requests to see them. This site is an example of a static site, and it's built with Jekyll (more on that below). Typical other examples include documentation sites like the [Jekyll documentation](https://jekyllrb.com/docs/home/) website.

This is in contrast to dynamic sites. Dynamic sites are sites where the pages aren't ready for a user until the visitor makes a request for them. Dynamic sites also rely on database information to create sites that show pages specific to each visitor (whereas a static site shows the same information to any visitor). Most websites you can think of are dynamic websites, such as Facebook, Twitter, and Google.

Static sites have several advantages: they can be blazing fast, can be cheaply hosted or hosted for free, and are very lightweight. Static site generators are frameworks that permit you to spin up and support static sites with ease.

<hr>

### Jekyll
Jekyll is an amazing, lightweight static site generator. It's a framework for organizing and generating static files and partials.
It's got [great documentation](https://jekyllrb.com/docs/home/) and was created by a Github founder. It's an awesome solution for rolling your own blog or small personal site, and can be hosted for free on Github's [gh-pages](https://pages.github.com/).

I built a [seed Jekyll application](https://github.com/mindplace/jekyll-seed) with tons of lovely features for you to fork and use for free on Github for your own projects.

#### Visual interfaces for creating Jekyll sites and adding or editing pages

* [Prose.io](http://prose.io/): create MD files via a web interface that immediately show up on the appropriate Jekyll site (or just to the appropriate repository).
* [Forestry.io](https://forestry.io/): even better than Prose.io, it's a lightweight [content management system](https://en.wikipedia.org/wiki/Content_management_system) that mimics Wordpress' functionality for Jekyll sites.

#### Themes and freebies

* [Hydejack](https://github.com/qwtel/hydejack), one of my favorite Jekyll themes.
* [Lots of Jekyll themes](https://github.com/drjekyllthemes/themes)
* [Planet Jekyll](http://planetjekyll.github.io/showcase/), an awesome showcase of many Jekyll themes
* [Gorgeous HMFAYSAL Omega theme for Jekyll](https://github.com/hmfaysal/hmfaysal-omega-theme)
* [Create and publish your own Jekyll theme gem](https://webdesign.tutsplus.com/tutorials/how-to-create-and-publish-a-jekyll-theme-gem--cms-27475)

#### Documentation and tutorials

* [Liquid documentation](https://help.shopify.com/themes/liquid): the Ruby-based language Jekyll uses to manage dynamic qualities in building your site.
* [Tags and categories with Jekyll](http://www.minddust.com/post/tags-and-categories-on-github-pages/)
* [Jekyll tags from scratch](http://charliepark.org/tags-in-jekyll/)
* [Put interactive Ruby snippets on your blog](http://blog.klipse.tech/ruby/2016/06/20/blog-ruby.html)
* [Putting Disqus comments onto a Jekyll site](http://estherleytush.com/2016/06/25/adding-comments-to-jekyll-site.html): basically the comments feature below! (And this is a Jekyll site.)
* [Implement Jekyll search using lunr.js](http://jekyll.tips/jekyll-casts/jekyll-search-using-lunr-js/): adding search functionality to a Jekyll site
* [jekyll-assets](http://www.rubydoc.info/gems/jekyll-assets/0.13.0), a very useful gem for managing assets with Jekyll in a Rails-like way

<hr>

### Hosting static sites

* Learn and use [Github Pages](https://pages.github.com/) to host your pages and sites: essentially a free, hosted, live version of your front-end repositories.
* [Using static site generators at scale](https://www.smashingmagazine.com/2016/08/using-a-static-site-generator-at-scale-lessons-learned/): specifically, Jekyll. Great read.
* [Jekyll on Firebase](https://chris.banes.me/2017/06/02/jekyll-firebase/), a great post talking about deploying a Jekyll site to be hosted on Firebase. Great for Firebase newbies as well.
* [Netlify](https://www.netlify.com), static site hosting for free for personal projects
* [Gatsby](https://www.gatsbyjs.org/), static single-page sites with React
