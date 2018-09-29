---
layout: post
title: "Adventures in Git"
shortnote: "A review of git concepts that you should know as a junior developer"
tags: [blog]
published: false
---

It's been just over 2 years now that I've been using [git and Github]({% post_url 2016-05-01-github %}). I love these tools because they permit us to think about a given project through its history and variations. It also permits developers to work collaboratively, with a powerful ability try new things without worrying about breaking existing versions. So without further ado, here's some of the most useful `git` actions I've learned to date.

### `git diff`

### Viewing status

### Viewing branches

### ‎Viewing logs

* viewing logs against a branch, such as your base branch or the branch you're planning on merging into

### Merging vs rebasing

https://www.atlassian.com/git/tutorials/merging-vs-rebasing

### Interactive ‎rebase

### ‎Throwing out changes

#### 1. Throwing out changes in the working directory
#### 2. Throwing out changes in staging
#### 3. Throwing out changes that have been committed

### ‎Scrolling back to a previous commit

### Amending your last commit

### ‎Pushing up with force

### Removing `git` entirely from a project

Ever find yourself stuck, and wanting to start from scratch with `git`? You can do that without a problem.

All of your `git` history and status for a given directory is within the `.git` folder that was initialized in your directory when you ran `git init` or pulled down the directory from Github.

So all you need to do to remove the `git` history is to remove the folder:

```
# This is a destructive action. You won't be able to reverse it!
rm -rf .git/
```



<hr>

## What makes a good pull request?

### Review your code on Github before making your pull request, or before attaching a reviewer

- ‎are there any particularly thorny places in your code? Leave a comment about that specifically
- ‎make sure the PR base is correct to the best of your knowledge
- ‎make sure the only committed changes are those that are explicitly relevant for this PR

### Give your reviewer context

Ask yourself: what will the reviewer need to know? Are they working closely with me or are they going to have to look at my PR after a day of working  on something totally different? Will they have time to figure out what the change is, or not?

clear title, description in good English expressing what the problem was and what your solution is
are you working with a ticket tracker? Link the relevant task to your PR
