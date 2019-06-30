

console.log("connection to gify is ready");

$.ajax({
    url: queryURLTrending,
    method: "GET"
}).then(function (response) {
    showImage(response);

});

function showImage(response) {
    console.log(response);

    // var imgTag = $("<img>");
    // imgTag.attr("id", 1);
    // imgTag.attr("src", response.url);
    // console.log(imgTag);
    // $("#a1").html(imgTag);

}
buildGifyCard("a", "x");
buildGifyCard("a", "x");
buildGifyCard("a", "x");
buildGifyCard("a", "x");


function buildGifyCard(gifyImage, gifyText) {

    var viewItem = $("<div>").attr("class", "view-item");
    var cardItem = $("<div>").attr({
        "class": "card text-white bg-secondary",
        "style": "width: 18rem;"
    });
    var cardImg = $("<img>").attr({
        "class": "card-img-top content-image",
        "src": "assets/images/sample-cat2.jpg",
        "alt": "Card image cap"
    });
    var cardBody = $("<div>").attr("class", "card-body");
    var cardBodyText = $("<p>").attr("class", "card-text content-text").html("'come quick example text to build on the card title and make up the bulk'");

    cardBody.append(cardBodyText);


    cardItem.append(cardImg);
    cardItem.append(cardBody);

    viewItem.append(cardItem);


    $("#view-area").append(viewItem);



    // <div class="view-item">
    //     <div class="card text-white bg-secondary" style="width: 18rem;">
    //         <img class="card-img-top content-image" src="assets/images/sample-cat2.jpg" alt="Card image cap">
    //             <div class="card-body">
    //                 <p class="card-text content-text">Some quick example text to build on the card title and
    //                     make up the bulk
    //             of the card's cont.</p>
    //             </div>
    // </div>
    //     </div>

}