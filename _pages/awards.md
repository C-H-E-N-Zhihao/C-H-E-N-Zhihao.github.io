---
layout: page
title: Awards
permalink: /awards/
nav: true
nav_order: 4
description: Honors and achievements
---

<div class="row">
  {% for award in site.data.awards.awards %}
  <div class="col-md-6 mb-3">
    <article class="card h-100">
      <div class="card-body">
        <h2 class="h5 card-title mb-2">
          {% if award.url %}
          <a href="{{ award.url }}" target="_blank" rel="noopener noreferrer">{{ award.name }}</a>
          {% else %}
          {{ award.name }}
          {% endif %}
        </h2>
        {% if award.location %}<p class="text-muted mb-2">{{ award.location }}</p>{% endif %}
        {% if award.summary %}<div class="card-text">{{ award.summary | markdownify | remove: '<p>' | remove: '</p>' }}</div>{% endif %}
      </div>
    </article>
  </div>
  {% endfor %}
</div>
