document.addEventListener('DOMContentLoaded', function () {
    var infoIcons = document.querySelectorAll('.fa-circle-info');
    var overlays = document.querySelectorAll('.overlay');
    
    infoIcons.forEach(function (infoIcon, index) {
      infoIcon.addEventListener('click', function () {
        var section = infoIcon.closest('.section');
        var overlay = overlays[index];
        section.appendChild(overlay);
        overlay.style.display = 'flex';
      });
    });
  
    document.addEventListener('click', function (event) {
      var target = event.target;
      var overlayClicked = target.classList.contains('fa-circle-info') || target.closest('.overlay');
      var overlayOpen = Array.from(overlays).some(function (overlay) {
        return overlay.style.display === 'flex';
      });
  
      if (!overlayClicked && overlayOpen) {
        overlays.forEach(function (overlay) {
          overlay.style.display = 'none';
        });
      }
    });
  });

  
  
  
  
