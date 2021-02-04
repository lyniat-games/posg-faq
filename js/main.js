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

  let foundEntries = 0;
  
  function onInput(value){
    if(value === ""){
      reset();
      return;
    }
    
    foundEntries = 0;
    
    value = value.toLowerCase();
    
    let aqs = document.getElementsByClassName("aq");
    /*element.classList.add('invisible')*/
    Array.from(aqs).forEach(element => {
      let has = hasQuery(element,value);
      if(has){
        foundEntries++;
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
        tagSummary = tagSummary.concat([tag]);
      }else{
        tagSummary = tagSummary.concat(entries);
      }
      
    });
    
    return tagSummary.includes(query);
  }
  
  function reset(){
    document.getElementById("input-query").value = "";
    let aqs = document.getElementsByClassName("aq");
    Array.from(aqs).forEach(element => element.classList.remove('invisible'));
  }
