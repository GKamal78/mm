function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert("Project submitted successfully!");
  }
  
  function exitApp() {
    alert("Exiting application...");
    window.close(); // For Electron or packaged app; won't work in browser
  }


