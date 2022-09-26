arr = ["Ahmet", "Mehmet", "Hasan", "Hüseyin", "Ali", "Veli"];

Array.prototype.includeCi = function (name) {
  result=this.map(item => item.toLowerCase()).includes(name.toLowerCase());
  console.log(result)
};

arr.includeCi("ahmet");
