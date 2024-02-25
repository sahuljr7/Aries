let accordian = document.getElementsByClassName('question');

for (var i=0; i<accordian.length; i++) {
    accordian[i].addEventListener('click',function(){
        this.classList.toggle('active');

        var answer = this.nextElementSibling;
        // if(answer.style.display === "block"){
        //     answer.style.display = "none";
        // }
        // else{
        //     answer.style.display = "block";
        // }
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }
        else{
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
};