$(function () {

  // You can remove an existing element simply with remove().
  // For instance, the first main item:
  $("li:first").remove();

  // If you want to reuse/re-display the element later, you should
  // use detach(). This also keeps all attached event handlers alive.
  // First, this removes the element from the DOM:
  var detached = $("p:first").detach();
  // Next, this will re-attach the element to the DOM (at another position):
  $("#list").after(detached);

  // To remove all elements *inside* a given elements, you can use empty().
  // The element itself remains in the DOM, so in this case the <form>.
  $("form").empty();

});

// Remove list from the page
$(function () {
  $("li").remove();
  $("form").children().not("input:text, textarea, br").remove();

  // When use detach instead, jquery will not forget the element compared to remove. Can repend the event later on
  var detachedListItem = $("li").detach();
  $("#content").append(detachedListItem);

  // Removing elements from first paragraph which will include width,height, em, span, ect. but the p tag will still be there
  $("p:first").empty();

  // Removes text inside color boxes without removing element iteself
  $(".red-box, .blue-box, .green-box").empty();
});