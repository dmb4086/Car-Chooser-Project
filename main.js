/*
This function changes the background based on the list,
@param cssclass : this is where you pass in the css class responsible for chnaging background
 */
var str = 'body1';
var searchstr = "";

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
    console.log(lstcheck);


    var lstcheck = document.getElementById(s1).id;
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    // console.log(lstcheck);


    if (lstcheck == 'slct1'){
        document.getElementById('list2').style.display = 'block';

        // console.log(s1.value);   DEBUG

        s2.innerHTML = "" ;

        if(s1.value ==  "ferrari"){
            var optionArray = ["blank|Choose Car Make","enzo|Enzo","ff|FF","458 italia|458 Italia"];


        }

        else if (s1.value ==  "lambo"){
            var optionArray = ["blank|Choose Car Make","gallardo|Gallardo","hurcan|Hurcan","veneno|Veneno"];
        }

        else if (s1.value ==  "ford"){
            var optionArray = ["blank|Choose Car Make","mustang|Mustang","shelby|Shelby","gt|GT"];

        }


        /*
        This piece of code below is responsible for calling the background changing function with a dynamic paramter
         */
        var bgstr = s1.value+'BG';
        searchstr = ""+s1.value;
        // console.log(bgstr);
        changeBG(bgstr);

        for(var option in optionArray){
            var pair = optionArray[option].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];

            s2.options.add(newOption);

        }
        document.getElementById("slct2").options[0].disabled = true;
        optionArray.splice(0, optionArray.length);


    }
    if (lstcheck == 'slct2'){
        document.getElementById('list3').style.display = 'block';

        // console.log(s1.value);
        searchstr +=" "+s1.value;




        s2.innerHTML = "" ;

        if(s1.value ==  "ff" || "enzo" || "458" || "gallardo" || "veneno" || "hurcan" || "mustang" || "gt" || "shelby"){
            var optionArray = ["blank|Choose Car Color","yellow|Yellow","black|Black","blue|Blue","red|Red"];

        }

        // else if (s1.value ==  "gallardo" || "veneno" || "hurcan"){
        //     var optionArray = ["blank|Choose Car Color","yellow|Yellow","black|Black","blue|Blue","red|Red"];        }
        //
        // else if (s1.value ==  "mustang" || "gt" || "shelby"){
        //     var optionArray = ["blank|Choose Car Color","yellow|Yellow","black|Black","blue|Blue","red|Red"];
        // }


        for(var option in optionArray){
            var pair = optionArray[option].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];

            s2.options.add(newOption);

        }
        document.getElementById("slct3").options[0].disabled = true;
        console.log(searchstr);

    }




}
