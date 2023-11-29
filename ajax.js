function ajax() {
  var ajax;
  var url = "napoje.xml";
  var alt = "foto";
  var rodzaj = document.getElementById("opcja").value;
  console.log(rodzaj);
  var txt, grupa, atrybut;
  if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      txt = "<table border='1'><tr><th>Zdjecie</th><th>Nazwa</th><th>Cena</th><th>Rodzaj</th></tr>";
      grupa = ajax.responseXML.getElementsByTagName("Napoj");
      for (var i = 0; i < grupa.length; i++) {
        if (grupa[i].getElementsByTagName("Rodzaj")[0].firstChild.nodeValue == rodzaj) {
          txt += "<tr>";
          atrybut = grupa[i].getElementsByTagName("Zdjecie");
          try {
            txt += "<td><img src=" + atrybut[0].firstChild.nodeValue + " alt="+alt+"</img></td>";
          } catch (er) {
            txt += "<td> </td>";
          }

          atrybut = grupa[i].getElementsByTagName("Nazwa");
          try {
            txt += "<td>" + atrybut[0].firstChild.nodeValue + "</td>";
          } catch (er) {
            txt += "<td> </td>";
          }

          atrybut = grupa[i].getElementsByTagName("Cena");
          try {
            txt += "<td>" + atrybut[0].firstChild.nodeValue + "</td>";
          } catch (er) {
            txt += "<td> </td>";
          }

          atrybut = grupa[i].getElementsByTagName("Rodzaj");
          try {
            txt += "<td>" + atrybut[0].firstChild.nodeValue + "</td>";
          } catch (er) {
            txt += "<td> </td>";
          }

          txt += "</tr>";
        }
      }
      txt += "</table>";
      document.getElementById('wynik').innerHTML = txt;
    }
  }
  ajax.open("GET", url, true);
  ajax.send(null);

  // let h3 = document.getElementsByTagName('h3')[0];
  //       function playh1(element){

  //           let str = element.textContent;
  //           let a = str.slice(1);
  //           let b = str.slice(0, 1);
  //           let newstr = a + b;
  //           element.textContent = newstr;
  //           return;

  //       };

 

  //       let si = setInterval(playh1, 500, h3);
}