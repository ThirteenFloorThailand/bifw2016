var videoId = [
  'y60wDzZt8yg',
  '0bPeUjwhhLg',
  'y60wDzZt8yg',
  '0bPeUjwhhLg',
  'y60wDzZt8yg',
  '0bPeUjwhhLg',
  'y60wDzZt8yg',
  '0bPeUjwhhLg',
  'y60wDzZt8yg',
  '0bPeUjwhhLg'
]

function selectVideo(index) {
  $('#videoPlayer').attr('src', 'https://www.youtube.com/embed/' + videoId[index] + '?autoplay=1');
}

$( document ).ready(function() {
  $('.subMenu').smint({
    'scrollSpeed': 1000
  });
});
