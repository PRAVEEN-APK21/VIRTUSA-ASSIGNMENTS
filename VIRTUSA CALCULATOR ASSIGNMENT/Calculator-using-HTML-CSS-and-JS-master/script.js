function insert(num){
    if(num){
      document.form.textview.value=document.form.textview.value+num;
    }
  }
  
  function equals(){

    var txt = document.form.textview.value;
    console.log(test(txt))

    if(txt){
      if(test(txt)){
        document.form.textview.value=eval(txt);
      }
      else{
        alert("enter numbers only");
      }
    }
    else{
        alert("enter something");
    }
  }

  function test(z){
    if(!(/[a-zA-Z]/.test(z))){
      return true;
    }
    else{
      return false;
    }
  }
  
  function clean(){
    document.form.textview.value="";
  }
  
  function back(){
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
  }