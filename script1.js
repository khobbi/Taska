// Event listeners for the edit and delete buttons
document.querySelectorAll('.editTaskImg').forEach(function(editBtn) {
    editBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Handle edit task logic here
      alert('Edit task clicked!');
    });
  });

document.querySelectorAll('.deleteTaskImg').forEach(function(deleteBtn) {
    deleteBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Handle delete task logic here
      const taskItem = deleteBtn.closest('.taskItem');
      taskItem.remove();
    });
});

  // Add event listeners for the custom checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        // Handle checked state logic here
        console.log('Task completed:', checkbox.nextElementSibling.nextElementSibling.textContent);
      } else {
        // Handle unchecked state logic here
        console.log('Task not completed:', checkbox.nextElementSibling.nextElementSibling.textContent);
      }
    });
});