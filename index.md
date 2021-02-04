<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="theme-mod.css">
<link rel="stylesheet" href="animations.css">

<a href="https://savage-gods.com"><img class="logo" src="assets/posg_logo.png" alt="PoSG logo"></a>

<!--start interaction section-->
<div class="interaction">
  <p>Search:</p>
  <input type="text" id="input-query" name="query">
  <input type="text" id="ghost-input" name="ghost-input">
  <button type="button" id="btn-reset">Reset!</button>
</div>
<!--end interaction section-->

<div class="faq-section">
  {% include_relative content/faq.html %}
</div>

<!--start script section-->
<script src="content/dictionary.js"></script>
<script src="js/main.js"></script>
<!--end script section-->
