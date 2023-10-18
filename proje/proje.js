

rezervasyon.onclick= function(){

    
let giris=new Date(document.getElementById("r1").value);
let cikis=new Date(document.getElementById("r2").value);
let oda=document.getElementById("r3").value;
let kisi=document.getElementById("r4").value;
let isim=document.getElementById("isim").value;
let mail=document.getElementById("mail1").value;

   
    if (r4=="" || isim=="" || mail==""){
        Swal.fire({
            
            text: 'Boş alan bırakmayınız.',
        
            confirmButtonText: 'Tamam'
          }); 
    }
    if (r1>r2){
        Swal.fire({
            
            text: 'Çıkış tarihi giriş tarihinden önce olamaz.',
        
            confirmButtonText: 'Tamam'
          }); 
    

    }

    if (r2>r1){

    }


    /*if(r2>r1){
    localStorage.setItem("giriş tarihi",r1);
    localStorage.setItem("çıkış tarihi",r2);
    localStorage.setItem("oda",r3);
    localStorage.setItem("kişi sayısı",r4);

    Swal.fire({
            
        text: 'Başarılı. Müsaitlik durumuna göre sizi arayacağız.',
    
        confirmButtonText: 'Tamam'
      }); 


    }
    else{
        Swal.fire({
            
            text: 'Tarihleri giriniz.Çıkış tarihiniz giriş tarihinizden önce olamaz.',
        
            confirmButtonText: 'Tamam'
          }); 
    }*/
    

}

