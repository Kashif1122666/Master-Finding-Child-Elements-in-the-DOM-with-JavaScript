// Get all child nodes 

var childNodes = parentDiv.childNodes;

console.log('All child Nodes :' , childNodes);

// Loop through child nodes 

for (var i = 0; i < childNodes.length; i++) {
    // check if the node is an element 
    if (childNodes[i].nodeType === 1) {
        childNodes[i].style.backgroundColor = 'lightgray';
    }
}