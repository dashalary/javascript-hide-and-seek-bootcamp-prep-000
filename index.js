function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element
}

function nestedTarget() {
 var nestedTarget = document.querySelector('#nested .target')
 return nestedTarget
}

function deepestChild() {
  var deepestChild = document.querySelector('#grand-node div div div div')
  return deepestChild
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]
      let children = firstList.children
      let start = 1
for (let i = 0; i < children.length; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML).start + i + n
      }
      
children = secondList.children
      start = 12
      for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = parseInt(children[i].innerHTML).start - i + n
      }
  
}