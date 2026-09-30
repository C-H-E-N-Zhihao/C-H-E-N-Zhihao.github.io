---
layout: page
title: Awards
permalink: /awards/
nav: true
nav_order: 4
description: Honors and achievements
---

<div class="awards-list">
  {% for award in site.data.awards.awards %}
  <article class="award-entry mb-4 pb-3 border-bottom">
    <h2 class="h5 mb-1">
      {% if award.url %}
      <a href="{{ award.url }}" target="_blank" rel="noopener noreferrer">{{ award.name }}</a>
      {% else %}
      {{ award.name }}
      {% endif %}
    </h2>
    {% if award.location %}<p class="text-muted mb-2">{{ award.location }}</p>{% endif %}
    {% if award.summary %}<div>{{ award.summary | markdownify | remove: '<p>' | remove: '</p>' }}</div>{% endif %}
  </article>
  {% endfor %}
</div>
