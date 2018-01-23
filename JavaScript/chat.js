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
      avatar.src = "../CSS/Images/chat_avatar_customer.png";
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
    var chat_form = document.getElementById("chat_form");
    chat_form.scrollTop = chat_form.scrollHeight;
  }
  else
  {
    return;
  }
}
