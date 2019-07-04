var topics = ["Canada", "Australia", "India", "Lebanon", "Palestine", "Russia", "Ghana", "Singapore"];

// function that builds the button menue. 
// It takes and ID to define this button and control the remove event on the A, the URL to load the view-item area, and the buttonText
function buildGifyButton(id, topic, buttonText) {
    var btn = $("<button>").attr({
        "id": "bb" + id,
        "type": "button",
        "class": "btn btn-outline-light single-button",
        "data-topic": topic,
    }).html(buttonText + " ");

    btn.append(buildCloseLink(id));

    btn.on("click", buttonClickHandler);

    $("#menu-items").append(btn);
}

function buttonClickHandler() {

    var btnURL = buildSearchURL($(this).attr("data-topic"), 5);
    console.log(btnURL);

    $.ajax({
        url: btnURL,
        method: "GET"
    }).then(function (response) {
        showImages(response);
    });
}

function showImages(response) {
    $("#view-area").empty();
    console.log("showImage called. the response is:");
    console.log(response);

    var gifsToDisplay = response.data;

    for (var i = 0; i < gifsToDisplay.length; i++) {
        var txt = "<p>This GIF is rated " + gifsToDisplay[i].rating + "<p>";
        var stillImage = gifsToDisplay[i].images.original_still.url;
        var activeImage = gifsToDisplay[i].images.original.url;

        buildGifyCard(stillImage, activeImage, txt);

    }

    var gtext = response.data[1].type;
    console.log(gtext);

}

// this functions builds the X on the button with event to remove element id
function buildCloseLink(id) {
    // create the X hyperlink that removes the element.
    var a = $("<a>").attr("href", "#").text("X");
    // onclick a, remove this button
    a.on("click", function () {

        // console.log("removing bb" + id);
        // console.log(topics);

        $("#bb" + id).remove();

        // topics.splice(id,1);
        // console.log(topics);
    });

    return a;
}

function buildSearchURL(keyword, limit) {
    var url = queryURLSearch;
    url += ("&q=" + keyword);
    url += ("&rating=g");
    url += ("&limit=" + limit);
    console.log(url);

    return url;
}

// buildGifyCard("./assets/images/sample-cat2.jpg","./assets/images/sample-cat2.jpg", "xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz ");

// Function that builds the gify card on the UI. This functions takes the image URL and the corresponding text
function buildGifyCard(gifyStillImage, gifyActiveImage, gifyText) {

    var viewItem = $("<div>").attr("class", "view-item");
    var cardItem = $("<div>").attr({
        "class": "card text-white bg-secondary",
        "style": "width: 18rem;"
    });
    
    var cardImg = $("<img>").attr({
        "class": "card-img-top content-image",
        "src": gifyStillImage,
        "alt": "Card image cap",
        "data-img-still": gifyStillImage,
        "data-img-active": gifyActiveImage,
        "data-img-state": "still"
    });

    cardImg.on("click", gifyImageClickHandler);

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

function gifyImageClickHandler(){
    var img = $(this)
    var state = img.attr("data-img-state");
    var stillImg = img.attr("data-img-still");
    var activeImg = img.attr("data-img-active"); 


    if (state === "still"){
        img.attr("src", activeImg);
        img.attr("data-img-state", "active");
    } else {
        img.attr("src", stillImg);
        img.attr("data-img-state", "still");
    }

}


function run() {
    for (var i = 0; i < topics.length; i++) {
        buildGifyButton(i, topics[i], topics[i]);
    }
}

run();