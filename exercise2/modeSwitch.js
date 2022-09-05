let isDark = false;
// To define dark and light modes using Boolean. Boolean: a value holding either true or false.
// Determine whether it is night mode or day mode by using function() and the conditional statement 'if...else'.
function switchModes(){
    if(isDark === true){
        // Get the root element of CSS documents to use the values of custom properties in JavaScript. And then manipulate the colour palette.
        document.documentElement.style.setProperty("--col-01", "#d3b59d");
        document.documentElement.style.setProperty("--col-02", "#fff8ef");
        document.documentElement.style.setProperty("--col-03", "#f17c78");
        document.documentElement.style.setProperty("--col-05", "#3f3f3f");
        document.documentElement.style.setProperty("--col-text", "#3f3f3f");
        document.documentElement.style.setProperty("--col-switchMode-text", "#3f3f3f");
        document.documentElement.style.setProperty("--col-sect-shad", "#493030");
        document.documentElement.style.setProperty("--col-a", "#f17c78");
        document.documentElement.style.setProperty("--col-a-hover", "#cb4c4c");
        document.documentElement.style.setProperty("--col-a-click", "#5b2c2c");
        document.documentElement.style.setProperty("--col-nav-shad", "#000");
        document.documentElement.style.setProperty("--col-nav-shad-hover", "#cc5656");
        document.documentElement.style.setProperty("--col-nav-lgt", "#6c6c6c");
        document.documentElement.style.setProperty("--col-nav-lgt-hover", "#f4abab");
        document.documentElement.style.setProperty("--col-nav-text", "#fff8ef");
        // Get the code I want to change through getElementById, and then change the text of the switch-mode button by using innerHTML.
        document.getElementById("modeText").innerHTML = "Light";
        isDark = false;
    } else {
        // Get the root element of CSS documents to use the values of custom properties in JavaScript. And then manipulate the colour palette.
        document.documentElement.style.setProperty("--col-01", "#4c3729");
        document.documentElement.style.setProperty("--col-02", "#776255");
        document.documentElement.style.setProperty("--col-03", "#ffb0b0");
        document.documentElement.style.setProperty("--col-05", "#c9a48b");
        document.documentElement.style.setProperty("--col-text", "#fff8ef");
        document.documentElement.style.setProperty("--col-switchMode-text", "#c9a48b");
        document.documentElement.style.setProperty("--col-sect-shad", "#000");
        document.documentElement.style.setProperty("--col-a", "#ffb0b0");
        document.documentElement.style.setProperty("--col-a-hover", "#ffd7d7");
        document.documentElement.style.setProperty("--col-a-click", "#fff8f8");
        document.documentElement.style.setProperty("--col-nav-shad", "#876a57");
        document.documentElement.style.setProperty("--col-nav-shad-hover", "#db8a8a");
        document.documentElement.style.setProperty("--col-nav-lgt", "#dbc0ad");
        document.documentElement.style.setProperty("--col-nav-lgt-hover", "#fcd0d0");
        document.documentElement.style.setProperty("--col-nav-text", "#4c3729");
        // Get the code I want to change through getElementById, and then change the text of the switch-mode button by using innerHTML.
        document.getElementById("modeText").innerHTML = "Dark";
        isDark = true;
    }
}