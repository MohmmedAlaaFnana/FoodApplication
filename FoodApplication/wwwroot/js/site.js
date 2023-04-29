// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let apiURL = "https://forkify-api.herokuapp.com/api/v2/recipes";
let apikey = "1f73883d-f431-451e-9890-b1cf0e9b7c66";

async function GetRecipes(recipeName,id,isAllShow) {
    let resp = await fetch('${apiURL}?search=${recipeName}&key=${apikey}');
    let result = await resp.json();
    console.log(result);
    let showRecipes = isAllShow ? result.data.recipes : result.data.recipes.slice(1, 7);
    showRecipes(showRecipes, id);
}
function showRecipes(data, id) {
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        type: 'POST',
        url: '/Recipe/GetRecipeCard',
        data: JSON.stringify(recipes),
        success: function (htmlResult) {
            $('#' + id).html(htmlResult);
        },

    });
}