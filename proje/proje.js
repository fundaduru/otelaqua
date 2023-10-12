rezervasyon.onclick= function(){

    
    let r1=new Date(document.getElementById("r1").value);
    let r2=new Date(document.getElementById("r2").value);


    if(r1>r2){
        Swal.fire({
            
            text: 'Çıkış tarihiniz giriş tarihinizden önce olamaz.',
        
            confirmButtonText: 'Tamam'
          });
    }
    if(r2>r1){
    localStorage.setItem("giriş tarihi",r1);
    localStorage.setItem("çıkış tarihi",r2);
    }
    

}
