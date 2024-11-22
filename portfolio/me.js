fetch("data.json")
  .then(function(response) {
    datas= response.json();
    return datas
  })
  .then(function(datas) {
    //for about page
    let a = document.querySelector("#about1");
    let b = "";
    for (let data of datas.about) {
      b += `<div class="container p-3 m-3 about-container">
                <h4>${data.title}</h4>
                <p>${data.description}</p>
            </div>`;
    }
    a.innerHTML = b;
    //for skill page
    let c=document.querySelector('.skills');
    let d="";
    for(let data of datas.skills){
        d+=`<div class="container p-2 p-sm-5 m-3 skill-container">
                <h3>${data.title}</h3>
            </div>`;
    };
    c.innerHTML=d;

    //for project page
    let e=document.querySelector('.project');
    let f="";
    for(let data of datas.projects){
        f+=`<div class="project-card  m-sm-5 my-5">
                <div class="project-card1">
                    <img src="${data.image}" alt="">
                </div>
                <div class="project-card2 p-3">
                    <h4>${data.title}</h4>
                    <p>${data.description}</p>
                    <a href="${data.link}" target="_blank">VISITE</a>
                </div>
            </div>`;
    };

    e.innerHTML=f;
  })
  .catch(function(error) {
    console.error("Error fetching or processing data:", error);
  });

function sendWhatsAppMessage() {
  const mail = "vetrivetri28938@gmail.com";
                

  let subject= document.querySelector('.from').value;

  let p= document.querySelector('.phone').value;

  let body= document.querySelector('.message').value;

  body += `%0A And phone number is --- ${p}`

  const url = `mailto:${mail}?subject=${subject}&body=${body}`;
    
  
  window.open(url, '_blank');
}
   