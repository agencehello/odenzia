/* Additional Studio Boskant : Tabs on product page */
function openTab(evt, content_id, is_mobile = false) {
  var i, tabcontent, tablinks;
  if (!is_mobile) {
    tabcontent = document.getElementsByClassName("tabcontent-cus");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-cus");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    evt.currentTarget.className += " active";
    document.getElementById(content_id).style.display = "block";
  } else {
    if (evt.currentTarget.classList.contains("active")) {
      document.getElementById(content_id).style.display = "none";
      evt.currentTarget.className = evt.currentTarget.className.replace(
        "active",
        ""
      );
    } else {
      evt.currentTarget.className += " active";
      document.getElementById(content_id).style.display = "block";
    }
  }
}

if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
  document.getElementById("tab-cus-active").click();
}
