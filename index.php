<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Créer ton pokedeck !">
  <link rel="stylesheet" href="style/main.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=Denk+One&display=swap" rel="stylesheet" />
  <title>Pokedeck</title>
</head>

<body>
  <header>

    <img src="assets/titre.webp" class="titre" alt="titre pokedeck">
    <div class="containerBottomHeader">

      <span class="filtre">Filtrer par</span>
      <form class="containerInput" method="get" action="">
        <select class="select" name="select">
          <option class="choix" value="..." name="...">...</option>
          <option class="choix" value="name" name="name">Nom</option>
          <option class="choix" value="id" name="id">ID</option>
          <option class="choix" value="generation" name="generation">Génération</option>
          <option class="choix" value="type2" name="type2">Type</option>
        </select>
        <input class="input" type="search" name="search" placeholder="Recherche...">
        <input class="valider" type="submit" value="Go">
      </form>

    </div>


  </header>

  <div class="modal">

    <img class="close" src="assets/close.webp" alt="fermer" />
    <img class="left" src="assets/arrowleft.webp" alt="gauche" />
    <img class="right" src="assets/arrowright.webp" alt="droite" />
    <div class="importation"></div>

  </div>

  <main>
    <?php
    $host = "pokemon.pokemon";
    $user = "root";
    $pass = "";
    $dbname = "pokemon";
    $path = "mysql:host=$host;dbname=$dbname;charset=utf8";
    $bdd = new PDO($path, $user, $pass);
    $result = addslashes(htmlspecialchars($_GET['search']));



    if (isset($result) &&  $_GET['select'] == "name") {

      filtre();
    } elseif (isset($_GET['search']) &&  $_GET['select'] == "generation") {
      filtre();
    } elseif (isset($_GET['search']) &&  $_GET['select'] == "id") {
      filtre();
    } elseif (isset($_GET['search']) &&  $_GET['select'] == "type2") {
      filtre();
    };

    function filtre()
    {
      $pokemon = $GLOBALS["bdd"]->query('SELECT id, name, background, img_pokemon FROM pokemon WHERE ' . $_GET['select'] . ' LIKE "%' . $GLOBALS["result"] . '%" ORDER BY id ASC');
      $result = $pokemon->fetchAll();
      foreach ($result as $poke) { ?>
        <div class="card" style="background-image: url('<?php echo $poke[2] ?>')">
          <h3 class="idpoke"><?php echo $poke[0] ?></h3>
          <img class="imgPoke" src="<?php echo $poke[3] ?>" alt="image de <?php echo $poke[1] ?>">
          <h2 class="nom"><?php echo $poke[1] ?></h2>
        </div><?php
            }
          }
              ?>
  </main>

  <script src="app.js"></script>


</body>

</html>