const APIKEY = "EuxfdCWtzc2EniqUwhAUA7thov6uLhm0";


function searchArticles(search){
    $.ajax({
        type: "GET",
        url:  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+search+'&api-key='+APIKEY,
        success: function(data){
            console.log(data);
        }

    })


}

searchArticles("music");