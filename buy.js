function show_listing(src, title, year, color, mileage, price, features)
{
  var main_page = document.getElementById("buy_main_page");
  var to_show = document.getElementById("to_show");
  var to_show_padding = document.getElementById("to_show_padding");

  var to_show_image = document.getElementById("to_show_image");
  var to_show_title = document.getElementById("to_show_title");
  var to_show_year = document.getElementById("to_show_year");
  var to_show_color = document.getElementById("to_show_color");
  var to_show_mileage = document.getElementById("to_show_mileage");
  var to_show_price = document.getElementById("to_show_price");

  main_page.style.display = "none";
  to_show.style.display = "block";
  to_show_padding.style.display = "block";

  to_show_image.src = src;
  to_show_title.innerHTML = title;
  to_show_year.innerHTML = "Year: " + year;
  to_show_color.innerHTML = "Color: " + color;
  to_show_mileage.innerHTML = "Mileage: " + mileage;
  to_show_price.innerHTML = "Asking Price: " + price;
  to_show.scrollTop = 0;
}

function hide_to_show()
{
  var main_page = document.getElementById("buy_main_page");
  var to_show = document.getElementById("to_show");
  var to_show_padding = document.getElementById("to_show_padding");

  main_page.style.display = "block";
  to_show.style.display = "none";
  to_show_padding.style.display = "none";
}

function buy_car()
{
  
}
