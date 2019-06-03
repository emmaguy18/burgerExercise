//drap and drop elements//
// $( "#draggable" ).draggable({
//   // axis: 'x'
// });
// $( "#droppable" ).droppable({
//   drop: function( event, ui ) {
//     $( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
//     }
//   });
//resize elements//
// $( "#resizable" ).resizable({
//   animate: true
//   });
// //selectable grid//
// $( function() {
//    $( "#selectable" ).selectable();
//  } );
var burger = [
  {
    id: 'white bun top',
    img: 'img/burger-01.png',
    price: 0.50
  },
  {
    id: 'white bun bottom',
    img: 'img/burger-02.png',
    price: 0.50
  },
  {
    id: 'wholemeal bun top',
    img: 'img/burger-09.png',
    price: 0.60
  },
  {
    id: 'wholemeal bun bottom',
    img: 'img/burger-10.png',
    price: 0.60
  },
  {
    id: 'brioche bun top',
    img: 'img/burger-11.png',
    price: 1.00
  },
  {
    id: 'brioche bun bottom',
    img: 'img/burger-12.png',
    price: 1.00
  },
  {
    id: 'cheddar cheese',
    img: 'img/burger-07.png',
    price: 0.80
  },
  {
    id: 'swiss cheese',
    img: 'img/burger-15.png',
    price: 1.30
  },
  {
    id: 'smoked cheese',
    img: 'img/burger-16.png',
    price: 1.00
  },
  {
    id: 'beef patty',
    img: 'img/burger-03.png',
    price: 0.50
  },
  {
    id: 'pork patty',
    img: 'img/burger-13.png',
    price: 0.50
  },
  {
    id: 'venison patty',
    img: 'img/burger-14.png',
    price: 0.50
  },
  {
    id: 'lettuce',
    img: 'img/burger-05.png',
    price: 0.10
  },
  {
    id: 'tomato',
    img: 'img/burger-06.png',
    price: 0.30
  },
  {
    id: 'onion',
    img: 'img/burger-08.png',
    price: 0.40
  }
]
console.log(burger);

var burgerContainer = $('#burgerContainer');

for (var i = 0; i < burger.length; i++) {
  console.log(burger[i]);
  burger[i].html $('burgerContainer');
}
