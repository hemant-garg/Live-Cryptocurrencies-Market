images = ['https://s2.coinmarketcap.com/static/img/coins/16x16/1.png'
          ,'https://s2.coinmarketcap.com/static/img/coins/16x16/1027.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/52.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/1831.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/2.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/2010.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/1376.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/512.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/1765.png',
          'https://s2.coinmarketcap.com/static/img/coins/16x16/328.png']

function crypto() {

  var datap = document.querySelector('#data');
  datap.innerHTML = '';
  // datap.innerHTML = '';
  var name, rank, price, change, arrow;
    XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
      if(XHR.readyState == 4 && XHR.status == 200)
      {
        var data = JSON.parse(XHR.responseText);
        for (var i = 0; i < data.length; i++) {
          price = data[i]['price_usd'];
          rank = data[i]['rank'];
          change = data[i]['percent_change_24h'];
          name = data[i]['name'];
          img = images[i];
          if (change > 0) {
            arrow = '<img src="up.png" width=15> ';
          }
          else{
            arrow = '<img src="down.png" width=15> ';
          }
          datap.innerHTML += '<tr><th scope="row">' + rank + '</th><td><img src="' + img + '" alt=""> &nbsp; ' + name + '</td><td>$' + price +  '</td><td>' + arrow + change + '%</td>';
        }

        console.log(data);

      }
      else{
        var error = "Something went wrong.. Check after some time";
      }
    }
    XHR.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?limit=10');
    XHR.send();


  }

setTimeout(crypto, 0);
  setInterval(crypto, 60000);
// function update(){
//
//     XHR = new XMLHttpRequest();
//     XHR.onreadystatechange = function(){
//       if(XHR.readyState == 4 && XHR.status == 200)
//       {
//         var data = JSON.parse(XHR.responseText);
//         for (var i = 0; i < data.length; i++) {
//           price = data[i]['price_usd'];
//           rank = data[i]['rank'];
//           change = data[i]['percent_change_24h'];
//           name = data[i]['name'];
//           img = images[i];
//           if (change > 0) {
//             arrow = '<img src="up.png" width=15> ';
//           }
//           else{
//             arrow = '<img src="down.png" width=15> ';
//           }
//           datap.innerHTML += '<tr><th scope="row">' + rank + '</th><td><img src="' + img + '" alt=""> &nbsp; ' + name + '</td><td>$' + price +  '</td><td>' + arrow + change + '%</td>';
//         }
//
//         console.log(data);
//
//       }
//       else{
//         var error = "Something went wrong.. Check after some time";
//       }
//     }
//     XHR.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?limit=10');
//     XHR.send();
//
// }
//   setInterval(update, 300);
