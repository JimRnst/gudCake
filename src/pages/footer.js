const footer = function(){
    const createfooterPage = document.createElement("footer");
    createfooterPage.innerHTML = `
            <div id="footer-container">
                <div id="order">Order Here</div>
                <div id="footer-info-container">
                    <div id="footer-info">
                        <div class="one">
                            <span>&#169;Gud Cake Bakery, Inc. all rights reserved.</span><br>
                            <span>By: Jaime Lara</span>
                        </div>
                        <div class="two">
                            <a href="#">Return Policy</a> / <a href="#">FAQ</a> / <a href="#">Shipping</a> / <a href="#">Terms of Service</a> / <a href="#">Privacy & Segurity</a>
                        </div>
                    </div>
                </div>
            </div>
    `
    
    const clearPage = document.getElementById("container");
    clearPage.appendChild(createfooterPage);
};

export default footer;