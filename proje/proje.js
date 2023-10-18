

rezervasyon.onclick= function(){

    
    let r1=new Date(document.getElementById("r1").value);
    let r2=new Date(document.getElementById("r2").value);
let r3=document.getElementById("r3").value;
let r4=document.getElementById("r4").value;

   
    if (r4==""  ){
        Swal.fire({
            
            text: 'Boş alan bırakmayınız.',
        
            confirmButtonText: 'Tamam'
          }); 
    }


    if(r2>r1){
    localStorage.setItem("giriş tarihi",r1);
    localStorage.setItem("çıkış tarihi",r2);
    localStorage.setItem("oda",r3);
    localStorage.setItem("kişi sayısı",r4);
    }
    else{
        Swal.fire({
            
            text: 'Tarihleri giriniz.Çıkış tarihiniz giriş tarihinizden önce olamaz.',
        
            confirmButtonText: 'Tamam'
          }); 
    }
    

}
