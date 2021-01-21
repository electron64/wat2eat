var request = new XMLHttpRequest()
const p = document.createElement('p')
const app = document.getElementById('root')


function getRandom() {
    request.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            //console.log(data.meals[0]);

            //image from receipe
            var image = data.meals[0].strMealThumb;

            //new line after point end phrase.
            var res = data.meals[0].strInstructions.replaceAll(".", ".<br>");
            console.log(res);


            document.getElementById("country").innerHTML = '<i class="fa fa-flag" aria-hidden="true"></i> : ' + data.meals[0].strArea;
            document.getElementById("meals").innerHTML = '<i class="fas fa-book"></i> : ' + data.meals[0].strMeal + '<br> <br>';
            document.getElementById("cats").innerHTML = '<i class="fas fa-utensils"></i> : ' + data.meals[0].strCategory;
            document.getElementById("recettes").innerHTML = res;
            document.getElementById("image-thumb").src = data.meals[0].strMealThumb;

            //background style
            document.getElementById("ban").style.background = 'url(' + image + ')';
            document.getElementById("ban").style.backgroundRepeat = "no-repeat";
            document.getElementById("ban").style.backgroundPosition = "center top";
            document.getElementById("ban").style.backgroundSize = "cover";


            //document.body.style.backgroundImage = "url(" + data.meals[0].strMealThumb + ")";
            //document.getElementById('image-thumb').style.backgroundImage = data.meals[0].strMealThumb;

            //document.getElementById('image-thumb').style.background - image = 'imageX.gif';
            //var el = document.getElementById('image-thumb');
            //el.style.backgroundImage = "url(" + data.meals[0].strMealThumb + ")";
            //document.getElementById("image-thumb").style.backgroundImage = "url(" + data.meals[0].strMealThumb + ")";



        } else {
            console.log('error')
        }
    }

    request.send()
}

window.onload = getRandom();