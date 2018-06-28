var xhr = new XMLHttpRequest();
xhr.open("GET", "../footer/footer.html", false);
xhr.send();
footer.innerHTML = xhr.responseText;
