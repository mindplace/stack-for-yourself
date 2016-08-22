---
layout: post-for-blog
title: "Accessing APIs with Ruby: a tutorial"
shortnote: "Using 'open-uri' and JSON to get data from an API with Ruby."
tags: [blog]
---

Ruby's [`open-uri`](https://ruby-doc.org/stdlib-2.1.2/libdoc/open-uri/rdoc/OpenURI.html) is a built-in library used to help make HTTP requests. Ruby's [`json`](http://ruby-doc.org/stdlib-2.0.0/libdoc/json/rdoc/JSON.html) module is also great to know for parsing JSON data into Ruby hashes.

To make an API request, you'd normally need an [API endpoint](https://dev.socrata.com/docs/endpoints.html). You make a request to that endpoint via a program or a script; when your program runs and your request is made, the response is recorded onto it.

Here's an example use of the `open-uri` and `json` libraries with an API endpoint. I decided to use one of [NYC's open data APIs](https://data.cityofnewyork.us/resource/swhp-yxa4.json) to get information about open job positions listed on NYC's government sites.

Once I accessed the site, I went looking for the API endpoint URL:

![api-endpoint](/public/img/endpoint.png)

Grabbing that, I opened up my empty `workspace.rb` file and wrote the following code:

```ruby
require 'open-uri'
require 'json'

# the URL is parsed as a URI
data_uri = URI.parse('https://data.cityofnewyork.us/resource/swhp-yxa4.json')

# the data is pulled down and opened as a file,
# information from the file is pulled into an array,
# array is joined up,
# and processed by the JSON library into a Ruby hash

data = JSON.parse(data_uri.open{|file| file.readlines }.join)

```

Here's a snippet of what the `data` variable now contains:

```
[{"__of_positions"=>"2",
  "agency"=>"DEPT OF DESIGN & CONSTRUCTION",
  "business_title"=>"Director",
  "civil_service_title"=>"ADMINISTRATIVE ENGINEER",
  "division_work_unit"=>"Infra-Program Management",
  "job_description"=>
   "Only candidates who are permanent in the Administrative Engineer title, or those who can provide proof of successful registration for the March 2016 Open Competitive or Promotional Exam may apply. Failure to do so will result in your disqualification.   Under the direction of the Associate Commissioner, the selected candidates will serve as Director for an assigned Borough. Responsibilities include: supervising a staff of Sr. Project Administrators and Project Administrations; managing approximately 50-60 sewer, watermain and roadway capital funded construction projects that are valued in excess of $150 million; reviewing and tracking projects from pre-design through final construction phase; and resolving operational field problems to decrease inconvenience to impacted areas. Additionally, candidates will also serve as liaison between DDC, DOT, DEP, and other client agencies as it relates to project scopes, conflicts, troubleshooting and resolving project related issues that arise.",
  "posting_date"=>"07/21/2016 00:00:00",
  "salary_range_from"=>"58675",
  "salary_range_to"=>"156793",
  "title_code_no"=>"10015",
  "to_apply"=>
   "For City Employees, please go to Employee Self Service (ESS), click on Recruiting Activities/Careers and Search for Job ID # 248623.    Do not e-mail, mail or fax your resume to DDC directly. No phone calls will be accepted.",
  "work_location"=>"30-30 Thomson Ave L I City Qns",
  "work_location_1"=>"30-30 Thomson Avenue, LIC, NY"},
 {"__of_positions"=>"1",
  "additional_information"=>
   "In compliance with federal law, all persons hired will be required to verify identity and eligibility to work in the United States and to complete the required employment eligibility verification document form upon hire.  NOTE: Only permanent and non-competitive Clerical Associates will be considered for an interview. Please include your Employee Identification Number (EIN) when applying and indicate in your cover letter if you are a permanent or non-competitive Clerical Associate.",
  "agency"=>"DEPARTMENT OF FINANCE",
  "business_title"=>"Timekeeper Representative",
  "civil_service_title"=>"CLERICAL ASSOCIATE", ...}, ...]
```

By the way, I explored these values and wrote this script with heavy involvement of the [`pry` gem](https://github.com/pry/pry), which lets you stop in the middle of your scripts to check out values.
