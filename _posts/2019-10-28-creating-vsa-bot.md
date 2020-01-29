---
layout: post
title: Creating VSA Bot
date: '2019-10-28'
category: STEM
author: Ben Beehler
avatar: /uploads/beehler-avatar.jpg
comments: true
hidden: false
mathjax: false
images:
  - file: /uploads/beehler-code-bot.jpg
---
Last year, my first time as a VSA moderator, I mentioned to Thayer Luscian the idea of an automated piece of software that could proactively scan the discussion groups. Ideally, this project wouldn't replace moderators, but, instead, assist them. He thought this was an excellent idea, but the implementation could pose massive technical hurdles. However, as the 2018-2019 school year came to a close, the idea slowly resurfaced. After several breakthroughs, much frustration, and countless hours, an initial prototype was developed. The following paragraph outlines VSA Bot and its inception. 

What is VSA Bot? It is a Discord bot and a discussions auto-moderator. The Student Commons team controls the bot from within the Discord chat service. Whenever the bot detects a comment that it deems inappropriate, it responds accordingly and reports it to the moderators for evaluation. VSA Bot also has a command interface on both Discord and discussions. Users can request Bible verses, query Wolfram Alpha (a knowledge resource), report comments, ping moderators, and perform numerous other commands all on the discussion boards with ease. The sheer functionality now far surpasses what was originally envisioned. 

Each feature is a novelty, derived from one breakthrough after another. Originally, Thayer and I wanted to authenticate using Schoology’s own API (Application Programming Interface). Simply put an API allows one program to communicate with another program. To use this API, VSA Bot would have to contain a special key for VSA. If someone were to obtain this key, they would have unlimited access to changing anything in the school. Because of this, I was not able to retrieve it. I had to find a new way. 

This new way works in a similar manner to how a typical browser operates. When an individual wants to access Google, their browser sends a request for the website’s content (often written in HTML). Once the browser receives the data from the request, it parses it and displays it. VSA Bot does something very similar. It sends a request to login with a username and password, then it stores important information (called browser cookies) for the duration of its uptime. With these cookies, the browser can access the discussions, post comments, etc. Eventually, I was able to replicate this ability consistently as the bot added commenting, deleting, and other bits to its arsenal of capabilities. 

The project employs several different technologies and brings them together in unison. The main portion is written in the Java Programming Language while also employing a tool called Maven. Furthermore, the bot interfaces with the moderators using Discord and in doing so, it uses an API titled JDA (Java Discord API). When the bot requests data from Schoology, it’s required to derive information from that HTML content. It uses an HTML parser, which helps VSA Bot analyze the comments on discussions. 

Reading the content of discussions is only one piece of the puzzle, though. The second and equally important element of VSA Bot is its ability to proactively respond to commands. Browsers communicate with websites using a REST API (PUT, GET, UPDATE, POST). When accessing Schoology information, the bot sends a GET request. When the bot wants to post/update something, it uses a POST command. 

Intriguingly, VSA Bot’s content analysis (determining whether a comment is appropriate or not) is not custom. It utilizes an API by Google called Perspective API. This system, employing machine learning, rates a comment on the likelihood of being toxic (0% is perfectly clean, and 100% is completely toxic). Along with Perspective API, VSA Bot also scans for euphemisms. It can even detect when a euphemism is spaced out (e.g. _h e c k_). 

Putting all of these features into context, the process follows: VSA Bot sends a login request to Schoology; VSA Bot checks each group on a regular interval; the bot sends a request to each discussion group for its content; the bot queries every discussion in each group; the bot reads every newly posted comment; the bot runs the comment through Perspective API and decides whether it should take action against it; the bot checks if the comment is employing a command; the bot responds accordingly. The entire process repeats. 

VSA Bot is simultaneously extremely complicated and extremely simple. The project has immense potential to improve the quality of discussions and to assist the moderators in meaningful ways. It utilizes countless technologies to make the process both seamless and intuitive. Hopefully, everyone benefits from VSA Bot, and it proves itself as a worthy addition to the VSA Commons Program.
