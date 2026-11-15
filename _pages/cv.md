---
layout: page
permalink: /cv/
title: CV
description:
nav: true
nav_order: 3
---

{% assign cv_pdf = "/assets/pdf/Zhihao_Chen_CV.pdf" | relative_url %}

<div class="cv-actions">
  <a class="cv-download" href="{{ cv_pdf }}" download>
    <i class="fa-solid fa-file-arrow-down"></i> Download PDF
  </a>
  <a class="cv-open" href="{{ cv_pdf }}" target="_blank" rel="noopener">Open in new tab</a>
</div>

<div class="cv-embed">
  <iframe src="{{ cv_pdf }}#view=FitH&toolbar=0" title="Zhihao Chen — CV" loading="lazy"></iframe>
</div>
