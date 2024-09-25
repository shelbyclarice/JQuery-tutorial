$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // Select all <li> tags and then filter out all odd ones (keep only even ones)
  // Same as $("#list > li:even"), using more advanced CSS
  var everySecondItem = $("#list").children("li").filter(":even");
  highlight(everySecondItem);

  // The filter can even be a function that gets the index of an element and
  // returns true (to keep the element) or false (to filter it out).
  // For instance, to select only every third sub list item, we can do this:
  var everyThirdItem = $("li li").filter(function(index) {
    return index % 3 == 0;
  });
  highlight(everyThirdItem);

  // Keep only the first item of a selection
  var first = $("li").first();
  highlight(first);

  // Keep only the last item of a selection
  var last = $("li").last();
  highlight(last);

  // Keep only the item at a specific index of a selection
  // For instance, keep only the 5th item (thus index 4):
  var fifth = $("li").eq(4);
  highlight(fifth);

  // Keep only the second last item (index -2):
  var secondLast = $("li").eq(-2);
  highlight(secondLast);

});

// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "rgba(180, 180, 30, 0.8)");
}

$(function () {
  // Main list 1 and 3 because they start with 0 and is considred even with sub items
  $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // index is 0,1,2,3 so on. Can return a boolean value. Filter function will filter out all elements which function returns false. if were to return true, wouldn't do anything
  $("#li").filter(function(index) {
    return false;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");
});


$(function () {
  $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#li").filter(function(index) {
    // Now will only return true if the index is 0,3,6,9 and so on. Return with remaining divided by 3
    // 0 is the first highlighted can do 1, or 2 for the 1st or 2nd element
    return index % 3 === 0;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");

  // selects first elements of the list and .last and .eq(1) selecting specific element. Can use - numbers to select from back to front
  $("li").first().css("background-color", "rgba(180, 180, 30, 0.8");

  // Selects all of list except for the first
  $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");

  $("#li").not(function(index) {
    // Defining negative conditions , selects all of list but divided by 3 starting with 2nd element
    return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");
});
