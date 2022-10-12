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
  <title>Document</title>
</head>

<body>
  <header>

    <img src="assets/titre.webp" class="titre" alt="titre pokedeck">

    <div class="containerBottomHeader">
      <section class="afficher_pokemon">


      </section>
      <ul class="containerBoutonGauche">
        <li class="menuG">Génération</li>
        <li class="generationPokemon gen1">Génération 1</li>
        <li class="generationPokemon gen2">Génération 2</li>
        <li class="generationPokemon gen3">Génération 3</li>
        <li class="generationPokemon gen4">Génération 4</li>
        <li class="generationPokemon gen5">Génération 5</li>
        <li class="generationPokemon gen6">Génération 6</li>
        <li class="generationPokemon gen7">Génération 7</li>
        <li class="generationPokemon gen8">Génération 8</li>
      </ul>


      <form class="containerInput" method="get" action="">
        <input type="search" name="search" placeholder="Recherche...">
        <input type="submit" value="Go">
      </form>


      <ul class=" containerBoutonDroit">
        <li class="menuD">Type</li>
        <li class="typePokemon normal">Normal</li>
        <li class="typePokemon">Combat</li>
        <li class="typePokemon">Vol</li>
        <li class="typePokemon">Poison</li>
        <li class="typePokemon">Sol</li>
        <li class="typePokemon">Roche</li>
        <li class="typePokemon">Insecte</li>
        <li class="typePokemon">Spectre</li>
        <li class="typePokemon">Acier</li>
        <li class="typePokemon">Feu</li>
        <li class="typePokemon">Eau</li>
        <li class="typePokemon">Plante</li>
        <li class="typePokemon">Électrik</li>
        <li class="typePokemon">Psy</li>
        <li class="typePokemon">Glace</li>
        <li class="typePokemon">Dragon</li>
        <li class="typePokemon">Ténèbres</li>
        <li class="typePokemon">Fée</li>
      </ul>

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

    if (isset($_GET['search'])) {
      $pokemon = $bdd->query('SELECT id, name, background, img_pokemon FROM pokemon WHERE name LIKE "%' . $_GET['search'] . '%"');
      $result = $pokemon->fetchAll();

      foreach ($result as $poke) { ?>
        <div class="card" style="<?php echo $poke[2] ?>">
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