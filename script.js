/* steps to solve it
  1. get the i/p from user.
  2. based on the seat count price should be calculated as per mov type (note!!! selected seat should be available).
  3. display result
*/

//selection of html elements
let seat_list = document.querySelectorAll('.movie-seat-container .row .seat:not(.occupied)'); // --> it returns a node list of seats which are not selected....

const seatCountEle = document.querySelector('.movie-seat-count');
const priceEle = document.querySelector('.price');
const selectMovieEle = document.querySelector('.type-movie');


// global var
let total = 0;
let seatCount = 0;
let price = 0;

// function 

const priceCalculation = function(){
  total = seatCount * price;
  seatCountEle.innerText = seatCount;
  priceEle.innerText = total;
}

// eventlistener
selectMovieEle.addEventListener('change',(event)=>{
  console.log('value',event.target.value)
  price = Number(event.target.value);
  priceCalculation();
});

for(let i=0;i<seat_list.length;i++){
  seat_list[i].addEventListener('click',()=>{
    if(seat_list[i].className === "seat"){
      seat_list[i].classList.add('selected');
    }else if(seat_list[i].className === "seat selected"){
      seat_list[i].classList.remove('selected');
    }
    seatCount = document.querySelectorAll('.row .seat.selected').length;
    priceCalculation();
  })
}
