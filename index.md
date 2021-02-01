<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="theme-mod.css">

<img class="logo" src="assets/posg_logo.png" alt="PoSG logo">

<!--start interaction section-->
<p>Search: </p>
<input type="text" id="input-query" name="query">
<button type="button" id="btn-reset">Reset!</button>
<!--end interaction section-->

<div class="faq-section">
  <!-- QUESTION 00 -->
  <div class="aq" tags="faq0,dnd">
    <p class="question">What exactly is PoSG?</p>
    <p class="answer">PoSG is a tool for pen and paper RPGS that can procedurally generate and manage DnD5e adventures. It will provide the generation of maps, NPCs, encounters, and quests. PoSG is based on DnD5e SRD under OGL.</p>
  </div>
  <!-- END 00 -->
  
  <!-- QUESTION 01 -->
  <div class="aq" tags="faq1,kickstarter,release">
    <p class="question">When do you release Paths of Savage Gods?</p>
    <p class="answer">We plan to start our Kickstarter campaign of PoSG in February 2021. So keep tuned! We hope that we can release PoSG in June or July 2021.</p>
  </div>
  <!-- END 01 -->
  
  <!-- QUESTION 02 -->
  <div class="aq" tags="faq2,platform,requirements">
    <p class="question">On which platforms can I use PoSG?</p>
    <p class="answer">We plan to release the first version as a desktop app on Windows/macOS/Linux (official support only for the latest Ubuntu LTS) and a mobile version for iOS/iPadOS and Android (only smartphones, no tablets).</p>
  </div>
  <!-- END 02 -->
  
  <!-- QUESTION 03 -->
  <div class="aq" tags="faq3,support,kickstarter,development">
    <p class="question">How can I support the development?</p>
    <p class="answer">You can support us by leaving your feedback at our Discord or follow our social media. Keep your eyes open for our Kickstarter campaign, which will start in February 2021 - we need every support we can get so that we can work hard and release PoSG as soon as possible!</p>
  </div>
  <!-- END 03 -->
  
  <!-- QUESTION 04 -->
  <div class="aq" tags="faq4,lyniat-location">
    <p class="question">Where are you from?</p>
    <p class="answer">We are located in Ratisbona, Bavaria, Germany. The northernmost city of the Danube.</p>
  </div>
  <!-- END 04 -->
  
  <!-- QUESTION 05 -->
  <div class="aq" tags="faq5,platform,requirements">
    <p class="question">What are the minimum requirements for running PoSG?</p>
    <p class="answer">We implemented our custom render pipeline to draw the isometric pixel world and it's character at the best possible performance. We're still testing different setups and will publish a more detailed answer before Kickstarter but at the moment, most of the laptops and desktop PCs you can buy for smooth home office should handle it easily. You definetly need no gaming PC!</p>
  </div>
  <!-- END 05 -->
  
  <!-- QUESTION 06 -->
  <div class="aq" tags="faq6,modding">
    <p class="question">How can I add custom sprites/images and is it possible to animate them?</p>
    <p class="answer">The easiest step to do this is by using our partner WorldAnvil and create there custom NPCs with your own sprites. Since animations are pretty cool you can also add GIFs for simple stuff like an idle animation. If you want the real fancy way with different animations for different actions, we will publish our own tool to handle this and import your art into the game. More about this and generally the modding aspect and our partnership with WorldAnvil will be answered here and also announced at our Discord.</p>
  </div>
  <!-- END 06 -->
  
</div>

<!--start script section-->
<script>
  
  <!--start dictionary section-->
  const dictionary = {
    "dnd":["dnd","5th","SRD","OGL"],
    "kickstarter":["kickstarter","crowdfunding","funding","buy","support"],
    "release":["release","start","2021","21","June","July"],
    "platform":["platform","windows","microsoft","mac","macos","osx","linux","ubuntu","iOS","iPadOS","Apple","iPhone","iPad","iPod","Android","smartphone","tablet","mobile","desktop","app"],
    "lyniat-location":["location","europe","germany","bavaria","ratisbona","regensburg","city","country","land","district","state"]
  };
  <!--end dictionary section-->
  
  let input = document.getElementById("input-query");
  input.addEventListener('input', function (evt) {
    onInput(input.value);
  });
  
  let resetButton = document.getElementById("btn-reset");
  resetButton.addEventListener('click', function (evt) {
    reset();
  });
  
  let urlQuery = window.location.hash.substr(1); <!-- myurl.com/#test => test -->
  if(urlQuery){
      setInputFromUrl(urlQuery);
  }
  
  function setInputFromUrl(query){
    query = query.replaceAll("&",", ");
    document.getElementById("input-query").value = query;
    onInput(query);
  }
  
  function onInput(value){
    if(value === ""){
      reset();
      return;
    }
    
    value = value.toLowerCase();
    
    let aqs = document.getElementsByClassName("aq");
    /*element.classList.add('invisible')*/
    Array.from(aqs).forEach(element => {
      let has = hasQuery(element,value);
      if(has){
        element.classList.remove('invisible');
      }else{
        element.classList.add('invisible');
      }
    });
  }
  
  function hasQuery(element,query){
  
    let tags = element.getAttribute("tags");
    console.log(tags);
    let tagList = tags.split(",");
    console.log(tagList);
    
    let tagSummary = [];
    
    tagList.forEach(tag => {
      console.log(tag);
      let entries = dictionary[tag];
      console.log(entries);
      if(!entries){
        tagSummary = tagSummary.concat([tag]);
      }else{
        tagSummary = tagSummary.concat(entries);
      }
      
      console.log(tagSummary);
    });
    
    return tagSummary.includes(query);
  }
  
  function reset(){
    document.getElementById("input-query").value = "";
    let aqs = document.getElementsByClassName("aq");
    Array.from(aqs).forEach(element => element.classList.remove('invisible'));
  }
</script>
<!--end script section-->
