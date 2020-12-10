let comment = document.getElementById('comment');

let submit = document.getElementById('submit-btn');

let commentSection = document.getElementById('posted-comment');


function postComment(e){
  e.preventDefault();
  
  let newComment = document.createElement('p');
  let text = document.createTextNode(comment.value);
  if(comment.value !== ""){
     newComment.appendChild(text);
  newComment.classList.add('comment-style');
  document.body.appendChild(newComment);
  } else {
    alert("Please type something in the comment box!")
   }
 
  
}

submit.addEventListener('click', postComment);



 comment.addEventListener('keyup',function(e){
    
      if (e.keyCode === 13) {
      postComment(e);            
  }
  
});
