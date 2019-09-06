$(document).ready(function() {
  prepareGalleryList();
});

function prepareGalleryList() {
  var gallery = galleryData;

  var root = $("#galleryRoot");

  for (var i = 0; i < gallery.length; i++) {
    var col = $("<div/>", {
      class: "col s3 m3 l3"
    });
    var card = $("<div/>", {
      class: "card medium gallery-card"
    });
    var cardImage = $("<div/>", {
      class: "card-image"
    });
    var image = $("<img/>", {
      src: gallery[i].image
    });
    var cardTitle = $("<span/>", {
      class: "card-title",
      text: gallery[i].title
    });
    var cardContent = $("<div/>", {
      class: "card-content"
    });
    var cardInfo = $("<p/>", {
      text: gallery[i].content
    });

    cardContent.append(cardInfo);
    cardImage.append(image).append(cardTitle);
    card.append(cardImage).append(cardContent);
    col.append(card);
    root.append(col);
  }
}
