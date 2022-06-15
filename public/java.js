getComments();
function getComments(){
    $.get('/comments',function(data){
        if (!data){console.log("No data recived");}
        console.log("REcived data successfuly");

        for(var i =0 ;i<data.length;i++){
            console.log(data[i].name);
        }
        showCommwnts(data)
    })
}

function showCommwnts(comments){
    var commentSession = document.getElementById("suggestions");
    for(var i=0;i< comments.length;i ++){
        var section= document.createElement("section");
        section.className == "suggestion";

        var heading= document.createElement("h3");
        heading.innerHTML = comments[1].name;

        var comment = createElement("p");
        comment.innerHTML = comments[1].comment;

        section.appendChild(heading);
        section.appendChild(comment);
        commentSession.appendChild(section);
        console.log(comment);
    }
}