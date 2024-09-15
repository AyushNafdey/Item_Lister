var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
//Delete list
itemList.addEventListener('click', removeList);
//Filter items
var filterItems = document.getElementById("filter");
filterItems.addEventListener('keyup', filterItemList);

//Form Submit
form.addEventListener("submit", addItem);

//Add item
function addItem(e){
    e.preventDefault();
    // console.log("Hello");

    var newItem = document.getElementById('item');
    
    //Create an li
    var li = document.createElement('li');

    li.className = 'list-group-item';

    //Create a text node
    li.appendChild(document.createTextNode(newItem.value));

    //Create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.textContent = 'X'
    li.appendChild(deleteBtn);

    
    //Append li to list
    itemList.appendChild(li);
    
    itemList.appendChild(li);
}

function removeList(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItemList(e){
    var text = e.target.value.toLowerCase();
    
    //Get list
    var items = itemList.getElementsByTagName('li');

    //Convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}

