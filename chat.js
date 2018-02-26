var customer = false;

function send_chat()
{
  var element = document.getElementById("chat_input");
  var input = element.value;
  input = input.replace(/(\r\n|\n|\r)/gm,"");

  if (input != "")
  {
    element.value = "";
    var to_send = document.createElement("P");
    var clear_fix_div = document.createElement("DIV");

    clear_fix_div.className += " clearfix";
    to_send.className += " chat_customer";
    to_send.innerHTML = input;
    var chat_form = document.getElementById("chat_form");
    chat_form.appendChild(clear_fix_div);
    if (!customer)
    {
      var avatar = document.createElement("IMG");
      avatar.src = "Images/chat_avatar_customer.png";
      avatar.className += " chat_avatar_customer";
      chat_form.appendChild(avatar);
    }
    else
    {
      to_send.style.marginRight = "90px";
      to_send.style.marginTop = "-15px";
    }
    chat_form.appendChild(to_send);
    customer = true;
    chat_form.scrollTop = chat_form.scrollHeight;
    respond(input);
  }
  else
  {
    return;
  }
}

function respond(input)
{
  switch(input)
  {
    case 'A':
    case 'a':
      output("So you want to learn more about vehicles? Great! We offer a wide range of vehicles ranging from (SPORT), (SEDAN), (MINIVAN), (SUV), (HYBRID)! They've all been pre-approved by our team of vehicle enthusiasts here at PickUp so you can guarantee it's quality.", false);
      customer = false;
      //output("We only approve vehicles that are 7 years or newer to ensure a quality selection! We bring great cars to great customers!");
      break;
    case 'B':
    case 'b':
      output("So you want to learn more about financing? Great! We offer many different options to make it work for you. Options include leasing, financing, or cash payment. You can select your choice on the final stage of the buying process.", false);
      customer = false;
      break;
    case 'C':
    case 'c':
      output("So you want to learn more about buying a car? Great! We only list cars that are 7 years or newer to ensure quality. Additionally, we provide Carfax reports on request. Financing options are available at the final stage of the buying process.", false);
      customer = false;
      break;
    case 'D':
    case 'd':
      output("So you want to learn more about selling your car? Great! We have an intuitive listing method that makes it easy to get your car listed as soon as possible. After listing your car, we'll send you a unique PIN to your email to give you control over your listing. Once your car is sold, we'll send you another email and you can enter your preferred method of payout!", false);
      customer = false;
      break;
    case 'E':
    case 'e':
      output("It seems I was not able to help you today! Here's our contact page where you can get in email contact with our professional representatives. We promise to respond within 24 hours!", true);
      customer = false;
      break
    default:
      break;
  }
}

function output(to_output, contact)
{
  var chat_form = document.getElementById("chat_form");
  var new_chat = document.createElement("P");
  new_chat.innerHTML = to_output;
  new_chat.className += " chat_sender";

  var clear_fix_div = document.createElement("DIV");

  clear_fix_div.className += " clearfix";
  chat_form.appendChild(clear_fix_div);

  if (customer)
  {
    var avatar = document.createElement("IMG");
    avatar.src = "Images/chat_avatar.png";
    avatar.className += " chat_avatar";
    chat_form.appendChild(avatar);
  }
  else
  {
    new_chat.style.marginLeft = "90px";
    new_chat.style.marginTop = "-15px";
  }

  chat_form.appendChild(new_chat);

  if (contact)
  {
    contact_link = document.createElement("P");
    contact_link.innerHTML = "Contact Us";
    contact_link.className += " chat_sender";
    contact_link.style.marginLeft = "90px";
    contact_link.style.marginTop = "-15px";
    contact_link.style.cursor = "pointer";
    contact_link.style.color = "#FFFF00";
    contact_link.onclick = function()
    {
      window.location.href = "../HTML/index.html";
    }
    var new_clear_fix_div = document.createElement("DIV");

    new_clear_fix_div.className += " clearfix";
    chat_form.appendChild(new_clear_fix_div);
    chat_form.appendChild(contact_link);
  }
  chat_form.scrollTop = chat_form.scrollHeight;

}
