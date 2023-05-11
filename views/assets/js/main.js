function darkmode(){

    var dark = document.getElementById('dark-mode');

    var SetTheme = document.body;
    SetTheme.classList.toggle("night")
    dark.classList.toggle("active");
    var theme;

    if(SetTheme.classList.contains("night")){
        console.log("Dark mode");
        theme = "DARK";
    }else{
        console.log("Light mode");
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

setInterval(() => {
    var dark= document.getElementById('dark-mode');
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    // console.log(GetTheme);
    if(GetTheme === "DARK"){
         document.body.classList = "night";
        }else{
            document.body.classList = "";
    }
}, 5);