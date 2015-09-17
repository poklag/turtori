Meteor._newid = function(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_/=";

  for(var i = 0; i < 8; i++ ){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}