function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + 1;
  }
}

function deepestChild(){
  var patriarch = document.querySelector('div#grand-node')
  var nextLevel = patriarch.querySelector('*')
  while(nextLevel){
    if(nextLevel.querySelector('*')){
      nextLevel = nextLevel.querySelector('*')
    }else{
      return nextLevel
    }
  }
}
