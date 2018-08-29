$( document ).ready(function() {
    console.log( "ready!" );

//     $('.grid').masonry({
//   // options...
//   itemSelector: '.grid-item',
//   columnWidth: 400
// });

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// });

//////////////////////////////

// init Masonry
// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   columnWidth: '.grid-sizer'
// });
// layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
// }); 

//////////////////////////////

imagesLoaded('.js-images-loaded', () => {
  new Masonry(document.querySelector('.js-masonry'), {
    itemSelector: '.js-masonry-item'
  });
});
 
});