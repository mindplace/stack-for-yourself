---
layout: post
title: "Using gems in a Ruby script: pry"
shortnote: "Getting started with pulling in additional libraries in a Ruby project."
tags: [blog]
---

Like many (most?) languages, when you execute a program in Ruby, it holds the entire program in memory while it executes. So in order to use external libraries and/or [gems]({{ site.baseurl }}/2016/07/01/ruby-gems), you'll need to let your program know to include them.

## An example of when you'd want to include pry

Let's say we're writing a basic program. It's a script for computing the sum of the contents of an array. It consists of one file, `sum_array.rb`:

```ruby
# sum_array.rb

def sum_array(array)
  # some code here
end

if ARGV.length > 0
  given_array = eval(ARGV[0])
else
  print "\nPlease write the array you'd like to sum up:   "
  given_array = eval(gets.chomp)
end

puts sum_array(given_array)

```

Notice what is happening on line 20: `ARGV` means `argument vector`, and it's a [way of passing arguments by the command line](http://jnoconor.github.io/blog/2013/10/13/a-short-explanation-of-argv/). So, that option will get used if you run your program like this: `ruby sum_array.rb "[10, 23, 18]"`

But let's say you've never used `ARGV` before--in which case, it's a good idea to test your knowledge/lack of knowledge to ensure that `ARGV` really does pick up on what you're passing in. Or, let's say you don't pass in anything and run your program as normal, and come to line 23 and want to understand what `eval(gets.chomp)` does. Or, you just want to be sure, before you get to `puts sum_array(given_array)`, that that argument `given_array` is the input you intend for it to be.

In every case, you need a way to check into values at [runtime](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)). One awesome tool for this is a gem called [pry](https://github.com/pry/pry).

## Downloading the appropriate library/gem (in this case, pry)

Off to the terminal/command line we go. Assuming you have both [Ruby](https://www.ruby-lang.org/en/downloads/) and the [Bundler](http://bundler.io/) gem installed, run the following command:

```bash
gem install pry
```

Resulting output as I ran that command:

```bash
Parsing documentation for pry-0.10.4
Installing ri documentation for pry-0.10.4
Done installing documentation for pry after 2 seconds
1 gem installed
```

## Including it in your program

Back we go to `sum_array.rb`. Now we augment the file by adding the following to the top:

```ruby
# sum_array.rb
require 'pry'

def sum_array(array)
  # some code here
end

# etc

```

`require` is a command that [loads the library of that name into memory only once](http://rubylearning.com/satishtalim/including_other_files_in_ruby.html) when you run this file.

Now, let's add some code to pause the program in the middle of executing. In order to do that, we will need to scan [pry's documentation](https://github.com/pry/pry) to find the code we need to use. That happens to be `binding.pry`:

```ruby
# sum_array.rb
require 'pry'

def sum_array(array)
  # some code here
end

if ARGV.length > 0
  given_array = eval(ARGV[0])
else
  print "\nPlease write the array you'd like to sum up:   "
  given_array = eval(gets.chomp)
end

binding.pry

puts sum_array(given_array)

```

Run the file via `ruby sum_array.rb`. At the line `binding.pry`, the program will pause, and you can type in `given_array` to check what it is:

![pry-screenshot-1](/img/pry-screenshot-1.png)

Cool, looks like that's an array. We have confirmed that we have an array before getting to `sum_array(given_array)`.

You can leave the `pry` console by typing `exit` (which will go on to the next `binding.pry` if there is one, or end the program) or `!!!` (which will exit the console and stop the program).

## Final thoughts

Most gems will have documentation on their Github pages on getting started with their code, so be sure to read and reference that first.

There are some very important libraries in Ruby that are built-in but not automatically required unless you specifically ask for them, such as [`JSON`](http://ruby-doc.org/stdlib-2.0.0/libdoc/json/rdoc/JSON.html), [`Net::HTTP`](https://ruby-doc.org/stdlib-2.3.3/libdoc/net/http/rdoc/Net/HTTP.html), and [`csv`](https://ruby-doc.org/stdlib-2.0.0/libdoc/csv/rdoc/CSV.html). You won't have to download anything in order to use them, and you can use the same `require [whatever]` syntax for them.  

<hr>

[Download the code from this post](https://gist.github.com/mindplace/b24e631edea1ade2f05259f19e31a079) to finish writing this program yourself!

<script src="https://gist.github.com/mindplace/b24e631edea1ade2f05259f19e31a079.js"></script>
