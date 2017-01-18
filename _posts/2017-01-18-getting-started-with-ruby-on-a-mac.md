---
layout: post
title: "Guide to Getting Started with Ruby"
shortnote: "Get Ruby installed on your local computer."
tags: [blog]
---

### Are you developing on a Windows or Linux computer?

Then this guide will not work for you. These things might:
* Official list of ways to install Ruby, as given [by the documentation](https://www.ruby-lang.org/en/documentation/installation/).
* **Windows users**: try [this RubyInstaller](http://rubyinstaller.org/), or this [TeamTreeHouse Rails installation guide](https://teamtreehouse.com/library/build-a-simple-ruby-on-rails-application/getting-started-with-rails/installing-rails-windows).
* **Linux users**: check out the [official list of ways to install Ruby](https://www.ruby-lang.org/en/documentation/installation/) on your dystro.

### Okay, you're a Mac user. Have you ever used your Terminal before?

Yes? Okay, you're good to go.

No? **Don't go any further before learning about your Terminal.** Here's resources to get you started:

* Our [Command line interfaces]({% post_url 2016-10-01-command-line %}) introduction
* TeamTreeHouse's [introduction to the Mac Terminal](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)
* Ashley Noland's great guide to [getting started with Terminal](https://ashleynolan.co.uk/blog/getting-started-with-terminal)
* Take the [Command Line Crash Course](https://learnpythonthehardway.org/book/appendixa.html), a really excellent and concise tutorial getting you up and running with navigating the shell and writing bash commands.

Note: the terms *command line*, *command-line*, *command line interface (CLI)*, *terminal*, *shell*, and *bash* all mean the same thing: a text-based interface to your computer where you can run [bash](http://cs.lmu.edu/~ray/notes/bash/) code.

<hr>

## Part 0: What we'll be doing

You've decided to get started with Ruby on your local computer. Awesome! Ruby is a great back-end language with a lot to recommend it, not the least of which is a mature ecosystem of tools and communities.

Here's the process this guide will take:

* **Install a package manager, Homebrew.** This is like the Mac App Store, but for the command line, and free. It will make it easy to download everything else you're going to be installing.
* **Install `rbenv`, a Ruby version manager.** Macs already come with a version of Ruby installed, but this is a protected version and is only open to the operating system to use. You'll need `rbenv` because it will allow you to download multiple versions of Ruby and specify which one is going to be used, without affecting the protected version of Ruby that your operating system uses.
* **Install Ruby.** Using `rbenv`, we'll install a recent version of Ruby to your computer.
* **Manage some required configurations** for installing gems (Ruby's external libraries), and to ensure you're working with the right version of Ruby when you need it.
* **Install Pry, a very useful gem, to test that we've done everything correctly.**

**READ YOUR TERMINAL OUTPUT.** If there are any errors, they will be obvious, and you need to respond correctly to them.

<hr>

## Part 1: Installing a package manager

Open your terminal. Install [Homebrew](http://brew.sh/), a package manager, by pasting the following code into your prompt:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

This might prompt you for your password. Type in your password--it won't show anything as you type, but it will be listening nevertheless. Press enter to continue.

It'll take some time to finish installing, don't continue until your prompt returns.

Review the output to make sure there were no errors and the process of installing didn't stop or break/error out.

<hr>

## Part 2: Installing [rbenv](https://github.com/rbenv/rbenv), a Ruby version manager
Check if you already have `rbenv` installed by inputting the following command in your terminal:

```
rbenv -v
```

The `-v` flag usually stands for *version* or *verbose*, which means, "show me information about this program". If you get output like `rbenv 1.1.0`, you already have it installed, so move on to the next part.

If you don't have `rbenv` installed, input the following command:

```
brew install rbenv
```

Check the output to make sure everything installs as expected.

<hr>

## Part 3: Installing Ruby with `rbenv`
In the terminal, type the following:

```
rbenv install 2.3.0
```

This command tells `rbenv` to install Ruby, specifically Ruby version 2.3.0. There are other versions, but this is a good, current version (as of Jan 18, 2017).

This will also take some time.

<hr>

## Part 4: Configurations

When your `rbenv` is done installing Ruby, run the following code:

```
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

There won't be any output when you run this command.

This is the last step in installing `rbenv`. When you've run this command, quit your terminal entirely, then reopen it.

Now, let's set the correct Ruby version to be used whenever you want to write some Ruby code and run it:

```
rbenv global 2.3.0
```

This means, "Set the global version of Ruby in this computer to be 2.3.0".

Finally, run the following code:

```
gem update --system
```

This will update where your gems will download, making sure they will always download to a subfolder within the Ruby 2.3.0 version, which will allow you access. This will also ensure you have the most recent version of [rubygems](https://rubygems.org/) installed on your computer, to allow you to download gems from here on.

<hr>

## Part 5: Download a gem to test that everything works

Quit and reopen your terminal one more time.

Run the following code to download [pry](https://github.com/pry/pry), a fantastic gem used to pause programs in the middle in order to inspect values:

```
gem install pry
```

If nothing errors out, and you get some output like `4 gems installed`, you're all set! You now have Ruby installed and can be on your merry way.

<hr>

## You're done!

You can write Ruby files on your computer now. Here's a list of things to try out:

* **Take the official** ["Ruby in 20 minutes" tutorial](https://www.ruby-lang.org/en/documentation/quickstart/).

* **Create and run a Ruby file.**

  * In your terminal, navigate to a folder where you'll be storing your programming files.
  * Run `touch test_file.rb` to create a blank file with an `.rb` extension, for Ruby files.
  * If you don't have one already, download a text-editor like [Atom](https://atom.io/) (a text editor built by [Github](https://github.com)) or [Sublime](https://www.sublimetext.com/) (probably the most popular text editor).
  * Open your new file in your text editor and write some code, such as `puts 'Hello world!'`.
  * Save your file.
  * In your terminal, run the file using the command `ruby test_file.rb` and see whatever output be printed on the screen.

* **Continue your learning** by checking out our [resources on Ruby]({{ site.baseurl }}/tag/ruby).
