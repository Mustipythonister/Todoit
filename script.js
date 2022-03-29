document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

function add(){
	var key = "todos";
	//months
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const d = new Date();
	let month = months[d.getMonth()];
	//date
	
	var day = d.getDate();
	//year
	

	var year = d.getFullYear();

	var created_date = Date.parse();
	var title = document.getElementById("title").value;
	var todo = document.getElementById("cnt").value;
	if(title === ""){
		alert("please enter a title");
	}else if(todo === ""){
		alert("Hey, input your tasks")
	}
	else{
	var list = document.getElementById("list");

	var newt = document.createElement("div");
	newt.classList.add('card');

	var card_content = document.createElement("div");
	card_content.classList.add('card-content');
	var display_title = document.createElement("p");
	var display_date = document.createElement("p");
	display_date.classList.add('subtitle');
	display_date.innerHTML = day+"/"+month+"/"+year;
	display_date.style.color = "#2e76e8";
	display_title.classList.add('title');
	display_title.innerHTML = title;
	var content = document.createElement("div");
	content.classList.add('content');
	content.innerHTML = todo;

	newt.appendChild(card_content);
	card_content.appendChild(display_title);
	card_content.appendChild(content);
	card_content.appendChild(display_date);
	list.appendChild(newt);
	display_tasks = newt.innerHTML;
	}


	newt.addEventListener('click', function(){
		display_title.style.textDecoration = "line-through";
		display_title.style.color = "#dbdbdb";
		content.style.textDecoration = "line-through";
		content.style.color = "#dbdbdb";
	})
	newt.addEventListener('dblclick', function(){
		list.removeChild(newt);
	})
}

function get(){
	//let todo_lists = window.localStorage.getItem("tasks");
	//var list = document.getElementById("list");
	//list.innerHTML = todo_lists;
}
function reset(){
	var cnt1 = document.getElementById("title");
	cnt1.value="";
	var cnt2 = document.getElementById("cnt");
	cnt2.value = "";
}

document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
  
	  // Add a click event on each of them
	  $navbarBurgers.forEach( el => {
		el.addEventListener('click', () => {
  
		  // Get the target from the "data-target" attribute
		  const target = el.dataset.target;
		  const $target = document.getElementById(target);
  
		  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		  el.classList.toggle('is-active');
		  $target.classList.toggle('is-active');
  
		});
	  });
	}
  
  });

function msg(){
	alert("This function is not available yet");
  }