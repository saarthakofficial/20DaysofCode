const panels = document.querySelectorAll('.job, .project');

// Add event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('mouseenter', handlePanelEnter);
    panel.addEventListener('mouseleave', handlePanelLeave);
});

// Fade in function
function handlePanelEnter() {
  this.classList.add('active');
}

// Fade out function
function handlePanelLeave() {
  this.classList.remove('active');
}