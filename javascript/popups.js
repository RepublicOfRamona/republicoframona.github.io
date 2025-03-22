window.onload = function() {
    if (!sessionStorage.getItem('welcomePopupShown')) {
        document.getElementById('popup').style.display = 'block';
        sessionStorage.setItem('welcomePopupShown', 'true');
    }
};

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }