<?php

$bdd = new PDO('mysql:host=localhost;dbname=pokemon;', 'root', '');
$allpokemon = $bdd->query('SELECT * FROM pokemon ORDER BY id ASC LIMIT 50');
if (isset($_GET['s']) and !empty($_GET['s'])) {
    $recherche = htmlspecialchars($_GET['s']);
    $allpokemon = $bdd->query('SELECT name FROM pokemon WHERE name LIKE "%' . $recherche . '%" ');
}
