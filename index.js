$.ajax({
    type: "get",
    url: "https://themealdb.com/api/json/v1/1/filter.php?a=canadian",
    success: function(response) {
        for (var i = 0; i < response.meals.length; i++) {
            var cardItem = `<div class='col-md-3 m-2 shadow p-3 mb-5 bg-white rounded text-center'>
                <p>${response.meals[i].strMeal}</p>
                <img src=${response.meals[i].strMealThumb} alt="meal-image" class="img-fluid">
                <p class="order"> Order ID:${response.meals[i].idMeal}</p>
            </div>`;
            $('#meals--div').append(cardItem);
        }
    },
    error: function(error) {
        console.log(error);
    }
});
