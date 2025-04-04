window.onload = function() {
    if (!sessionStorage.getItem('pledgePopupShown')) {
        document.getElementById('popup').style.display = 'block';
        sessionStorage.setItem('pledgePopupShown', 'true');
    }
};

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }