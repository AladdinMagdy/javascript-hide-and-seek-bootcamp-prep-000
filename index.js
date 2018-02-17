function getFirstSelector(selector){
  const selected = document.querySelector(selector);
  return selected;
}

function nestedTarget(){
  const nested = document.querySelector('#nested .target');
  return nested;
}

function increaseRankBy(n){
  const app = document.getElementById('app');
  const ranks = app.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < ranks.length; i++){
    let value = parseInt(ranks[i].innerHTML) + n;
    ranks[i].innerHTML = value.toString();
  }
}

function deepestChild(){
  const lis = document.querySelectorAll('div#grand-node *');
  return lis[lis.length -1]
}