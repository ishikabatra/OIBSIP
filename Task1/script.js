let output=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let result = '';
for(item of buttons){
    item.addEventListener('click',function(e){
        buttonText = e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            result += buttonText;
            output.value += buttonText;

        }else if(buttonText == 'C'){
            result = '';
          output.value =result;

        }else if(buttonText == '='){
             output.value = eval(result);
             
        }else if(buttonText == '%'){

            result += buttonText;
            output.value += buttonText;

        }else{

            result += buttonText;
            output.value += buttonText;
        }
    })
}
