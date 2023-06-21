let seat_list = document.querySelectorAll('.movie-seat-container .row .seat');
console.log(seat_list);
const seatCountEle = document.querySelector('.movie-seat-count');
const priceEle = document.querySelector('.price');
const selectMovieEle = document.querySelector('.type-movie');
console.log(selectMovieEle);
// global var
let total = 0;
let seatCount = 0;
const seatListOriginal = seat_list;

/* steps to solve it
  1. get the i/p from user.
  2. based on the seat count price should be calculated as per mov type.
    a. selected seat should be available.
  3. display result
*/

//1. get i/p

function result(movPrice){
  total = 0;
  seat_list = seatListOriginal;
  for(let i=0;i<seat_list.length;i++){
    //console.log(seat_list[i].classList);
    if(seat_list[i].classList.contains('occupied')){
      //console.log('---sss',seat_list[i])
    }
    else if(seat_list[i].classList.contains('seat')){
      console.log('111',seat_list)
      seat_list[i].addEventListener('click',()=>{
        if(seat_list[i].className === "seat"){
          addSeatSelected(seat_list[i],movPrice);
        }else if(seat_list[i].className === "seat selected")
        removeSeatSelected(seat_list[i],movPrice);
      })
    }
  }
}



// function 
function addSeatSelected(seat,moviePrice){
  seat.classList.add('selected');
  console.log(seat);
  addPrice(seat.classList,moviePrice);
}
function removeSeatSelected(seat,moviePrice){
  seat.classList.remove('selected');
  subPrice(seat.classList,moviePrice);
}

function addPrice(seatList,num){
  console.log(seatList.value);
  total += num;
  seatCount += 1;
  priceEle.innerText = total;
  seatCountEle.innerText = seatCount;
  console.log(total);
}

function subPrice(seatList,num){
  console.log(seatList.value);
  total -= num;
  seatCount -= 1;
  priceEle.innerText = total;
  seatCountEle.innerText = seatCount;
  console.log(total);
}

selectMovieEle.addEventListener('change',(event)=>{
  result(Number(event.target.value));
  console.log('value',event.target.value)
});