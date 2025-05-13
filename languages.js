function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const lang = getRandomInt(4);

if (lang == 0) {
    $(".languages_random").text("Мови");
} else if (lang == 1) {
    $(".languages_random").text("Languages");
} else if (lang == 2) {
    $(".languages_random").text("Języki");
} else if (lang == 3) {
    $(".languages_random").text("Jazyky");
} else {
    console.log("Something went fucking wrong")
}