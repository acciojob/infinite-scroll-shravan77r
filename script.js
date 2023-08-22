//your code here!
const list = document.getElementById('infi-list');
function addListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}
for (let i = 1; i <= 10; i++) {
  addListItem(`Item ${i}`);
}
function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    addListItem(`Item ${list.children.length + i}`);
  }
}
list.addEventListener('scroll', function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addMoreItems();
  }
});
