

  function searchHero() {

    document.getElementsByClassName("btn")[0].addEventListener("click", function() {
    user_in = getElementById("heroSearch").value;
    data = <?php echo JSON_encode($superheroes);?>;
    var errorMsg ="<p>Search Not Found</p>";

    for (x = 0; x <data.length; x++) {
        if (user_in = x['alias']){
        getElementById("result").innerHTML=x;
    }
    else
        getElementById("result").innerHTML= errorMsg;
        
  }
    xhr.open("GET", "http://localhost:8080/superheroes.php?query=" + input);
    xhr.send();
    })
}

window.onload=searchHero;

