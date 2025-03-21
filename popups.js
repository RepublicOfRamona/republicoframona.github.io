window.onload = function() {
    if (!sessionStorage.getItem('popupShown')) {
        document.getElementById('popup').style.display = 'block';
        sessionStorage.setItem('popupShown', 'true');
    }
};

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }