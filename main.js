/*
This function changes the background based on the list,
@param cssclass : this is where you pass in the css class responsible for chnaging background
 */
var str = 'body1';
function changeBG(  cssclass) {



    document.getElementById('mainBG').classList.remove(str);
    document.getElementById('mainBG').classList.add(cssclass);
     str = cssclass.toString();



}
/*
This function makes the second select list appear by changing the display,
and then populates it using for loop
 */
function populate(s1,s2) {


    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    document.getElementById('list2').style.display = 'block';

    console.log(s1.value);

    s2.innerHTML = "" ;

    if(s1.value ==  "ferrari"){
        var optionArray = ["blank|Choose Car Make","enzo|Enzo","ff|FF","458 italia|458 Italia"];


    }
    else if (s1.value ==  "lambo"){
        var optionArray = ["blank|Choose Car Make","gallardo|Gallardo","hurcan|Hurcan","veneno|Veneno"];
    }
    var bgstr = s1.value+'BG';
    console.log(bgstr);
    changeBG(bgstr);

    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];

        s2.options.add(newOption);

    }
    document.getElementById("slct2").options[0].disabled = true;

}
