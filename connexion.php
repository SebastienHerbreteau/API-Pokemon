<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Créer ton pokedeck !">
    <link rel="stylesheet" href="style/inscription.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=Denk+One&display=swap" rel="stylesheet" />
    <title>Pokedeck</title>
</head>

<body>
    <header>
        <p class="avertissement">Site en construction - Non-responsive pour le moment, optimisé pour une résolution de 1920*1080</p>
        <div class=" connect">
            <div class="container_avatar">
                <img src="assets/avatar.png" class="avatar">
            </div>
            <span class="user"></span>
        </div>
        <img src="assets/off.webp" class="onoff" alt="bouton connexion">
    </header>
    <main>
        <form action="">
            <p>Quel est ton prénom ?</p><input class="input" name="nom" type="text">
            <p>Quel identifiant souhaites-tu avoir ?</p><input class="input" name="pseudo" type="text">
            <p>Quel mot de passe veux-tu ?</p><input class="input" name="mdp" type="text">
        </form>
    </main>


    <script src="app.js"></script>


</body>

</html>