---
layout: post
title: "Ruby on Rails resources"
shortnote: "Overview of the Rails framework, tutorials, and articles."
tags: [ruby, rails, ruby-frameworks, backend, all]
---

# If nothing else, bookmark these...
[Ruby Science](https://thoughtbot.com/ruby-science-sample.pdf): ThoughtBot's Rails tutorial, and one of the best, up there with *[Learn Ruby on Rails](https://www.railstutorial.org/book)*, the definitive choice for learning Rails.

Use [Kaffeine](http://kaffeine.herokuapp.com/) if you are hosting your site on Heroku and don't wait it to sleep at the wrong times!

Get clarity on your RESTful routes with [Restular](http://www.restular.com/) (but keep in mind that its actual syntax is meant more for [Sinatra]({{ site.basurl }}/2016/01/01/ruby-frameworks)).

<hr>

[There are quite a lot of different areas you need to be competent in](https://www.codefellows.org/blog/this-is-why-learning-rails-is-hard?__s=uvtabrbrcctximf9dhin) in order to work with Rails, so get started!

<hr>

# Tutorials and books

### Free and essential
* *[Learn Ruby on Rails](https://www.railstutorial.org/book)*: the Michael Hartl tutorial that everyone mentions when talking about learning Rails for the first time. Also, you can [check out his take on Rails for beginner programmers](https://www.codementor.io/ruby-on-rails/tutorial/michael-hartl-learn-ruby-on-rails-beginner).
* [Ruby Science](https://thoughtbot.com/ruby-science-sample.pdf): ThoughtBot's Rails tutorial.
* [Various Rails tutorials](http://www.skilledup.com/guides/learn-ruby-programming-language-course-guide?platform=hootsuite)
* [Rails guides](http://guides.rubyonrails.org/) from the official documentation.
* [Rails forums](https://railsforum.com/)
* [Rails Casts](http://railscasts.com/)
* [Rails guides/documentation](http://guides.rubyonrails.org/)
* [Everyday Rails](http://everydayrails.com/), a cool blog with articles from the people who brought you *[Everyday Rails Testing with RSpec](https://leanpub.com/everydayrailsrspec)*.
* [Rails Best-practices Blog](http://rails-bestpractices.com/)


### Not free but also awesome
* *[Everyday Rails Testing with RSpec](https://leanpub.com/everydayrailsrspec)*
* *[Rails 4 in Action](https://www.amazon.com/Rails-Action-Revised/dp/1617291099)*
* *[Agile Web Development With Rails](https://pragprog.com/book/rails4/agile-web-development-with-rails-4)*
* [LevelUP courses](https://www.leveluprails.com/)
* *[Objects on Rails](http://objectsonrails.com/)*, by the awesome Avdi Grimm, check out his awesome tech blog + podcasts [here](http://www.virtuouscode.com/).

<hr>

## Rails 5
* [Rails 5 intro](http://weblog.rubyonrails.org/2016/6/30/Rails-5-0-final/?utm_source=rubyweekly&utm_medium=email)
* [Rails 5 the tour](https://www.youtube.com/watch?v=OaDhY_y8WTo), from DHH himself.
* [Rails 5 Turbolinks](https://www.youtube.com/watch?v=SWEts0rlezA)
* [Intro to nio4r](https://tonyarcieri.com/a-gentle-introduction-to-nio4r)

<hr>

## ActiveRecord
* [Intro to ActiveRecord](https://prograils.com/posts/active-record-brief-introduction-for-beginners?utm_source=rubyweekly&utm_medium=email)
* [Another good intro to ActiveRecord](https://prograils.com/posts/active-record-brief-introduction-for-beginners)
* [Associations](http://guides.rubyonrails.org/association_basics.html)
* [Validations and callbacks](http://guides.rubyonrails.org/v3.2.13/active_record_validations_callbacks.html)
* [tutplus Active Record overview](http://code.tutsplus.com/tutorials/active-record-the-rails-database-bridge--net-30489)
* [Avoiding n+1 queries](http://estherleytush.com/2016/07/10/avoiding-n-plus-one-queries.html), possibly the most common reason for slow Rails apps.

<hr>

## Testing Rails
* [Stubbing with Rails](https://semaphoreci.com/community/tutorials/stubbing-external-services-in-rails)
* [Capybara](https://github.com/jnicklas/capybara): testing via mocks and stubs.
* [Testing Rails](http://everydayrails.com/2012/03/12/testing-series-intro.html): a cool series covering a lot of topics.
* [RSpec for Rails](https://semaphoreci.com/community/tutorials/how-to-test-rails-models-with-rspec?utm_campaign=community&utm_content=78&utm_medium=email&utm_source=community-subscription)
* [Rspec tutorial](http://www.webascender.com/Blog/ID/566/Testing-Rails-4-Apps-With-RSpec-3-Part-I#.Vqvnq1MrKV4): testing Rails 4 apps

<hr>

## Rails and the frontend
* [1-page Ajaxified Rails site](https://codediode.io/lessons/1904-ajaxified-one-page-application-with-rails)
* [React with Devise forms](https://labs.chie.do/authenticating-your-reactjs-app-with-devise-no-extra-gems-needed/?utm_source=Rails%20Forum&utm_medium=Answering%20Posting&utm_campaign=Rails-forum-answer--posting)
* [WYSIWYG postings editor](https://www.driftingruby.com/episodes/wysiwyg-editor-with-trix): add an awesome text editor for your views that can send back rich text to your backend.
* [CRUD interface with React and Rails](http://tutorials.pluralsight.com/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails)
* [Making Rails asset pipeline faster](http://marianposaceanu.com/articles/making-rails-asset-pipeline-faster)
* [Asset pipeline best practices](https://launchschool.com/blog/rails-asset-pipeline-best-practices)
* [How Ajax works in Rails](https://launchschool.com/blog/the-detailed-guide-on-how-ajax-works-with-ruby-on-rails)
* [Stopping Rails from including all your JavaScript files](http://theflyingdeveloper.com/controller-specific-assets-with-rails-4/)
* [React on Rails](https://www.youtube.com/watch?v=kTSsZrub5iE)

<hr>

## User authentication
* [Token-based oauth in Rails](http://tutorials.pluralsight.com/ruby-ruby-on-rails/token-based-authentication-with-ruby-on-rails-5-api)
* [Tutorial for implementing Devise gem](https://www.codementor.io/ruby-on-rails/tutorial/devise-rails-build-automatic-login-tokens-email)
* [Using Devise gem to authenticate](http://sourcey.com/rails-4-omniauth-using-devise-with-twitter-facebook-and-linkedin/)
* [Authenticating with Twitter via the Devise gem ](https://gorails.com/episodes/omniauth-twitter-sign-in)
* [Implementing password reset with Rails](http://culttt.com/2016/07/13/implementing-password-reset-using-ruby-rails-trailblazer/)

<hr>

## Deployment, Heroku, and managing deployed apps
* [Managing rack apps in production with puma-dev](https://github.com/puma/puma-dev#puma-dev-a-development-server-for-os-x)
* [Heroku’s Intro to Ruby]([https://devcenter.heroku.com/articles/getting-started-with-ruby#introduction): support for deploying to a Heroku site.

<hr>

## Production-level apps
* [Better Rails performance with background jobs](https://blog.codeminer42.com/improving-rails-scalability-with-better-architecture-c102a2a0cdec#.6cakwxwws)
* [Is your app ready for production?](http://www.akitaonrails.com/2016/03/22/is-your-rails-app-ready-for-production)
* [Improving large rails apps with service objects](http://aaronlasseigne.com/2016/04/27/improving-large-rails-apps-with-service-objects/)
* [Phases of refactoring Rails apps](http://blog.arkency.com/2016/07/phases-of-refactoring-complex-rails-apps/)

<hr>

## Great articles and mini tutorials
* [Building an rss reader](http://www.sitepoint.com/building-an-rss-reader-in-rails-is-easy/)
* [Rebuilding Rails from scratch](https://www.reddit.com/r/ruby/comments/2b1su1/rebuilding_rails_or_how_do_i_build_my_own_ruby/)
* [Rails security guide](http://guides.rubyonrails.org/security.html)
* [Essentials of cache expiration with Rails](http://sorentwo.com/2016/07/11/essentials-of-cache-expiration-in-rails.html)
* [Rake 101](http://code.tutsplus.com/articles/rake-101--cms-26215)
* [Creating a rails5 api](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/)
* [Containerizing Rails with Docker](http://www.codelitt.com/blog/intro-setting-up-your-first-docker-container-your-rails-app/)
* [ActionCable intro](https://www.driftingruby.com/episodes/actioncable-part-1-configuration-and-basics)
* [Adding HTTPS to Rails hosted on Heroku](https://www.juanitofatas.com/blog/2016/07/12/rails_app_on_heroku_with_ssl_from_dnsimple)
* [Rails cheatsheet](https://teamgaslight.com/blog/ready-to-try-ruby-an-awesome-rails-cheat-sheet)
* [Rails debugging cheatsheet](http://www.schneems.com/2016/01/25/ruby-debugging-magic-cheat-sheet.html)
* [In-app messaging between users](https://gorails.com/episodes/in-app-messaging-between-users?autoplay=1)
* [Add chat to a Rails app](https://www.twilio.com/blog/2016/02/add-chat-to-a-rails-app-with-twilio-ip-messaging.html)
* [Building a Reddit-like commentating site](https://www.codementor.io/ruby-on-rails/tutorial/threaded-comments-polymorphic-associations)
* [Stripe with Rails](https://launchschool.com/blog/stripe-checkout): integrating client payments into your app.
* [Full-text search in Rails](https://www.viget.com/articles/implementing-full-text-search-in-rails-with-postgres)
* [Send email via Amazon Web Services](https://www.sitepoint.com/deliver-the-mail-with-amazon-ses-and-rails/)
* [Controller pitfalls](http://jetruby.com/expertise/50-common-rails-mistakes-beginners-developers-make-part-2-controllers/)
* [LaunchSchool's ActionMailer tutorial](https://launchschool.com/blog/handling-emails-in-rails): getting started with Rails mailers.
* [Rails mailers](http://vaidehijoshi.github.io/blog/2015/09/08/youve-got-mail-action-mailer-plus-letter-opener/)
* [Getting and responding to SMS in Rails with Twilio](https://www.twilio.com/blog/2016/04/receive-and-reply-to-sms-in-rails.html)
