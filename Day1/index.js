const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
/*        const hasClass = title.classList.contains(CLICKED_CLASS);
        if (hasClass) {
            title.classList.remove(CLICKED_CLASS);
        } else {
            title.classList.add(CLICKED_CLASS);
        }
*/
        title.classList.toggle(CLICKED_CLASS);
    }
// 자바스크립트를 사용하여 btn이라는 클래스네임을 없에지 않고 통제하는 방법 
// toggle을 활용하면 코드를 획기적으로 줄일 수 있다. 괄호 안에 있는 것을 없으면 추가 있으면 삭제 시켜주는 역할을 담당해줌 
function init() {
    title.addEventListener("click", handleClick); // DOM의 이벤트들은 MDN을 참고하자 반드시!
}
init();

