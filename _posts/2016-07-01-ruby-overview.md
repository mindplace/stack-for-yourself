---
layout: post
title: "Ruby overview"
shortnote: "A general overview of Ruby, cheatsheets, articles, testing, RegExps, and more."
tags: [ruby, rails, ruby-frameworks, back-end, all]
---

## Start here
Check out our [guide to installing Ruby on your local computer]({% post_url 2017-01-18-getting-started-with-ruby-on-a-mac %}).

Check out [Team Treehouse's list of Ruby projects](https://blog.teamtreehouse.com/coolest-ruby-projects-ever). Ruby is written in C, and you can look at [its source code on Github](https://github.com/ruby/ruby/) because it's an open source language, which is how you're able to learn it for free. Also, there's a project to
[write a Ruby compiler in Ruby](https://hokstad.com/compiler) as part of a fun effort to write Ruby in Ruby (as opposed to C).

Definitely take a look at the [Ruby core object model](https://www.gliffy.com/go/publish/5152080) to get a sense for how it organizes itself.

Probably the best reason to learn Ruby is to be able to build things on/for the web and have a lot of fun while doing it. So check out [Rails]({% post_url 2016-07-01-ruby-rails %}) and other [Ruby frameworks]({% post_url 2016-07-01-ruby-frameworks %}) for building with
Ruby on the web.

<hr>

## Essential resources
* [Official Ruby documentation](https://ruby-doc.org/): a go-to place to find built-in Ruby methods.
* [Ruby Weekly](https://rubyweekly.com/?m), a once–weekly e-mail round-up of Ruby news and articles, created and managed by Peter Cooper, author of *[Beginning Ruby](https://www.amazon.com/Beginning-Ruby-Novice-Professional-Experts/dp/1430223634)* book.
* Ruby was developed and is typically used on Unix-based operating systems like Mac or Linux computers. Are you on a Windows computer? [Check out this article on some issues you might be encountering!](https://www.rubytapas.com/2016/12/14/ruby-code-on-windows/)
* [Pry](https://pryrepl.org/), an essential debugging tool

<hr>

## Concepts
* [CSV with Ruby](https://blog.udemy.com/ruby-csv/)  
* [Understanding self in Ruby](https://www.honeybadger.io/blog/ruby-self-cheat-sheet/), one of the several of the most important Ruby concepts to learn.  
* [Hash#fetch vs Hash#key](http://www.virtuouscode.com/2009/03/16/go-fetch/)
* [Singleton classes](https://www.devalot.com/articles/2008/09/ruby-singleton)
* [Include vs Extend for using modules](https://www.railstips.org/blog/archives/2009/05/15/include-vs-extend-in-ruby/)

<hr>

## Ruby blocks
* [Variables, constants, literals](https://www.tutorialspoint.com/ruby/ruby_variables.htm)
* [Blocks, Procs, lambdas](https://awaxman11.github.io/blog/2013/08/05/what-is-the-difference-between-a-block/)  
* [Procs and lambdas and how to differentiate them](https://www.skorks.com/2010/05/ruby-procs-and-lambdas-and-the-difference-between-them/)
* [More on understanding blocks, Procs, and lambdas](https://www.reactive.io/tips/2008/12/21/understanding-ruby-blocks-procs-and-lambdas)

<hr>

## Cheatsheets
* [Cheatsheet for Ruby Time and Date libraries](https://idiosyncratic-ruby.com/57-what-the-time.html)
* [Essential Ruby cheatsheet](https://overapi.com/ruby) for methods defined on its built-in object types.
* [Ruby core object model](https://www.gliffy.com/go/publish/5152080) will help you see how the language built-ins are organized.

<hr>

## Ruby style guides
* [Ruby style guide](https://github.com/bbatsov/ruby-style-guide), one of the good ones  
* [AirBnB Ruby Style guide](https://github.com/airbnb/ruby)  

<hr>

## Ruby and the web, without frameworks

* [Net::HTTP Cheatsheet](http://www.rubyinside.com/nethttp-cheat-sheet-2940.html), best short-and-sweet support for making raw HTTP requests with Ruby, no framework required.
* [HTTP Calls with Ruby](https://blog.codeship.com/http-calls-ruby/)
* [Unirest](https://unirest.io/ruby), helping you make very clean http requests without the headache of [Net::HTTP](https://ruby-doc.org/stdlib-2.3.1/libdoc/net/http/rdoc/Net/HTTP.html) syntax.
* [Building a Rack web server in Ruby](https://ksylvest.com/posts/2016-10-04/building-a-rack-web-server-in-ruby)
* [RestClient](https://github.com/rest-client/rest-client), a simple gem for making HTTP requests, another alternative/wrapper to Ruby's [Net::HTTP](https://ruby-doc.org/stdlib-2.3.1/libdoc/net/http/rdoc/Net/HTTP.html)
* [Using Google's Calendar API with Ruby wrappers](https://readysteadycode.com/howto-access-the-google-calendar-api-with-ruby)
* [Writing a microservice in plain Ruby](https://blog.codeship.com/writing-microservice-in-ruby/)
* [Writing a simple Ruby web-crawler](https://rossta.net/blog/how-to-write-a-simple-web-crawler-in-ruby-revisited.html)

<hr>

## Testing
* [RSpec documentation](https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers), exhaustive and well-written  
* [Intro to test writing](https://pragmaticstudio.com/blog/2005/3/18/ruby-learning-test-1-are-you-there-world) with RSpec
* [Writing tests for remote URL calls](https://github.com/Anafore/remote_tips)
* [Better Specs](https://www.betterspecs.org/): a spectacular, thorough collection of rspec guidelines.

<hr>

## Refactoring
* *[Refactoring: Ruby Edition](https://www.amazon.com/Refactoring-Ruby-Addison-Wesley-Professional/dp/0321984137)*, by Jay Fields et al  
* *[Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)*, by Robert C. Mrtin, a superb book and recommended.   
* [Refactoring, from good to great](https://www.youtube.com/watch?v=DC-pQPq0acs), a highly recommended talk from a conference

<hr>

## Regular Expressions with Ruby
* [Rubular expression checker](https://www.rubular.com/), your go-to for crafting regular expressions
* [RegExp cheatsheet](https://overapi.com/regex)
* *[The Bastard's Book of Regular Expressions](http://regex.bastardsbook.com/)*, by Dan Nguyen, free online.
* [RegExp crossword](https://regexcrossword.com/), a cool learning tool
* [Interactive and excellent RegExp tutorial](https://regexone.com/)
* ['You Don't Know Anything About Regular Expressions': A Complete Guide](https://code.tutsplus.com/tutorials/you-dont-know-anything-about-regular-expressions--net-7869)
* [More RegExps in Ruby](https://medium.com/@leighsn/verbal-expressions-in-ruby-fb8a912221e2#.79j0zoodn)
* [RegExps](https://www.rubyist.net/~slagell/ruby/regexp.html) from the venerable *[Ruby User's Gide](http://www.rubyist.net/~slagell/ruby/index.html)*

<hr>

## More resources
* [Rails Casts](https://www.grok-interactive.com/podcast/), some of the most well-known Ruby/Rails casts, many come with really excellent notes if you don't learn by listening.  
* [Awesome Ruby](https://awesome-ruby.com/), big bunch of great resources.
* [PracticingRuby](https://www.practicingruby.com/)
* [Ruby Rogues podcast](https://devchat.tv/ruby-rogues), a panel discussion about topics relating to programming, careers, community, and Ruby. They release a conversation with notable programmers and Rubyists each week.
* [Ruby heap corruption](https://webuild.envato.com/blog/tracking-down-ruby-heap-corruption/)  
* [Visualizing Ruby heaps](https://github.com/mattbaker/ruby-heap-viz)
* [Scraping with Ruby](https://learnetto.com/blog/the-beginner-s-guide-scraping-in-ruby-cheat-sheet)  
* [Mutability and freezing](https://www.blackbytes.info/2016/01/ruby-mutability/)
* [Ruby tricks you should be using](http://www.rubyinside.com/21-ruby-tricks-902.html?platform=hootsuite)
* ['Inject is a Fundamental Building Block'](http://renderedtext.com/blog/2016/02/18/inject-is-a-fundamental-building-block/)
