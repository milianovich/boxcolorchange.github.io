var doCoolStuff = function (){
        var currentClassName = document.getElementById('moi').className;
        if (currentClassName == 'moi'){
            document.getElementById('moi').className= 'moi red';
        }
        else{
            document.getElementById('moi').className = 'moi';
        }
    }
    
