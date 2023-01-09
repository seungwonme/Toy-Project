// const lists = document.querySelectorAll('.sub')
// for (let i = 0; i < lists.length; i++) {
//     const a = lists[i].previousSibling
//     a.addEventListener('click',() => {
//         for (let j = 0; j < lists.length; j++) {
//             lists[j].classList.add('on')
//         }
//     })
// }

let gnbLiA = document.querySelectorAll(".gnb>li>a");
for (var i = 0; i < gnbLiA.length ; i++) {
	var item1 = gnbLiA[i];
	item1.addEventListener("click", function () {
		const check = this.nextElementSibling.classList.contains("on");
		if (!check) {
			var allSub = document.querySelectorAll(".sub");
			for (var j = 0; j < allSub.length; j++) {
			var item2 = allSub[j];
			item2.classList.remove("on");
			}
			this.nextElementSibling.classList.add("on");
		} else {
		this.nextElementSibling.classList.remove("on");
		}
	});
}