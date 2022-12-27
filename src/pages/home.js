//CREAR PAGINA PRINCIPAL
const home = function(){
    const createHomePage = document.createElement("main");
    createHomePage.innerHTML = `
            <div id="carrousel">
                <div id="btn-img">
                    <i class="fa-solid fa-circle-chevron-left" id="left" style="color: white;"></i>
                    <i class="fa-solid fa-circle-chevron-right" id="right" style="color: white;"></i>
                </div>
                <img id= "cake" src="./assets/cake1.jpg" alt="cake">
            </div>
            <div class="main-menu">
                <div class="title" id="main-about">ABOUT US</div>
                <div class="photo"><img src="./assets/chef.jpg"></div>
                <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus molestiae tenetur facilis, laudantium id ipsam laborum quod eos similique porro numquam vero quas praesentium amet deleniti neque repellat, placeat hic. Quasi laboriosam in fugit quis sed odio modi neque qui voluptate, dolorem hic sequi adipisci, deserunt vero id facere.</div>
            </div>
    `
document.getElementById("container").appendChild(createHomePage);
carrousel();
};

 const carrousel = (function(){
     const clicked = document.querySelector("#btn-img");
     const imgChanged = document.querySelector("#cake")
     const carrouselImages = ["./assets/cake1.jpg", "./assets/cake2.jpg", "./assets/cake3.jpg", "./assets/cake4.jpg", "./assets/cake5.jpg", "./assets/cake6.jpg"]
     let countImg = 0
     clicked.addEventListener("click", (e) => {
         if(e.target.id === "left"){
             if(countImg > 0){
                 imgChanged.src = carrouselImages[countImg -1];
                 countImg--;
             } else{
                 imgChanged.src = carrouselImages[carrouselImages.length -1]
                 countImg = carrouselImages.length -1;
             }
         } else if(e.target.id === "right"){
             if(countImg < carrouselImages.length -1){
                 imgChanged.src = carrouselImages[countImg +1];
                 countImg++
             } else{
                 imgChanged.src = carrouselImages[0];
                 countImg = 0
             }
         }
     });
 });
 
export default home;