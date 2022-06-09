// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
cats;

function destructivelyAppendCat() {
    cats.push("Ralph");
}
cats;
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat() {
    const copyOfCats = [...cats, "Broom"];
     return copyOfCats;
}
function prependCat(){
    const copyOfCats2 = ["Arnold", ...cats]
    return copyOfCats2;
}
function removeLastCat() {
    const copyOfCats3 = cats.slice(0, -1);
    return copyOfCats3;
}
function removeFirstCat(){
    const copyOfCats4 = cats.slice(1);
    return copyOfCats4;
}


