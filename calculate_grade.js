var minimumGrade=4;

/*
 * Calculate the grade
 */

function task1()
{
    var list=["lab","project1","project2","exam"];
    var error=["εργαστηρίου","πρώτης εργασίας","δευτερης εργασίας","τελικής εξέτασης"];
    var grades=[];
    var arr = [];

    for(var i = 0; i < list.length; i++)
    {
        var grade=parseInt(document.getElementById(list[i]).value);

        if(isNaN(grade))
        {
            arr.push(error[i]);
            grade=0;
        }

        if(grade>10 || grade<0)
        {
            arr.push(error[i]+" εντός των ορίων (0-10)");
            grade=0;
        }

        grades.push(grade);
    }




    var message="Δεν έχετε εισάγει βαθμό ";

    for (var i = 0; i < arr.length; i++) {
        message=message+arr[i];
        if(i==(arr.length-2))
        {
            message=message+" και ";
        }else{
            if(i!=(arr.length-1))
            {
                message=message+", ";
            }
        }
    }
    if(arr.length>0)
    {
        alert(message);
    }
    //(20%*εργαστήριο) + (30%*(Μέσος όρος εργασιών)) + 50%*(τελική εξέταση)
    var result=20/100*grades[0]+30/100*(grades[1]+grades[2])/2+50/100*grades[3];

    if(grades[3]<minimumGrade)
    {
        result=grades[3];
    }

    var elem=document.getElementById("grade");
    //console.log(elem==null);
    elem.innerHTML="Τελικός Βαθμός: "+result;
    //document.write(result);
}


/*
 * Add the event listeners for the enter key press
 */
var ids=["lab", "project1", "project2", "exam"]
for (var i = 0; i < ids.length; i++) {
    // Get the input field
    var input = document.getElementById(ids[i]);

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("button1").click();
        }
    });
}
