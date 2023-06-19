var valueList = document.getElementById('valueList');
var text = '</span>You have selected : <span>';
var listTab = [];

var checkboxes = document.querySelectorAll('.checkbox');
console.log(checkboxes);

for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true && ){
            //console.log(this.value);
            listTab.push(this.value);
            valueList.innerHTML = text + listTab.join('/');
        }else{
            console.log('You unchecked the checkbox');
        }
    })
}