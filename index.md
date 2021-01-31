<link rel="stylesheet" href="style.css">

<img class="posg-logo" src="assets/posg_logo.png" alt="PoSG logo">

<!--start interaction section-->
<input type="text" id="input-query" name="query">
<button type="button" id="btn-reset">Reset!</button>
<!--end interaction section-->

When do you release Paths of Savage Gods (PoSG)?
  We plan to start our Kickstarter Campaign of PoSG in February 2021. So keep tuned! We hope that we can release PoSG in June or July 2021.

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
  <div class="aq" tags="faq2,platform">
    <p class="question">On which platforms can I use PoSG? </p>
    <p class="answer">We plan to release the first version as a desktop app on Windows/macOS/Linux (official support only for the latest Ubuntu LTS) and a mobile version for iOS/iPadOS and Android (only smartphones, no tablets).</p>
  </div>
  <!-- END 02 -->
</div>

<!--start script section-->
<script>
  
  <!--start dictionary section-->
  const dictionary = {
    "dnd":["dnd","5th","SRD","OGL"],
    "kickstarter":["kickstarter","crowdfunding","funding","buy","support"],
    "release":["release","start","2021","21","June","July"],
    "platform":["platform","windows","microsoft","mac","macos","osx","linux","ubuntu","iOS","iPadOS","Apple","iPhone","iPad","iPod","Android","smartphone","tablet","mobile","desktop","app"]
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
