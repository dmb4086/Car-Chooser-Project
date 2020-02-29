/*
This function changes the background based on the list,
@param cssclass : this is where you pass in the css class responsible for chnaging background
 */
function changeBG(  cssclass) {

    document.getElementById('mainBG').classList.remove('body1');
    document.getElementById('mainBG').classList.add(cssclass);
}
/*
This function makes the second select list appear by changing the display,
and then populates it using for loop
 */
function populate(s1,s2) {

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    document.getElementById('list2').style.display = 'block';


    s2.innerHTML = "" ;

    if(s1.value ==  "ferrari"){
        var optionArray = ["blank|Choose Car Make","enzo|Enzo","ff|FF","458 italia|458 Italia"];
        changeBG('FerrariBG')
    }
    else if(s1.value ==  "lambo"){
        var optionArray = ["blank|Choose Car Make","gallardo|Gallardo","hurcan|Hurcan","veneno|Veneno"];
        changeBG('lamboBG')
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];

        s2.options.add(newOption);

    }
    document.getElementById("slct2").options[0].disabled = true;

}
