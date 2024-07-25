//remove sidebar if open during desktop view
//get the class
(sidebar_class_remove = () => {
    //get element
    const mobile = document.getElementsByTagName("body")[0];
    //run function on screen resize
    window.addEventListener('resize', function(event) {
        if (mobile.classList.contains("sb-sidenav-toggled")) {
            // do something here if the class exists
            mobile.classList.remove("sb-sidenav-toggled")
            console.log("class remove")           
        }
    }, true);
})()

