class Security {

    constructor(){
        
        this.nameInput = createInput("Enter your Name")
        
        this.nameInput.position(350,203)
        this.button1 = createButton('Save');
        this.button1.position(530,203);
        this.button1.style('background', 'lightgrey');

        this.access1 = createInput("your college")
        this.access1.position(350,255);
        this.access1.style('background', 'white');  

        this.button2 = createButton('Save');
        this.button2.position(530,255);
        this.button2.style('background', 'lightgrey');
            

        this.access2 = createInput("Email")
        this.access2.position(350,305);
        this.access2.style('background', 'white');  

        this.button3 = createButton('Save');
        this.button3.position(530,305);
        this.button3.style('background', 'lightgrey'); 

        this.access3 = createInput("phone number")
        this.access3.position(350,355);
        this.access3.style('background', 'white');  

        this.button4 = createButton('Save');
        this.button4.position(530,355);
        this.button4.style('background', 'lightgrey'); 
       
        this.access4 = createFileInput("Email")
        this.access4.position(350,405);
        this.access4.style('background', 'white'); 

        this.button5 = createButton('Save');
        this.button5.position(615,405);
        this.button5.style('background', 'lightgrey');

        this.submit = createButton("SUBMIT")
        this.submit.position(450,600)
        this.submit.style('background','blue')
        name1 =this.nameInput.value();
        access1 =this.access1.value();
        access2 =this.access2.value();
        access3 =this.access3.value();
        access4 =this.access4.value();
    
    }
    
    display(){
        
        this.button1.mousePressed(() => {
            
                this.button1.hide();
                this.nameInput.hide();
                
           
        });
       
        
        this.button3.mousePressed(() => {
            this.button3.hide();
            this.access2.hide();
            
        
    });
    this.button4.mousePressed(() => {
        this.button4.hide();
        this.access3.hide();
        
    
});

        this.button5.mousePressed(() => {
             
                this.button5.hide();
                this.access4.hide();
                
            
          
            
        });

        this.button2.mousePressed(() => {
            
        
               this.access1.hide()
            
            
        });

this.submit.mousePressed(()=>{   
    if(system.authenticate(accessCode,this.access1.value())){
        var results = db.ref('Results')
        results.push({
            name:this.nameInput.value(),
            score:score
        })
            this.hide()
        
        playState = 'submitted' 
        
    }
    else{
        this.hide()
        playState = 'unsubmit'
    }


})


    }

hide(){
        this.button3.hide();
        this.access3.hide();
        this.button2.hide();
        this.access2.hide();
        this.button1.hide();
        this.access1.hide();
        this.submit.hide();
        this.nameInput.hide()
        this.button3.hide();
        this.access3.hide();
        this.button4.hide();
        this.button5.hide();
        this.access4.hide();
    }
}