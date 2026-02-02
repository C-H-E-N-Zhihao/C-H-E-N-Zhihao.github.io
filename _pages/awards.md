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
      <th scope="row" style="width: 20%">{{ award.date }}</th>
      <td>
        <strong>{{ award.name }}</strong>
        {% if award.summary %}
        <br>{{ award.summary }}
        {% endif %}
        {% if award.location %}
        <br><em>{{ award.location }}</em>
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </table>
</div>
