let title=document.querySelector('.title');
let turn='x';
let squares=[];
function end(num1,num2,num3){
   title.innerHTML=`${squares[num1]} winner`
   document.getElementById('item' +num1).style.backgroundColor='black';
   document.getElementById('item' +num2).style.backgroundColor='black';
   document.getElementById('item' +num3).style.backgroundColor='black';
   setInterval(function() {title.innerHTML+='.'},1000);
   setTimeout(function() { location.reload()},1000);

}
function winner(){
 for(let i=1;i<10;i++){
    squares[i]=document.getElementById('item'+i).innerHTML;
 }
   if(squares[1]==squares[2]&&squares[2]==squares[3] &&squares[3]!=''){
         console.log('done');
         end(1,2,3);
   }
  else  if(squares[7]==squares[8]&&squares[8]==squares[9] &&squares[9]!=''){
    console.log('done');
    end(7,8,9);
  }

else if(squares[1]==squares[4]&&squares[4]==squares[7] &&squares[7]!=''){
    console.log('done');
    end(1,4,7);
}
else if(squares[2]==squares[5]&&squares[5]==squares[8] &&squares[8]!=''){
    console.log('done');
    end(2,5,8);
}
else if(squares[3]==squares[6]&&squares[6]==squares[9] &&squares[9]!=''){
    console.log('done');
    end(3,6,9);
}
else if(squares[1]==squares[5]&&squares[5]==squares[9] &&squares[9]!=''){
    console.log('done');
    end(1,5,9);
}
    else if(squares[3]==squares[6]&&squares[6]==squares[9] &&squares[9]!=''){
        console.log('done');
        end(3,6,9);
    }
    else if(squares[3]==squares[5]&&squares[5]==squares[7] &&squares[7]!=''){
        console.log('done');
        end(3,5,7);
    }
}


function games(id){
    let element=document.getElementById(id);
    if(turn==='x' && element.innerHTML===''){
        element.innerHTML='x';
         turn='o';
         title.innerHTML='o';
   }
     else if(turn=='o'&& element.innerHTML==''){
        element.innerHTML='o';
         turn='x'
         title.innerHTML='x'

     }
     winner();
 
    }
