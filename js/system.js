class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }

}
