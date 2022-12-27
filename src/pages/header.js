const createHeader = function(){
    const create = document.createElement("header");
    create.innerHTML = `
            <div id="call">Call us (555) 555 5555</div>
            <div id="menu">
                <div id="menu-left">
                    <a href="#" id="home">Home</a>
                    <a href="#" id="pmenu">Menu</a>
                    <a href="#" id="about">About</a>
                </div>
                <div id="logo"><img src="../assets/gudcake.png"></div>
                <div id="menu-right">
                    <a href="#" id="contact">Contact Us</a>
                    <div id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
                </div>
            </div>
    `
document.getElementById("container").appendChild(create);
};


export default createHeader;