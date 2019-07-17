// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById("main");
main.addEventListener('click', function(event){alert("I was clicked")
  a
})



//ex)

const list = document.querySelect('#book-list ul');

list.addEventListener('click', function(e){
  //in this case, 'click' is the event
  // function(e) is the handler and/or callback function that we want to send as a response once the action is completed
  if (e.target.className == "delete"){
    const li = e.target.parentElement;
    //li is the parent element of the delete button
    list.removeChild(li)
    //li.parentNode.removeChild(li)
    //this is getting node above it
    //could be li.parentElement
  }
})
