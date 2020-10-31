function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
<<<<<<< HEAD
  return document.querySelector('#nested .target');
=======
  return document.querySelector('#nested.target');
>>>>>>> 17db556155a513d76b77aef2574d29a4650f3488
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;
    
    for (let j = 0, k = children.length; j < k; j++) {
<<<<<<< HEAD
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
=======
      children[j].innerHTML = parseInt(children[i].innerHTML) + n;
>>>>>>> 17db556155a513d76b77aef2574d29a4650f3488
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0];
  
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}