function download(filename, text) {
    let element1 = document.createElement('a');
    element1.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element1.setAttribute('download', filename);

    element1.style.display = 'none';
    document.body.appendChild(element1);

    element1.click();

    document.body.removeChild(element1);
}

let element = document.querySelector("textarea");



document.getElementById("upper-case").addEventListener("click", function() {
    element.value = element.value.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function() {
    element.value = element.value.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function() {
    element.value = element.value.toLowerCase();
    let array = element.value.split(" ");
    for(let i = 0; i < array.length; i++)
    {
        let word = array[i];
        word = word[0].toUpperCase() + word.substring(1);
        array[i] = word;
    }
    element.value = array.join(" ");
});
document.getElementById("sentence-case").addEventListener("click", function() {
    element.value = element.value.toLowerCase();
    let array = element.value.split(". ");
    for(let i = 0; i < array.length; i++)
    {
        let word = array[i];
        word = word[0].toUpperCase() + word.substring(1);
        array[i] = word;
    }
    element.value = array.join(". ");
});

document.getElementById("save-text-file").addEventListener("click", function (){
    download("text.txt", element.value);
});
