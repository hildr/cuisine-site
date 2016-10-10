var button = document.querySelector('.show-more'),
more = document.querySelector('.more'),
button1 = document.querySelector('.show-more1'),
more1 = document.querySelector('.more1'),
button2 = document.querySelector('.show-more2'),
more2 = document.querySelector('.more2'),
button3 = document.querySelector('.show-more3'),
more3 = document.querySelector('.more3'),
button4 = document.querySelector('.show-more4'),
more4 = document.querySelector('.more4'),
button5 = document.querySelector('.show-more5'),
more5 = document.querySelector('.more5'),
button6 = document.querySelector('.show-more6'),
more6 = document.querySelector('.more6'),
button7 = document.querySelector('.show-more7'),
more7 = document.querySelector('.more7'),
button8 = document.querySelector('.show-more8'),
more8 = document.querySelector('.more8'),
button9 = document.querySelector('.show-more9'),
more9 = document.querySelector('.more9'),
button10 = document.querySelector('.show-more10'),
more10 = document.querySelector('.more10'),
button11 = document.querySelector('.show-more11'),
more11 = document.querySelector('.more11'),
button12 = document.querySelector('.show-more12'),
more12 = document.querySelector('.more12'),
button13 = document.querySelector('.show-more13'),
more13 = document.querySelector('.more13'),
button14 = document.querySelector('.show-more14'),
more14 = document.querySelector('.more14'),
button15 = document.querySelector('.show-more15'),
more15 = document.querySelector('.more15');


more.classList.add('hide-text');

	button.addEventListener('click', function(){

		more.classList.toggle('hide-text');
});

more1.classList.add('hide-text');

	button1.addEventListener('click', function(){

		more1.classList.toggle('hide-text');
});


more2.classList.add('hide-text');

	button2.addEventListener('click', function(){

		more2.classList.toggle('hide-text');
});

more3.classList.add('hide-text');

	button3.addEventListener('click', function(){
		more3.classList.toggle('hide-text');
});

more4.classList.add('hide-text');

	button4.addEventListener('click', function(){

		more4.classList.toggle('hide-text');
});

more5.classList.add('hide-text');

	button5.addEventListener('click', function(){

		more5.classList.toggle('hide-text');
});

more6.classList.add('hide-text');

	button6.addEventListener('click', function(){

		more6.classList.toggle('hide-text');
});

more7.classList.add('hide-text');

	button7.addEventListener('click', function(){

		more7.classList.toggle('hide-text');
});

more8.classList.add('hide-text');

	button8.addEventListener('click', function(){

		more8.classList.toggle('hide-text');
});

more9.classList.add('hide-text');

	button9.addEventListener('click', function(){

		more9.classList.toggle('hide-text');
});

more10.classList.add('hide-text');

	button10.addEventListener('click', function(){

		more10.classList.toggle('hide-text');
});

more11.classList.add('hide-text');

	button11.addEventListener('click', function(){

		more11.classList.toggle('hide-text');
});	

more12.classList.add('hide-text');

	button12.addEventListener('click', function(){

		more12.classList.toggle('hide-text');
});	

more13.classList.add('hide-text');

	button13.addEventListener('click', function(){

		more13.classList.toggle('hide-text');
});	

more14.classList.add('hide-text');

	button14.addEventListener('click', function(){

		more14.classList.toggle('hide-text');
});	

more15.classList.add('hide-text');

	button15.addEventListener('click', function(){

		more15.classList.toggle('hide-text');
});	

var menu = document.querySelector('.menu');

window.addEventListener('scroll', function() {

	if(this.pageYOffset >= 112) {
		menu.classList.add('sticky');
		menu.classList.remove('menu');
	} else{
		menu.classList.remove('sticky');
		menu.classList.add('menu');
	}
	//console.log(this.pageYOffset);
	
});