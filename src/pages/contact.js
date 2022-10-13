const contactUs = function(){
    const createcontactUsPage = document.createElement("main");
    createcontactUsPage.innerHTML = `
        <div id="container-contact">
            <div id="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8839264457138!2d-98.33288318551777!3d26.070049583497635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505c283212eed%3A0xbf5b2fc1296fa594!2sPlaza%20H100!5e0!3m2!1ses-419!2smx!4v1665612885815!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <div id="contact-address">
                <span id="addres-title">GUDCAKE</span><br>
                <span>Blvd. Miguel Hidalgo 100, Jardines Coloniales, 88745 Reynosa, Tamps.</span>
                <div id="media">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-github"></i>
                </div>

            </div>
        </div>
    `
    
    const container = document.getElementById("container");
    container.appendChild(createcontactUsPage);
};

export default contactUs;