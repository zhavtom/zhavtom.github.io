function getdata(){
  var params=location.search;
  if (!params) return false;
  params=params.substring(1);
  var pair=params.split("&");
  var i=tmp="";
  var param=new Array();
  for (i=0; i < pair.length; i++) {
    tmp=pair[i].split("=");
    key=tmp[0];
    val=tmp[1];
    param[key]=val;
  }
  var postid="";
  if (!param["postid"] || param["postid"]==""){
    return false;
    }else{
    postid=unescape(param["postid"]);
  }

  var req = new XMLHttpRequest();
  var url = postid + ".md";

  req.open("GET", url)
  req.onload = function(){
    if (req.readyState == 4 && xmlhttp.status == 200) {
      var data = req.responseText;
      document.getElementById("post-md") = marked(data);
    }
  }
}

window.onload = getdata;