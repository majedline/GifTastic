

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

buildGifyButton(1, "https://www.google.ca", "google");

// function that builds the button menues. 
// It takes and ID to define this button and control the remove event on the A, the URL to load the view-item area, and the buttonText
function buildGifyButton(id, dataURL, buttonText) {
    var btn = $("<button>").attr({
        "id": "bb" + id,
        "type": "button",
        "class": "btn btn-outline-light single-button",
        "data-url": dataURL
    }).html(buttonText + " ");

    btn.append(buildCloseLink(id));
    
    $("#menu-items").append(btn);
}

// this functions builds the X on the button with event to remove element id
function buildCloseLink(id) {
    // create the X hyperlink that removes the element.
    var a = $("<a>").attr("href", "#").text("X");
    // onclick a, remove this button
    a.on("click", function () {
        $("#bb" + id).remove();
        console.log("bb" + id);
    });

    return a;
}


// buildGifyCard("./assets/images/sample-cat2.jpg", "xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz ");

// Function that builds the gify card on the UI. This functions takes the image URL and the corresponding text
function buildGifyCard(gifyImage, gifyText) {

    var viewItem = $("<div>").attr("class", "view-item");
    var cardItem = $("<div>").attr({
        "class": "card text-white bg-secondary",
        "style": "width: 18rem;"
    });
    var cardImg = $("<img>").attr({
        "class": "card-img-top content-image",
        "src": gifyImage,
        "alt": "Card image cap"
    });
    var cardBody = $("<div>").attr("class", "card-body");
    var cardBodyText = $("<p>").attr("class", "card-text content-text").html("" + gifyText + "");

    // set the card text
    cardBody.append(cardBodyText);
    // include the card image to the card
    cardItem.append(cardImg);
    // include the card text to the card
    cardItem.append(cardBody);
    // include the card to the view item
    viewItem.append(cardItem);
    // include the view item to the main viewing area
    $("#view-area").append(viewItem);

}