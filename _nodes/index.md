---
layout: node
back: "/nodes/writings"
title: Nodes
---

{% assign sorted_nodes = site.nodes | sort: 'date' | reverse %}

<div class="journal_list" style="display: grid;">
{% for node in sorted_nodes %}
    <a class="journal_bar" href="{{ node.url }}">
        {{ node.date | date: "%B %-d, %Y"}} | {{ node.title }}
    </a>
{% endfor %}
</div>