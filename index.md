<link rel="stylesheet" href="style.css">

<img class="posg-logo" src="assets/posg_logo.png" alt="PoSG logo">

<!--start dictionary section-->
<script>
  const dictionary = {
    "dnd":["dnd","5th","SRD","OGL"]
  };
</script>
<!--end dictionary section-->

<!--start interaction section-->
<input type="text" id="input-query" name="query">
<button type="button" id="btn-reset">Reset!</button>
<!--end interaction section-->

<div class="faq-section">
  <div class="aq" tags="dnd,test" faq-id="q0">
    <p class="question">What exactly is PoSG?</p>
    <p class="answer">PoSG is a tool for pen and paper RPGS that can procedurally generate and manage DnD5e adventures. It will provide the generation of maps, NPCs, encounters, and quests. PoSG is based on DnD5e SRD under OGL.</p>
  </div>
</div>

<!--start script section-->
<script>
  let input = document.getElementById("input-query");
  input.addEventListener('input', function (evt) {
    onInput(input.value);
  });
  
  function onInput(value){
    if(value === ""){
      reset();
      return;
    }
    
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
    let tagList = tags.split(",");
    
    let tagSummary = [];
    
    tagList.forEach(tag => {
      let entries = dictionary[tag];
      if(!entries){
        //continue;
        tagSummary.concat([tag]);
      }
      tagSummary.concat(entries);
    });
    
    tagSummary.forEach(tag => {
      if(tag === query){
        return true;
      }
    });
    
    return false;
  }
  
  function reset(){
    let aqs = document.getElementsByClassName("aq");
    Array.from(aqs).forEach(element => element.classList.remove('invisible'));
  }
</script>
<!--end script section-->
