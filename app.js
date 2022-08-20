
//  traversing the dom (moving up and down the DOM tree)
// =======================================

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
// 	btn.addEventListener('click',function(e){
// 		const question = e.currentTarget.parentElement.
// 			parentElement;
// 			question.classList.toggle("show-text")
// 	})
// })



//using selectors inside the element
//=======================================

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
	// console.log(question);
	const btn = question.querySelector(".question-btn");
	// console.log(btn)
	btn.addEventListener("click", function(){
		question.classList.toggle("show-text");
	});
});
