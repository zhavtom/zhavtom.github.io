function getdata(){
  var postid = location.pathname

  var req = new XMLHttpRequest();
  var url = "md" + postid + ".md";
  location.pathname = "";

  req.open("GET", url)
  req.onload = function(){
    if (req.readyState == 4 && xmlhttp.status == 200) {
      var data = req.responseText;
      var title = data.split(/\r\n|\r|\n/)[0].split(" ").shift().join(" ");
      var doc = document.getElementById("post-md")
      doc = marked(data);
      doc.title = title;
    }
  }
}

window.onload = getdata;