---
layout: post
title: "Ruby on Rails"
shortnote: "Overview of the Rails framework, tutorials, and articles."
tags: [ruby, rails, ruby-frameworks, back-end, all]
---

## Start here

**Prerequisite: [understand how the Internet works, how apps make and respond to requests, and other essential networks]({% post_url 2016-10-01-networking-basics %}).**

Rails powers some very cool sites online, like [Shopify](https://www.shopify.com/), [AirBnB](https://www.airbnb.com/), [Basecamp](https://basecamp.com/), [Bloomberg](https://www.bloomberg.com/), [Couchsurfing](https://www.couchsurfing.com/), [Github](https://github.com/), [Goodreads](https://www.goodreads.com/)... and on and on. Ruby, especially on Rails, has a tremendous amount of power for building and deploying quickly, making it especially popular among startups.

Use [Kaffeine](https://kaffeine.herokuapp.com/) if you are hosting your site on Heroku and don't wait it to sleep at the wrong times!

Get clarity on your RESTful routes with [Restular](http://www.restular.com/) (but keep in mind that its actual syntax is meant more for [Sinatra]({% post_url 2016-07-01-ruby-frameworks %})).

[Here are the different areas you need to be competent in](https://www.codefellows.org/blog/this-is-why-learning-rails-is-hard?__s=uvtabrbrcctximf9dhin) in order to work with Rails. It's a great high-level but concise overview.

<hr>

## Tutorials and books: free and essential
* *[Learn Ruby on Rails](https://www.railstutorial.org/book)*: the Michael Hartl tutorial that everyone mentions when talking about learning Rails for the first time. Also, you can [check out his take on Rails for beginner programmers](https://www.codementor.io/ruby-on-rails/tutorial/michael-hartl-learn-ruby-on-rails-beginner).
* [Rails guides](https://guides.rubyonrails.org/) from the official documentation.
* [Rails Casts](http://railscasts.com/)
* [Rails guides/documentation](https://guides.rubyonrails.org/)
* [Everyday Rails](https://everydayrails.com/), a cool blog with articles from the people who brought you *[Everyday Rails Testing with RSpec](https://leanpub.com/everydayrailsrspec)*.
* [Rails Best-practices Blog](https://rails-bestpractices.com/)

## Other books and courses
* *[Everyday Rails Testing with RSpec](https://leanpub.com/everydayrailsrspec)*
* *[Rails 4 in Action](https://www.amazon.com/Rails-Action-Revised/dp/1617291099)*
* *[Agile Web Development With Rails](https://pragprog.com/book/rails4/agile-web-development-with-rails-4)*
* [LevelUP courses](https://www.leveluprails.com/)
* *[Objects on Rails](https://objectsonrails.com/)*, by Avdi Grimm, and be sure to check out his [tech blog and podcasts](http://www.virtuouscode.com/).

<hr>

## Rails 5
* [Rails 5 intro](https://weblog.rubyonrails.org/2016/6/30/Rails-5-0-final/)
* [Rails 5 the tour](https://www.youtube.com/watch?v=OaDhY_y8WTo), from DHH himself.
* [Rails 5 Turbolinks](https://www.youtube.com/watch?v=SWEts0rlezA)
* [Intro to nio4r](https://tonyarcieri.com/a-gentle-introduction-to-nio4r)

<hr>

## ActiveRecord
* [Arel tutorial](https://jpospisil.com/2014/06/16/the-definitive-guide-to-arel-the-sql-manager-for-ruby.html): Arel is what ActiveRecord is implemented in.
* [Intro to ActiveRecord](https://prograils.com/posts/active-record-brief-introduction-for-beginners)
* [Another good intro to ActiveRecord](https://prograils.com/posts/active-record-brief-introduction-for-beginners)
* [Associations](https://guides.rubyonrails.org/association_basics.html)
* [Validations and callbacks](https://guides.rubyonrails.org/v3.2.13/active_record_validations_callbacks.html)
* [tutplus Active Record overview](https://code.tutsplus.com/tutorials/active-record-the-rails-database-bridge--net-30489)
* [Avoiding n+1 queries](https://estherleytush.com/2016/07/10/avoiding-n-plus-one-queries.html), possibly the most common reason for slow Rails apps.
* [Advanced SQL with Rails](https://brewhouse.io/2016/08/04/sql-in-rails.html), a great small tutorial on writing SQL queries in Rails.
* [Safer SQL: Using ActiveRecord Transactions](https://vaidehijoshi.github.io/blog/2015/08/18/safer-sql-using-activerecord-transactions/)

<hr>

## Testing Rails applications
* [Stubbing with Rails](https://semaphoreci.com/community/tutorials/stubbing-external-services-in-rails)
* [Capybara](https://github.com/jnicklas/capybara): testing via mocks and stubs.
* [Testing Rails](https://everydayrails.com/2012/03/12/testing-series-intro.html): a cool series covering a lot of topics.
* [RSpec for Rails](https://semaphoreci.com/community/tutorials/how-to-test-rails-models-with-rspec)
* [Rspec tutorial](https://www.webascender.com/Blog/ID/566/Testing-Rails-4-Apps-With-RSpec-3-Part-I): testing Rails 4 apps

<hr>

## Great Rails-specific gems to know
* [bcrypt](https://github.com/codahale/bcrypt-ruby), for user authentication.
* [pry-rails](https://github.com/rweng/pry-rails), a spectacular breakpoint/debugging tool (quite like `debugger` for the browser JavaScript console)
* [unirest](https://unirest.io/ruby), helping you make very clean http requests without the headache of [Net::HTTP](https://ruby-doc.org/stdlib-2.3.1/libdoc/net/http/rdoc/Net/HTTP.html) syntax, and as an alternative to [HTTParty](https://github.com/jnunemaker/httparty)

<hr>

## Rails and the front-end
* [1-page Ajaxified Rails site](https://codediode.io/lessons/1904-ajaxified-one-page-application-with-rails)
* [WYSIWYG postings editor](https://www.driftingruby.com/episodes/wysiwyg-editor-with-trix): add a text editor for your views that can send back rich text to your back-end.
* [Making Rails asset pipeline faster](https://marianposaceanu.com/articles/making-rails-asset-pipeline-faster)
* [Asset pipeline best practices](https://launchschool.com/blog/rails-asset-pipeline-best-practices)
* [How Ajax works in Rails](https://launchschool.com/blog/the-detailed-guide-on-how-ajax-works-with-ruby-on-rails)
* [Stopping Rails from including all your JavaScript files](https://theflyingdeveloper.com/controller-specific-assets-with-rails-4)
* [React on Rails](https://www.youtube.com/watch?v=kTSsZrub5iE)
* Adding a [Jekyll site to your Rails application](https://www.sitepoint.com/jekyll-rails/)

<hr>

## Managing dates and timezones

* ["Working with timezones in Rails"](https://www.varvet.com/blog/working-with-time-zones-in-ruby-on-rails/)
* Thoughtbot, ["It's about Time Zones"](https://robots.thoughtbot.com/its-about-time-zones)
* [APIDock's timezone methods support](https://apidock.com/rails/TimeZone)
* ["Client-side timezone detection"](https://thisbythem.com/blog/clientside-timezone-detection/)

<hr>

## User authentication

* [Tutorial for implementing Devise gem](https://www.codementor.io/ruby-on-rails/tutorial/devise-rails-build-automatic-login-tokens-email)
* [Using Devise gem to authenticate](https://sourcey.com/rails-4-omniauth-using-devise-with-twitter-facebook-and-linkedin/)
* [Authenticating with Twitter via the Devise gem ](https://gorails.com/episodes/omniauth-twitter-sign-in)
* [Implementing password reset with Rails](https://culttt.com/2016/07/13/implementing-password-reset-using-ruby-rails-trailblazer/)

<hr>

## Deployment, Heroku, and managing deployed apps
* [Managing rack apps in production with puma-dev](https://github.com/puma/puma-dev#puma-dev-a-development-server-for-os-x)
* [Heroku’s Intro to Ruby](https://devcenter.heroku.com/articles/getting-started-with-ruby#introduction): support for deploying to a Heroku site.

<hr>

## Production-level apps
* [Better Rails performance with background jobs](https://blog.codeminer42.com/improving-rails-scalability-with-better-architecture-c102a2a0cdec#.6cakwxwws)
* [Is your app ready for production?](https://www.akitaonrails.com/2016/03/22/is-your-rails-app-ready-for-production)
* [Improving large rails apps with service objects](https://aaronlasseigne.com/2016/04/27/improving-large-rails-apps-with-service-objects/)
* [Phases of refactoring Rails apps](https://blog.arkency.com/2016/07/phases-of-refactoring-complex-rails-apps/)
* [Adding search functionality with Solr](https://blog.nrowegt.com/how-to-setup-solr-on-rails/)

<hr>

## Great articles and mini tutorials
* [Building an rss reader](https://www.sitepoint.com/building-an-rss-reader-in-rails-is-easy/)
* [Rebuilding Rails from scratch](https://www.reddit.com/r/ruby/comments/2b1su1/rebuilding_rails_or_how_do_i_build_my_own_ruby/)
* [Integrating Google Calendar](https://readysteadycode.com/howto-integrate-google-calendar-with-rails)
* [Rails security guide](https://guides.rubyonrails.org/security.html)
* [Essentials of cache expiration with Rails](https://sorentwo.com/2016/07/11/essentials-of-cache-expiration-in-rails.html)
* [Rake 101](https://code.tutsplus.com/articles/rake-101--cms-26215)
* [Creating a Rails 5 API](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/)
* [Containerizing Rails with Docker](https://www.codelitt.com/blog/intro-setting-up-your-first-docker-container-your-rails-app/)
* [ActionCable intro](https://www.driftingruby.com/episodes/actioncable-part-1-configuration-and-basics)
* [Adding HTTPS to Rails hosted on Heroku](https://www.juanitofatas.com/blog/2016/07/12/rails_app_on_heroku_with_ssl_from_dnsimple)
* [Rails cheatsheet](https://teamgaslight.com/blog/ready-to-try-ruby-an-awesome-rails-cheat-sheet)
* [Rails debugging cheatsheet](https://www.schneems.com/2016/01/25/ruby-debugging-magic-cheat-sheet.html)
* [In-app messaging between users](https://gorails.com/episodes/in-app-messaging-between-users?autoplay=1)
* [Add chat to a Rails app](https://www.twilio.com/blog/2016/02/add-chat-to-a-rails-app-with-twilio-ip-messaging.html)
* [Building a Reddit-like commentating site](https://www.codementor.io/ruby-on-rails/tutorial/threaded-comments-polymorphic-associations)
* [Stripe with Rails](https://launchschool.com/blog/stripe-checkout): integrating client payments into your app.
* [Full-text search in Rails](https://www.viget.com/articles/implementing-full-text-search-in-rails-with-postgres)
* [Send email via Amazon Web Services](https://www.sitepoint.com/deliver-the-mail-with-amazon-ses-and-rails/)
* [Getting and responding to SMS in Rails with Twilio](https://www.twilio.com/blog/2016/04/receive-and-reply-to-sms-in-rails.html)

## Emails and mailers
* [LaunchSchool's ActionMailer tutorial](https://launchschool.com/blog/handling-emails-in-rails): getting started with Rails mailers.
* [Rails mailers](https://vaidehijoshi.github.io/blog/2015/09/08/youve-got-mail-action-mailer-plus-letter-opener/)
* [SparkPost](https://www.sparkpost.com/), a spectacular API for sending emails.
