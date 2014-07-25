function customString (string1,string2,string3)
{

  this.string1=string1;
  this.string2=string2;
  this.string3=string3;

}


customString.prototype.newlength1= function() {
  debugger; 
   /*if(this.string2.value!=" ")
   {
    throw("don't enter in string2");
   }
   else if(this.string3.value!=" ")
   {
    throw("don't enter in string3");
   }*/
  // else if(this.string1.value!=" "){
    var len = 0;
  
    while (this.string1[len]) {
        len = len + 1;
    }
    outputStr.value = len;
  //}
}
function length()
{
debugger;
   var string1 = document.getElementById('str4').value;
   var string2 = document.getElementById('str2').value;
   var string3 = document.getElementById('str3').value;
  
    var s = new customString(string1,string2,string3);

    s.newlength1();
}

customString.prototype.newconcat= function() {
    if ((typeof (this.string1) == 'string') && (typeof (this.string2) == 'string')) {
        var outString = this.string1 + this.string2;
        outputStr.value = outString;
        string1 = "";
    }
    else {
        alert("enter string only");
    }
}

function concat()
{
   var string1 = document.getElementById('str1').value;
    var string2 = document.getElementById('str2').value;
    var string3 = document.getElementById('str3').value;
    var s = new customString(string1,string2,string3);
    s.newconcat();
}

customString.prototype.newsubstring= function() {

    var j = 0;
    var str=' ';
   for(var i=this.string2;i<this.string3;i++)
   {
    str=str.concat(this.string1[i]);
   }
    outputStr.value = str;
}

function substring()
{
   var string1 = document.getElementById('str4').value;
    var string2 = parseInt(document.getElementById('strin').value);
    var string3 = parseInt(document.getElementById('strend').value);
    var s = new customString(string1,string2,string3);
    s.newsubstring();
}

customString.prototype.newcharAt= function() {
  debugger;
  outputStr.value = this.string1[this.string2];

  
}
function charAt() {
  
    var string1 = document.getElementById('str4').value;
    var string2 = document.getElementById('str5').value;
     var string3 = document.getElementById('str3').value;
      var s = new customString(string1,string2,string3);
    //outputStr.value = string1[position];
    s.newcharAt()

}
customString.prototype.newlastIndexOf= function() {
  debugger;
////outputStr.value = parseInt(this.string1)-1;
var str=this.string2;
//var len=parseInt(this.string1)-1;
var len=this.string1.length-1;

for(var i=len;i>0;i--)
{
  if(this.string1[i]==str)
  {
    var v=i;
    break;
  }
}

   outputStr.value = v;
}
function lastIndexOf() {
   // var string1 = document.getElementById('str1').value.length;
   var string1 = document.getElementById('str1').value;
      var string2 = document.getElementById('str2').value;
     var string3 = document.getElementById('str3').value;
     var s = new customString(string1,string2,string3);
     s.newlastIndexOf();
}

customString.prototype.newindexOf= function() {
  debugger;
  var i = 0;
    while (this.string1[i] != this.string2) {
        i++;
    }
    outputStr.value = parseInt(i) 

}
function indexOf() {
    var string1 = document.getElementById('str1').value;
    var string2 = document.getElementById('str2').value;
      var string3 = document.getElementById('str3').value;
        var s = new customString(string1,string2,string3);
     s.newindexOf();
   

}

customString.prototype.newreplace= function() {
  debugger;
 var i = 0;
    var str=' ';
   len=this.string1.length;
   
  var s,s1=' ';
  var j=0;
  for(var i=0;i<len;i++)
  {
      if (this.string1[i] ==this.string2)
      {
        s1=s1.concat(this.string3.charAt(j));
      }
      else{
        s1=s1.concat(this.string1.charAt(i));
      }
  }
  outputStr.value = s1; 

}
function replace() {
    var string1 = document.getElementById('str1').value;
    var string2 = document.getElementById('str2').value;
    var string3 = document.getElementById('str3').value;
   
  var s= new customString(string1,string2,string3);
  s.newreplace();

}

