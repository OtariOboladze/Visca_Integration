var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            array.forEach(val => {
                
            });( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("#logo").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});