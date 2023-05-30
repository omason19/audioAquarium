// $(function() {
//     // Make the objects draggable
//     $(".box").draggable({
//       revert: function(valid) {
//         if (!valid) {
//           // Reset the position of the object being dragged
//           $(this).data("ui-draggable").originalPosition = {
//             top: 0,
//             left: 30
//           };
//         }
//         return !valid; // Only revert if dropped outside a valid container
//       },
//       containment: "aquarium", // Limit dragging within the document body
//       start: function(event, ui) {
//         // Store the original position and group ID of the dragged object
//         $(this).data("originalPosition", ui.helper.position());
//         $(this).data("group", $(this).parent().attr("id"));
//       }
//     });
  
//     // Make the container accept only one object from each group
//     $(".tank").droppable({
//       accept: function(box) {
//         var groupId = box.data("group");
//         var existingObject = $(this).find(".box[data-group='" + groupId + "']");
  
//         if (existingObject.length > 0) {
//           // Move the existing object back to its original position
//           existingObject.animate(existingObject.data("originalPosition"));
//         }
  
//         return true;
//       }
//     });
//   });

$(function(){

    
})