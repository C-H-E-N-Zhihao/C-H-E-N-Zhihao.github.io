---
layout: page
title: Awards
permalink: /awards/
nav: true
nav_order: 4
description: Honors and achievements
---

<div class="table-responsive">
  <table class="table table-sm table-borderless">
    {% for award in site.data.awards.awards %}
    <tr>
      <td>
        <strong>{{ award.name }}</strong>
        {% if award.location %}
        <br><em>{{ award.location }}</em>
        {% endif %}
        {% if award.summary %}
        <br>{{ award.summary | markdownify | remove: '<p>' | remove: '</p>' }}
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </table>
</div>
