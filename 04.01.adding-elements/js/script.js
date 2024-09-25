// HTML DOM (Document Object Model)

$(function () {

  // 1) Appending elements to existing elements.
  // -> This adds elements as the last children of a given element

  // Append a new list item to the end of the first sub list
  $("ul ul:first").append("<li>New sub item</li>");

  // Other way to achieve the same effect
  $("<li>Another new sub item</li>").appendTo("ul ul:first");

  // 2) Prepending elements to existing elements.
  // -> This adds elements as the first children of a given element

  // Prepend a new list item to the start of the first sub list
  $("ul ul:first").prepend("<li>First sub item</li>");

  // Other way to achieve the same effect
  $("<li>Very first sub item</li>").prependTo("ul ul:first");

  // 3) Adding elements as siblings of existing elements

  // Add a new elements after an existing one (as next sibling)
  $(".red-box").after("<div class='red-box'>New Red</div>");

  // Add a new elements before an existing one (as previous sibling)
  $(".blue-box").before("<div class='blue-box'>New Blue</div>");

  // You can also use a callback function to construct more complex
  // elements to add to the DOM
  $(".green-box").after(function() {
    // Maybe more complex string of new element(s)
    return "<div class='green-box'>New Green</div>";
  });

  // 4) Add existing elements to other existing elements
  // -> This will move the added element, so the original vanishes

  // For instance, add the #list after the first paragraph (removes it from its
  // original position).
  // In case it's added to multiple elements, jQuery must clone the added element.
  $("p:first").after($("#list"));

});

$(function() {
  // Last subtitle
  $("ul ul:first").append("<li>I'm gonna be the last sub-item");

  // Another way to acheive the same effect
  $("<li>I'm gonna be the last item</li>").appendTo($("ul ul:first"));

  // First subtitle
  $("ul ul:first").prepend("<li>I'm gonna be the last sub-item");

  // Add for first subtitle for each main item
  $("ul ul").prepend("<li>I'm gonna be the first sub-item");

  // Another way to acheive the same effect with simpliar syntax
  $("<li>I'm gonna be the first item</li>").prependTo("ul ul:first");

  $("<h4>Peter Sommerhoff</h4>").prependTo("#content");

  // Making another red box called sibling
  //$(".red-box").after("<div class='red-box'>Another Red</div>");
  // Making last child blue box
  //$(".blue-box").before("<div class='blue-box'>Blue Friend</div>");

  // Blue box 2 before the blue box using in function
  //$(".blue-box").before(function() {
    //return "<div class='blue-box'>Blue 2</div>";
  //});

  // Red box was originally to the left but is now in the middle, moving the element
  // Can pass in a string, a function, or in an element right away
  //$(".blue-box").before($(".red-box"));

  $("p").after($("#list"));


});
