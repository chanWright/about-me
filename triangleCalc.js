calcTriArea(){
  var triBase = document.getElementById("baseText").value;
  var triHeight = document.getElementById("heightText").value;
  var answer = (triBase * triHeight) / 2;
  document.getElementById("answer").innterHTML = area;
}
