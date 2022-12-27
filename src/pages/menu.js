const menu = function(){
    const createmenuPage = document.createElement("main");
    createmenuPage.innerHTML = `
            <div id="menu-menu">
                <div id="menu-menu-title">MENU</div>
                <div class="grid-template-menu">
                    <div class="box-menu">
                        <img src="./assets/cake1.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake2.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake3.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake4.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake5.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake6.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake1.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake2.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                    <div class="box-menu">
                        <img src="./assets/cake3.jpg" alt="">
                        <div class="box-menu-info">
                            <div class="box-title">CAKE [name]</div>
                            <div class="box-price">$$$$</div>
                        </div>
                    </div>
                </div>
            </div>
    `
    
    const container = document.getElementById("container");
    container.appendChild(createmenuPage);
};

export default menu;