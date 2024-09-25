$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // Select the #list and find all <li> tags it contains
  // This contains even indirect children further down in the hierarchy
  var items = $("#list").find("li");
  highlight(items);

  // Select the #list and find only <li> that are *direct* children
  // Note that this will still produce a yellow background around the whole list
  // because the direct children <li> have enough height to contain their children
  var children = $("#list").children("li");
  highlight(children);

  // Search for even non-direct parents
  var body = $("#list").parents("body");
  highlight(body);

  // Select the (unique) direct parent of an element
  var content = $("#list").parent();
  // highlight(content);

  // Search through siblings on the same level in the HTML hierarchy
  var siblingHeadlines = $("#list").siblings(":header");
  highlight(siblingHeadlines);

  // Select the previous sibling of a selected element
  var previous = $("#list").prev();
  highlight(previous);

  // Select the next sibling of a selected element
  var next = $("#list").next();
  highlight(next);

});

// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "rgba(180, 180, 30, 0.8)");
}

$(function() {
  $("#list").find("li").css("background-color", "rgba(180, 180, 10, 0.8)");
  // Will find the direct children on the list
  $("#list").children("li").css("background-color", "rgba(180, 180, 10, 0.8)");
  // Selects the parents which selects most things but put in div which deselects the body
  $("#list").parents("div").css("background-color", "rgba(180, 180, 10, 0.8)");
  // Will select one parent and will use one element unless want the parent of the HTML tag
  $("#list").parent().css("background-color", "rgba(180, 180, 10, 0.8)");
  // Siblings are on the same level, can use ("header") which will select all headings h1-h6
  $("#list").siblings().css("background-color", "rgba(180, 180, 10, 0.8)");
  // Select before the list element and .next is the element that comes after the list
  $("#list").prev().css("background-color", "rgba(180, 180, 10, 0.8)");
});
