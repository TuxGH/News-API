
window.onload = async () => {
    let res = await fetch("https://ok.surf/api/v1/cors/news-feed")
    res = await res.json();

    let somethin = document.querySelector("div")
    res.Entertainment.forEach(item => {
        somethin.innerHTML +=`
        <div class="random">
        <div class="card">
        <img src="${item.og}" class="cardImage">
      
        </div>
    
          <div class="card-body">
    
            <h3>${item.title}</h3>
            <h5>${item.source}</h5>
        
          
            
          </div>
          </div>
      
          `})
    console.log(res);
}