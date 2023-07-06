const movieSelect=document.getElementById('movie');
const total=document.getElementById('total');
const count=document.getElementById('count');
const seats=document.querySelectorAll('.row .seat:not(.occupied')
const container=document.querySelector('.container');

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedIndex',movieIndex);
    localStorage.setItem('selectedPrice',moviePrice);

}
function updateSelectedCount(){
   const selectedSeats=document.querySelectorAll('.row .seat.selected');
   const val=selectedSeats.length;

   const seatsIndex=[...selectedSeats].map(seat=>[...seats].indexOf(seat));
   localStorage.setItem('selectedSeatssS',JSON.stringify(seatsIndex));
   
   count.innerText=val;
   total.innerText=val*(movieSelect.value);
}

movieSelect.addEventListener('change',(e)=>{   
    setMovieData(e.target.selectedIndex,e.target.value);
    updateSelectedCount();
});
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
       e.target.classList.toggle('selected');
       updateSelectedCount();
    }
});
