
/**
 * Calculate the grade you want
 */
function task2()
{
    var list=["lab.2","project1.2","project2.2"];
    var error=["εργαστηρίου","πρώτης εργασίας","δευτερης εργασίας"];
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

      if(grade>10||grade<0)
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
    //2*(5-(20%*εργαστήριο) + (30%*(Μέσος όρος εργασιών)))
    var result=2*(5-(20/100*grades[0]+30/100*(grades[1]+grades[2])/2));

    if(result<minimumGrade)
    {
      result=minimumGrade;
    }

    var elem=document.getElementById("grade.2");
    //console.log(elem==null);
    elem.innerHTML="Επιθυμητός Βαθμός: "+result;
    //document.write(result);

}



/**
 * Add event listeners to press the button if the user presses enter
 */

var ids=["lab.2", "project1.2", "project2.2", "exam.2"]
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
        document.getElementById("button2").click();
      }
    });
}
