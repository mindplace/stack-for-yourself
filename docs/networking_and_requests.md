# Networking and web requests

* Mozilla's great introduction to [how the Internet works](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)
* heck out this [animated guide to how the internet works](https://internet.frontier.com/how-the-internet-works/)

### Internet basics

* [HTTP Basics](https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/http_basics.html), a thorough primer on HTTP.
* What's a web server? [This will tell you.](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
* [Understanding status codes with Status Cats](https://http.cat/): every HTTP request has a response that is accompanied by a status code like `200 OK` or `500 Internal Server Error`, and these lovely felines can help you remember them.
* In order to understand how servers work, [build a simple server script](https://www.blackbytes.info/2016/08/build-your-own-web-server/) with Ruby.
* Understanding what [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) is.
* Understanding [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* Understanding what [APIs](https://developer.mozilla.org/en-US/docs/Glossary/API) are.

### Making API requests with JavaScript

Ajax is a way of making a request to get resources with JavaScript, without reloading or refreshing or redirecting the page. Meaning, it can happen in the background, then update a specific part of the page. This is the concept behind web applications, where interaction with a page--clicking or selecting things, etc--doesn't force your page to reload, but merely updates that particular part of it.

* Understanding the [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) request.
* [AJAX](https://developer.mozilla.org/en-US/docs/AJAX) documentation.
* Understanding how [CORS](https://zinoui.com/blog/cross-domain-ajax-request) work, cross-domain ajax requests. It's the concept where the front-end request (JavaScript) isn't itself officially connected to the server-side application where the data being requested lives. Read about [how jQuery and Node interact during a CORS request](https://www.bennadel.com/blog/2327-cross-origin-resource-sharing-cors-ajax-requests-between-jquery-and-node-js.htm).

# Open APIs

[APIs](https://en.wikipedia.org/wiki/Application_programming_interface), or *application programming interfaces*, are kind of hard to define. In the context of web development, APIs denote websites that accept requests through *hypertext transfer protocols*, better known as [HTTP](https://www.w3schools.com/tags/ref_httpmethods.asp) or HTTPS (the same process as when you type a URL into your browser and hit 'Enter', only through code), and respond back with [JSON](https://www.w3schools.com/js/js_json_intro.asp) containing your requested information. Open APIs in this case means, in effect, databases that you can access via a programming interface.

To understand the concept behind using APIs to get information from a server, read Thoughtworks' great post on [REST API design and resource modeling](https://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling).

* [Here's a small tutorial I wrote](../posts/accessing_apis_with_ruby.md) on how to use Ruby to access an API.
* [Rise of APIs](https://techcrunch.com/2016/05/21/the-rise-of-apis/?ncid=rss&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Techcrunch+%28TechCrunch%29), a cool article talking about the current status of APIs.

<hr>

### Code you'll need to make API requests

#### Ruby
* [Net::HTTP Cheatsheet](http://www.rubyinside.com/nethttp-cheat-sheet-2940.html), best short-and-sweet support for making raw HTTP requests with Ruby, no framework required.
* [HTTP Calls with Ruby](https://blog.codeship.com/http-calls-ruby/)
* [unirest](https://unirest.io/ruby), helping you make very clean http requests without the headache of [Net::HTTP](https://ruby-doc.org/stdlib-2.3.1/libdoc/net/http/rdoc/Net/HTTP.html) syntax.

#### JavaScript
* ["A practical guide to fetch(), reduce() and formatting data from an external API"](https://medium.freecodecamp.org/a-practical-guide-to-fetch-reduce-and-formatting-data-from-an-external-api-283ddd9bfdcb)
* Use [Postman](https://www.getpostman.com/), a great, free tool that helps you with all aspects of using or developing APIs with JavaScript.
* You'll need to understand CORS (cross-origin resource sharing). We have resources on that on our [networking basics](...) page.

<hr>

### Open data to use

* [Unsplash's API](https://unsplash.com/developers), a gorgeous collection of free photos to use, that you can request via an API.
* [FreeCodeCamp's Coder Survey data](https://github.com/FreeCodeCamp/2016-new-coder-survey)
* [open NASA data API](https://data.nasa.gov/)
* [Datamuse](https://www.datamuse.com/api/), a very simple API providing words and language data based on queries: rhymes and more!
* [NYC open data API](https://opendata.cityofnewyork.us/)
* [Open US government data API](https://www.data.gov/)
* [UK government data API](https://data.gov.uk/)
* [NYTimes APIs](https://developer.nytimes.com/docs)
* [NYTimes books API](https://developer.nytimes.com/docs/books_api/)
* [Google books API](https://storage.googleapis.com/books/ngrams/books/datasetsv2.html)
* IBM's [Watson API](https://www.ibm.com/watson/developer/): APIs for the "cognitive era".
* The [Imgur API](https://apidocs.imgur.com/view/1688173/6YsWHMa/?version=latest), making API calls to Imgur.
* Reddit: while it has an [official API](https://www.reddit.com/dev/api/), you can also append `.json` to any Reddit post page to get that page as JSON data.
* [Eventful](https://api.eventful.com/), an API for events.

#### Sites that are API directories
* [Programmable Web](https://www.programmableweb.com/apis/directory), a ton of open APIs featuring ability to search through them.
* [Marketplace Mashape](https://market.mashape.com/), a gigantic bunch of public APIs.
* A compiled list on Github of public APIs: [check it out here](https://github.com/toddmotto/public-apis).

<hr>

### Get data from APIs, parse with data science

* [Google trends site](https://trends.google.com/trends/explore#cmpt=q&tz=Etc%2FGMT+4): an awesome place to get data on search trends.
* [Kaggle.com](https://www.kaggle.com/competitions)
* [Kaggle: Predict Titanic’s survival](https://www.kaggle.com/c/titanic)
* [MapReduce with Hadoop and Ruby](https://speakerdeck.com/swanandp/build-your-first-mapreduce-with-hadoop-and-ruby)
* [Hadoop MapReduce tutorial](https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html)
* [MapReduce with Ruby and Apache](https://blog.cloudera.com/blog/2011/01/map-reduce-with-ruby-using-apache-hadoop/)


<hr>

### Web frameworks

* Connect a front-end application with a separately-hosted back-end application: this keeps your concerns separate. The alternative is building HTML views with your back-end application or trying to integrate a front-end application onto a back-end application, and it can easily turn into spaghetti code. Here's an example of the separated elements: [building an Angular2 / Rails 5 website and deploying to Heroku](https://angularonrails.wpengine.com/deploy-angular-2rails-5-app-heroku/), where the front-end is separated out from the back-end. Oh, and if you're not convinced, read [this article on why client-side rendering is a good idea](https://medium.freecodecamp.com/rapid-development-via-mock-apis-e559087be066#.ntlx09c0v). (That means when HTML pages are generated by client computers, rather than created in a back-end app and sent forward to the client.)
* Understanding PUT vs PATCH vs POST requests: ["POST != Create and PUT != Update"](https://www.eq8.eu/blogs/37-post-create-and-put-update)

<hr>

### Understanding Caches and Caching
Let's say I have a computer and I request to view the website "helloworld.com". The server returns to me several files: an HTML index file, a stylesheet, and several images that the HTML file needs.

Now, let's say that tomorrow, I ask again for these files by making a request to load "helloworld.com". In the interim, no changes have been made on the server to those files. So, in order to conserve time and not re-request files that are unchanged, my computer simply re-loads the files it already received for this website, after checking that those files aren't supposed to be expired.

This process of not re-requesting files is called cacheing, and most modern browsers do this. It's an effective way of speeding up the loading of a website, but there immediately arises a need to manipulate these caches, for a variety of reasons.

* ["Everything You Need to Know About the Browser Cache"](https://www.makeuseof.com/tag/browser-cache-makeuseof-explains/): understanding cacheing in the browser
* Heroku, [HTTP Caching in Ruby with Rails](https://devcenter.heroku.com/articles/http-caching-ruby-rails)
* ["Using Cache Purge to Keep Your Website Content Fresh and Responsive"](https://www.incapsula.com/blog/purge-cache-keeps-content-fresh-responsive.html)

<hr>

### Registering your domain and understanding DNS

* Amazon Web Services is one of the places you can purchase and maintain a domain (a URL). Here's their [welcome packet](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html), and their [guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar.html) to registering your domain through Amazon Web Services.
