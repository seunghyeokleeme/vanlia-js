const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
/* !== 는 같지않는  == 같은
6번줄에 value 값을 주고 그 className을 가져와서 8번 줄에 그것을 세팅한다.
같지않으면 className 을 준다.
*/

function init() {
  title.addEventListener("click", handleClick);
}
init();
