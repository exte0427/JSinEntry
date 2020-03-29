let ifif = new Array();
let then = new Array();
Entry.variableContainer.getListByName('정보').getArray()[0].data
for(var i=0;i<Entry.variableContainer.getListByName('정보').getArray().length;i++){
  var djdj=Entry.variableContainer.getListByName('정보').getArray()[i].data;
  var dj=djdj.split(":");
  ifif.push(dj[0]);
  then.push(dj[1]);
}
function when(a){
  for(var i=0;i<ifif.length;i++){
    if(ifif[i]==a){
      return then[i];
    }
  }
  return 0;
}
if(when("start")!=0){
  Entry.variableContainer.getVariableByName(when("start")).setValue(1);
}
setInterval(function() {
  if(when("js")!=0){
    if(Entry.variableContainer.getVariableByName(when("js")).value_){
      eval(Entry.variableContainer.getVariableByName(when("js")).value_);
      Entry.variableContainer.getVariableByName(when("js")).setValue(0);
    }
  }
  if(when("alert")!=0){
    if(Entry.variableContainer.getVariableByName(when("alert")).value_!=0){
      var djd=Entry.variableContainer.getVariableByName(when("alert")).value_.split(":");
      Entry.toast.success(djd[0],djd[1],true);
      Entry.variableContainer.getVariableByName(when("alert")).setValue(0);
    }
  }

},100);
