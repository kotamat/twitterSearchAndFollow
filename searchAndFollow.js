var xhr = new XMLHttpRequest();
var request= function(user_id){
xhr.open('POST', 'https://twitter.com/i/user/follow', false);

  // TODO: [request send]

xhr.abort();
}
var es = window.document.getElementsByClassName('original-tweet');
console.log(document);
Array.prototype.forEach.call(es, function(e){
  var user_id = e.getAttribute('data-user-id');
  e.parentNode.removeChild(e)
  request(user_id);
});
