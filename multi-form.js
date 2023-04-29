const fields = [];
function execute(count, index) {
    for (var i = 1; i <= count; i++) {
        // console.log(document.getElementById(`${index}-${i}`));
        fields.push(document.getElementById(`${index}-${i}`).value);
      

        // var tenh=fields.push(document.getElementById(`${index}-${i}`).value);
        // if(tenh==""){
        //     alert("cannot be empt");
        // }


        var tenth = document.getElementById(`${index}-${i}`).value = '';
        

    }
    return fields;



}

export default execute;
