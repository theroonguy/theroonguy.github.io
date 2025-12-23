---
layout: post
title: "my digital garth"
tags: [node_index]
date: 2025-12-21
---

Yes, I have a blog. I know, very exciting. One version of me would argue it's a "digital garden," an evolving landscape of both trimmed bushes and tangled vines made of thoughts and stories. Or a journal. Call it what you want. Just not a diary, dear god. I will henceforth name it my "Digital Garth." 

You might wonder what a "garth" is, unless you're British. I suppose it's a lot like a garden, but... secluded, private, enclosed by structure and order. Despite never having heard the term before, it's a picture I feel I've lived in again and again. When I was in middle school, I was obsessed with Sherlock and how he solved his cases with his so-called "mind palace." It's a memory technique that hijacks our wildly accurate spatial memory with strange mental images to remember incredible amounts of information. And so, in my bedroom closet, I scribbled out a floor plan of my very own mind palace, with regions dedicated to varying topics. And in the center was such an enclosed garden, with a single bench planted at the roots of a tree. And there was my Garth.

Of course, I didn't know how to actually use a mind palace. I sat on that bench once and then promptly fell asleep. But nonetheless: the mental image has remained with me. And it's always felt safe. Once, during the pandemic, I was inspired by a webseries and imagined a scene I wanted to retreat to, a way to escape my room. With my limited Blender skills at the time, this is how I attempted to recreate that image:

<a href="/img/art/inbetween.png"><img class="simple-border" src="/img/art/inbetween.png" style="display: flex; margin: 0 auto; width: 70%; height: auto;"></a>

So, here we are. Am I naming this a "Garth" because it sounds silly? Probably. Definitely. But like every joke, there's a shred of sincerity embedded within. Have a look around, and enjoy what bits and pieces of my life you want to.

<a href="/node/by_tag">See all logs, sorted by tag.</a>

<div class="line"></div>
{% for node in site.nodes reversed %}
{% unless node.tags contains 'node_index' %}
<div>
    <p>
        <a href="{{ node.url }}">{{ node.title }}</a> on {{ node.date | date: "%B %d, %Y" }}
    </p>
</div>
{% endunless %}
{% endfor %}
