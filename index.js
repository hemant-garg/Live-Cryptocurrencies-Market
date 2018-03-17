images = ['1.png','1027.png','52.png','1831.png','2.png','2010.png','1376.png','512.png','1765.png','328.png'];

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
