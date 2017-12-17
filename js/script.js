let btn = $('button');
let btnT = 'button';

$('.post-wrapper').on('click', btnT, function () {
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        type: 'GET',
        success: function (json) {
            console.log('Hooray');
            let jl = json.length;
            let numberOfArticles = 0 || $('article').length
            btn.hide();
            if (jl - numberOfArticles <= 5) {
                for (let i = numberOfArticles; i < jl; i++) {
                    $('.posts').append(`<article>
                    <img src="${json[i].image}" alt="some image">
                <div class="container">
                    <header>
                        <h1>${json[i].title}</h1>
                        <div class="date small">${json[i].date}</div>
                        <div class="author small">Author: ${json[i].author}</div>
                    </header>
                    <p>${json[i].text}</p>
                    <footer>
                        <div class="tags small">tags: ${json[i].tag}</div>
                        <div class="views small">Views: ${json[i].views}</div>
                    </footer>
                </div>
                </article>`);
                }
                $('.more').hide();
            } else {
                for (let i = numberOfArticles; i < numberOfArticles + 5; i++) {
                    $('.posts').append(`<article>
                    <img src="${json[i].image}" alt="some image">
                <div class="container">
                    <header>
                        <h1>${json[i].title}</h1>
                        <div class="date small">${json[i].date}</div>
                        <div class="author small">Author: ${json[i].author}</div>
                    </header>
                    <p>${json[i].text}</p>
                    <footer>
                        <div class="tags small">tags: ${json[i].tag}</div>
                        <div class="views small">Views: ${json[i].views}</div>
                    </footer>
                </div>
                </article>`);
                }
                $('.more').show();
            }
        },
        errror: function () {
            console.log('error T_T')
        }
    })
})
