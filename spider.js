var request = require('request');
var cheerio = require('cheerio');

request('http://www.imdb.com/chart/moviemeter', function(err, res, body){
  if (err) console.log('Erro: ' + err);

  var $ = cheerio.load(body);

  $('.lister-list tr').each(function(){
    var title = $(this).find('.titleColumn a').text().trim();

    console.log('Titulo: ' + title);

  });
});
