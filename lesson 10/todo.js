
    const newarr=['make a dinner','wash dishes'];

let todoHTML='';

    for(let i=0;i<newarr.length;i++){
        const arr=newarr[i];
        const html=`<p>${arr}</p>`;
        todoHTML+=html;
        
    }
    console.log(todoHTML);

    document.querySelector('.jstodo').innerHTML = todoHTML;
    function todolist(){
        const b=document.querySelector('.a');
        const c = b.value; 
        newarr.push(c);
        console.log(newarr);

        b.value='';


    }
