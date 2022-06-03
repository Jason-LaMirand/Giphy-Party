const $gifPlace = $("#gif-place");
const $gifSearch = $("#gif-input");


$("form").on("submit", async function (name) {
    name.preventDefault();

    let searchGif = $gifSearch.val();
    $gifSearch.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchGif,
            api_key: "7mC02lgA2YLKeVlBcwo1oXADakms9Z1E"
        }
    });
    addImg(response.data);
});


function addImg(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        // const img = document.createElement('img');
        let $newImg = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        // img.src = res.data[0].images.original.url;
        $newCol.append($newImg);
        $gifPlace.append($newCol);
    }
}
//How I added my img to the screen. However I could not get the api to give me back the image URL.
// const form = document.querySelector("#input");
// const input = document.querySelector("#gif-input");
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     searchGif(input.value);
//     input.value = "";
// })
// This was my version of how to remove the img. Basically I wasn't using jQuery and needed to update.
// const remove = document.querySelector("#remove");
// remove.addEventListener("click", function(e) {
//     e.preventDefault();
//     const img = document.querySelector('img')
//     img.remove();
// })

$("#remove").on("click", function () {
    $gifPlace.empty();
});