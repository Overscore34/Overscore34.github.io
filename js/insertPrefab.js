async function getHTML() {
    const prefab = await fetch("prefab.html");

    document.getElementById("body").innerHTML += prefab;
}