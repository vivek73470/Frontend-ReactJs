 
 
 let images=[
    "https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.pexels.com/photos/14590446/pexels-photo-14590446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.pexels.com/photos/5976591/pexels-photo-5976591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
      
     let container = document.getElementById('myslideshow');
     let interval;
     function startslideshow(){
    
    let counter=0;
    
    let img = document.createElement('img');
    img.src = images[counter];
    
    counter=counter+1;
    
        interval = setInterval(function(){
          container.innerHTML=0;
    
          if(counter===images.length){
             counter=0;
          }
    
        let img = document.createElement('img');
        img.src = images[counter];
        container.append(img);
        counter=counter+1;
       },2000)
    
     }
     startslideshow();
    
     function stopInterval(){
       clearInterval(interval);
     }