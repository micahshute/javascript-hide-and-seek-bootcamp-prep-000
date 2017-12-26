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
  var allNodes = deepestOfBranch(document.querySelectorAll('div#grand-node'));
  var deepestCounter = 0;
  var returnVal;
  for(let i = 0; i < allNodes.length; i++){
    var keys = Object.keys(allNodes[i]);
    for(let j = 0; j < keys.length; j++){
      if(keys[j] > deepestCounter){
        deepestCounter = keys[j];
        returnVal = allNodes[i][keys[j]];
      }else{
        returnVal = globalTest
      }
    }
  }
  return returnVal;
}

var globalTest;

function deepestOfBranch(branch, startingLvl){
  var deepestOfNodes = [{}];
  var counter = startingLvl;
  for(let i = 0; i <branch.length; i++){
    var current = branch[i].querySelectorAll('*>*');
    counter++;
    var placeholder = 'NONE';
    while(current && current.length > 0){
      if(current && current.length > 1){
        for(var obj in deepestOfBranch(current, counter)){
          deepestOfNodes.push(obj);
        }
        break;
      }else if (current.length === 1){
        placeholder = current[0]
        current = current[0].querySelectorAll('*>*');
        counter++;
      }
    }
    deepestOfNodes[0][counter] = placeholder;
  }
  return deepestOfNodes;
}

// function deepestChild(){
//   var allNodes = deepestOfBranch(document.querySelectorAll('div#grand-node'))
//   var deepestCounter = 0;
//   var returnVal;
//   var keys = Object.keys(allNodes)
//     for(let j = 0; j < keys.length; j++){
//       if(keys[j] > deepestCounter){
//         deepestCounter = keys[j]
//         returnVal = allNodes[keys[j]]
//         console.log(returnVal)
//       }
//     }
//   return returnVal
// }


// function deepestOfBranch(branch){
//   var deepestOfNodes = {};
//   for(let i = 0; i <branch.length; i++){
//     var current = branch[i].querySelectorAll(':last-child')
//     deepestOfNodes = current
//   }
//   return deepestOfNodes
// }

