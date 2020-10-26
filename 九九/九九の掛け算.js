for (let i = 1; i <= 10; i++) {
  //縦
  document.write("<tr>");

  for (let j = 1; j <= 10; j++) {
    //横
    document.write("<td>", i + j, "</td>");
  }
  document.write("</tr>");
}
