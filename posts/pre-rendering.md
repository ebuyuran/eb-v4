---
title: 'Two Forms of Pre-rendering'
summary: 'Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

![Alt text](https://wp.nkdev.info/cyberpulse/wp-content/uploads/2021/01/post-2-2048x1152.jpg "a title")

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.