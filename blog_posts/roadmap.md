# Your Full Stack Roadmap

## Hello world!

You want to learn how to program. Hopefully you want to learn to build web applications. Or you're already a developer and want to keep working on your skills. Awesome! These docs are an aggregation of resources from around the web to help you learn to code.


## Learning to code can be [really hard](https://www.vikingcodeschool.com/posts/why-learning-to-code-is-so-damn-hard).

Don't give up.

<img src="https://s3.amazonaws.com/viking_education/web_development/blog/coding_is_hard_confidence_competence.png" width="100%">

Your [first 100 hours](https://www.vikingcodeschool.com/posts/the-beginner-s-dilemma-your-first-100-hours-of-code) will probably be to be especially difficult: first you'll be on Codecademy or somewhere similar, getting the hang of variables and `puts` statements, and suddenly you'll find yourself trying to solve some sort of simple [algorithm](...) like [finding the nth Fibonacci number](https://www.programmerinterview.com/index.php/recursion/find-nth-fibonacci-number), and everything will break and you'll get frustrated, cry, and believe you're not cut out for this.

Don't let this deter you. Keep at it and it will continue to make more and more sense. Make a plan, define your projects and your personal roadmap, reach out to others for help, direction, support, and community, and don't lose heart.

Trust that you _really are_ cut out for this. [People of all ages and walks of life are cut out for this](https://medium.freecodecamp.com/yes-im-56-and-learning-to-code-f33abea6fd4c#.1fo7o2wib)--your background means _nothing_. I personally hold 2 degrees in English literature and worked in HR/Compliance before deciding to pursue software engineering, and I couldn't be happier with my decision.

<hr>

## Essential competencies and your full-stack roadmap!

<img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/08/1409261668002.png" width="100%" alt="web development layers">

## Stack For Yourself's Curriculum

back-end:
  name: Back-end Development
  description: Back-end computing is the infrastructure of a website or application that is not usually visible to the user. It usually involves a database and a web framework working together to store information for the application, allowing developers to make HTTP requests for that information or to add information to the database.

front-end:
  name: Front-end Development
  description: Front-end computing handles everything that a user of an application or website would interact with/view. Typically this involves HTML, styling with CSS, and creating user interaction with JavaScript. A purely front-end application would not connect to a database. For example, this website is purely front-end and has no database, makes no HTTP requests to a web framework, or depends on anything other than its own HTML, CSS, and JavaScript files.

comp-sci:
  name: Computer Science Fundamendals
  description: Fundamental concepts include managing your tools and being able to use text editors and command-line interfaces to write and run code, irrespective of whether you are pursuing front-end, back-end, or full-stack web development.

basics:
  text: Set up your development environment.
  links:
    typing: Be able to type very well, quickly, and cleanly. Try <a href="https://typing.io">typing.io</a> to level up.
    tools: Get yourself a <a href="/everything-else/2016/05/01/managing-your-tools/">text editor, project management tools, and more</a>.
    command-line: You'll need to learn how to use <a href="/comp-sci/2016/10/01/command-line/">command line interfaces</a>. Terminal, bash/shell, Cygwin, and various other programs will allow you to have a textual interface to your computer, an essential part of writing code.

fundamentals:
  text: You need a foundational grasp of Computer Science concepts in order to think your way around code. You don't necessarily need this in order to build with code... but you do need it in order to understand what you're building and debugging.
  links:
    links: Check out <a href="/comp-sci/2016/10/01/general-uncategorized/">our list of fundamental computer science concepts</a>.
    roadmap: Take a look at <a href="https://github.com/kamranahmedse/developer-roadmap/" target="_blank"> this 2018 developer roadmap</a>. This a useful reference if you're wondering where a topic fits into your journey.
    variety: Variety of <a href="https://wayback.archive-it.org/3671/20150528220118/https://www.extension.harvard.edu/open-learning-initiative/intensive-introduction-computer-science">free online Computer Science courses from universities</a>. These are often Computer Science courses that teach broad programming/computer concepts.
    compsci: Some great Computer Science <a href="http://videolectures.net/Top/Computer_Science/">video lectures</a>.

back-end-language:
  text: Learn a back-end language that plays nice with the web, like Ruby, Python, Go, C#, JavaScript via Node.js, PHP, or Java. Don't let yourself get lost in the crazy comparison-mongering crowds that tell you that Ruby is dying or Java is too hard. Every single one of these languages has an excellent history, great community of contributors and users, and makes buckets of cash for the companies that use them. Every one of these are great for web development for their own reasons.
  links:
    this: <a href="/back-end/2016/10/01/languages/">Back-end languages</a>

algorithms:
  text: Learn the language you've chosen by solving small problems, called algorithms. Then graduate to more challenging algorithims, learn and use data structures, and understand essential concepts like Object Oriented Programming. Everything you'll learn will only improve your grasp of the back-end language you've chosen.
  links:
    games: Create games for the console and write small programs, like <a href="https://github.com/mindplace/nifty_things/tree/master/To_do_list">to-do lists</a> or the <a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi">Tower of Hanoi</a> game.
    algorithms: <a href="/comp-sci/2016/09/01/algorithms-uncategorized/">Algorithms</a>. These are small code problems. Solving them demands a fluency with your chosen language, and they tend to really help you learn that language. They're an essential part of finding work as well, as most jobs reqiure that the applicant solve one or more algorithms at the technical interview.
    data-structures: <a href="/comp-sci/2016/08/01/data-structures/">Data strutures</a>. These are ways of organizing small bits of data that your program needs to have access to as the program is executed.

git:
  text: Learn the heck out of git.
  links:
    git: <a href="/comp-sci/2016/05/01/github/">Intro to git and Github</a>. These are cornerstone tools to a developer's workflow.

databases:
  text: Learn how to setup and use databases with your projects. Get really comfortable with SQL syntax.
  links:
    sql: Check out our <a href="/back-end/2016/08/01/databases-uncategorized/">introduction to databases</a> resource.

networking:
  text: Learn how the web works, how requests are made, where code lives, how servers listen for and respond to queries.
  links:
    internet: Our <a href="/back-end/2016/10/01/networking-basics/">introduction to networking</a>, or, an introduction to how the Internet works and how applications make and respond to requests.
    text: Learn a back-end web framework for the back-end language you chose. Back-end frameworks consist of files that are prewritten for you in the appropriate language, in order to take care of the initial setup of an application. They handle managing your database, creating the 'logic' of what your application can do, and they allow you to focus on working on the parts that are unique to your application instead of basic configurations that every application must have in order to be 'live' on a server. An example of a back-end web framework for Ruby is <a href="/2016/07/01/ruby-rails/">Rails</a>. Here's a <a href="https://www.unforgivableruby.com/post/114752678529/learning-web-developmentrails-without-spending">place to learn about web development concepts</a> within the context of Rails.

front-end-basics:
  text: Learn to create simple pages with HTML and CSS.
  links:
    ours: Check out our <a href="/front-end/2016/06/01/front-end-part-1-html-css-dom/">introduction to HTML, CSS, and the DOM</a>, or, Document Object Model.
    viking: <a href="https://www.vikingcodeschool.com/prep">Viking School prep course</a> is a lovely overall introduction to HTML and CSS.

javascript:
  text: Learn JavaScript. Be able to write vanilla JavaScript both in the sense of objects and in the sense of DOM manipulations.
  links:
    jquery: Learn more about the DOM and the way JavaScript interacts with HTML and CSS. A great way to do that would be to learn the most popular JavaScript library, jQuery. Find that and other resources <a href="/front-end/2016/06/01/javascript-uncategorized/">here</a>.
    framework: Choose a <a href="/front-end/2016/06/01/front-end-frameworks/">front-end JavaScript framework</a> and learn it. Every modern framework has a great community and support right now, so don't worry too much about choosing the 'wrong' one.

next steps:
  text: Finally, showcase your work live, and build, build, build.
  links:
    github: Learn to deploy your code to servers, using services like Heroku or Amazon Web Services, to have your projects visible live. You can deploy applications that do not have a back-end or databases, applications such as a small set of HTML, CSS, and JavaScript files, for free on Github via Github Pages.
    build: Build projects to showcase every single aspect of your learning. Share all your best code on Github so others can see your portfolio and possibly even use the code you've written.

other-roadmaps:
  text: Other roadmaps!
  links:
    medium-freecodecamp: FreeCodeCamp, <a href="https://medium.freecodecamp.com/my-journey-to-becoming-a-web-developer-from-scratch-without-a-cs-degree-2-years-later-and-what-i-4a7fd2ff5503#.cr31xvcv6">My Journey to Becoming a Web Developer From Scratch Without a CS Degree, 2 Years Later and What I Learned</a>
    more-freecodecamp: FreeCodeCamp, <a href="https://medium.freecodecamp.org/how-to-go-from-hobbyist-to-professional-developer-11a8b8a52b5f">How to Go From Hobbyist to Professional Developer</a>
    another-freecodecamp: <a href="https://medium.freecodecamp.com/how-i-got-a-second-degree-and-earned-5-developer-certifications-in-just-one-year-while-working-and-2b902ee291ab">How I got a second degree and earned 5 developer certifications in just one year, while working and raising two kids</a>
    yet-one-more-freecodecamp: <a href='https://medium.freecodecamp.com/a-roadmap-to-becoming-a-web-developer-in-2017-b6ac3dddd0cf'>A roadmap to becoming a web developer in 2017</a>
    becoming-a-dev-in-2017: <a href="https://github.com/kamranahmedse/developer-roadmap">Becoming a developer in 2017</a>, an open-source map for full-stack, front-end, and/or back-end development essential competencies.
    google: <a href="http://everydayutilitarian.com/essays/learn-code/">Go from Zero to Programmer Hero in One Guide!</a> But really there's a lot of <a href="https://www.quora.com/If-you-were-designing-a-syllabus-to-take-a-newbie-like-me-from-a-coding-zero-to-a-Full-Stack-Web-Dev-Hero-in-6-months-and-under-1000-what-would-you-tell-me-to-learn-and-what-online-resources-should-I-use">cool discussions</a> about how to get into web development when you're a raw beginner, that are worth checking out.
    dreaming-in-code: <a href="https://www.dreamincode.net/forums/forum/78-programming-tutorials/">Dreaming in Code</a>, Lots of tutorials for different languages.
    mozilla: <a href="https://developer.mozilla.org/en-US/docs/Web">Web technology for developers</a>.
    free-code-camp: <a href="https://medium.freecodecamp.com/how-to-get-a-developer-job-in-less-than-a-year-c27bbfe71645#.wz90cqkwl">"How to Get a Developer Job In Less Than A Year"</a>, a perspective from <a href="https://www.freecodecamp.com/">FreeCodeCamp</a>.
    codecademy: <a href="https://www.codecademy.com">Codecademy's Full Stack path</a>. Codecademy is an amazing first step on your road to code, especially if you have never written any code before. Great introduction to essential full stack concepts and competencies.
    code-org: <a href="https://code.org/learn">Code.org</a> courses.
    code-avengers: <a href="https://www.codeavengers.com/profile#intro">Code Avengers</a>, various free courses to learn basics.
    team-treehouse: <a href="https://teamtreehouse.com/">Team TreeHouse</a>, various small courses.
    khan-academy: <a href="https://www.khanacademy.org/">KhanAcademy</a> courses.
    bento: <a href="https://bento.io/">Bento</a>, cool tutorials for different web development technologies and concepts.
    codeschool: <a href="https://discover-devtools.codeschool.com/">Codeschool</a>, lots of great, interactive tutorials, especially geared towards raw beginners. Some of them are behind paywalls, but it's very reasonable pricing.
    lynda: <a href="https://www.lynda.com/">Lynda</a>, video tutorials.
    lifehacker: <a href="https://lifehacker.com/5401954/programmer-101-teach-yourself-how-to-code">LifeHacker's "Programmer 101 Teach Yourself To Code"</a> article with plenty of links.

<hr>

## Bootcamps

I really like the idea of <a href="https://techcrunch.com/2016/01/09/how-startups-are-solving-a-decades-old-problem-in-education/">mastery learning</a>, which is when you learn or are taught a concept until you master it, before moving on to the next one. Ideally, you do it with the help of a mentor or community.

If you choose to go to a bootcamp, <a href="https://www.linkedin.com/pulse/5-steps-get-most-out-coding-bootcamp-tom-goldenberg?trk=hp-feed-article-title-publish">get the most out of it</a>.

**Free**

* **Your own path.** Many software engineers are self taught, and _all_ engineers have to learn how to teach themselves at some point in their early journey. **You can learn everything you need to know without spending any money.** The catch is, you will need buckets of discipline.
* [The Odin Project](https://www.theodinproject.com/courses/ruby-programming): completely free, Ruby-based full-stack development program, with an amazing online community.
* [FreeCodeCamp](https://www.freecodecamp.com): superb, completely free program, teaching from the front-end backwards, with an excellent and huge community which in many cities has local presence. Actively maintained and being expanded to include new courses such as one teaching D3.js.

**Mentor-based bootcamps**

* [Bloc.io](https://www.bloc.io/web-developer-career-track): a paid bootcamp whose model is to connect you with a developer who acts as a mentor.
* [Thinkful](https://www.thinkful.com): similarly to Bloc.io, a paid bootcamp program connecting you to a mentor.

**Traditional bootcamps**

* [AppAcademy](https://www.appacademy.io/course/app-academy-open): probably the best one I can think of.
* ...too many other great high-quality ones to name.
*

<hr>

## Communities

* Podcasts, such as, [Best podcasts for new coders](https://medium.freecodecamp.com/the-best-podcasts-for-new-coders-and-the-best-tools-for-listening-to-them-df393b1c8dc#.2tw6sfg9f)
* Local [Meetup](https://meetup.com) groups and [Eventbrite events](https://eventbrite.com). These often take the form of workshops or classes, which is a great way to level up your skillset.
* [Brooklyn Hackathon Events](https://www.eventbrite.com/d/ny--brooklyn/hackathon/?crt=regular&slat=40.5926724&slng=-73.9888682&sort=best&view=list)
* [AngelHack](https://angelhack.com/), a company that hosts hackathons in different cities.
* [Devpost](https://devpost.com/hackathons), a hackathon directory of online and in-person hackathons around the globe.
* [Stack Overflow](https://stackoverflow.com)
* [/r/learnprogramming](https://www.reddit.com/r/learnprogramming/)
* [Gitter](https://gitter.im/) coding chatrooms
* [NYCDevs Slack channel](https://nycdevs.slack.com/messages/general/)
* [Find other Rubyists](https://www.reddit.com/r/ruby/comments/4jktya/where_do_rubyists_hang_out_online_these_days/)
* [Ruby conferences](https://rubyconferences.org/)
  * ["Get Your Conference Proposal Accepted"](https://schneems.com/blogs/2016-04-07-conference-proposal)
