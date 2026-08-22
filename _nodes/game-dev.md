---
layout: node
title: Game Development
---

I've been doing game dev as a hobby for the past 4 or so years, primarily using the Godot game engine. I primarily code with GDScript, but I also design 3d models, make music, 2d pixel art, and more.

Check out my major game dev projects below!

{% assign sorted_games = site.projects | sort: 'date' | reverse | where_exp: "item", "item.tags contains 'game_development'" %}

<ul>
{% for game in sorted_games %}
<li><a href="{{game.url}}">{{ game.title }}</a></li>
{% endfor %}
</ul>