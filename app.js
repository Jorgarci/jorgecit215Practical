const stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

const elements = [];

function Line (data) {
    const that = this;
    this.value= data.value;
    if (data === 3){
        this.message = "is below 10";
    }else if (data === "Jerry"){
        this.message = "is normal";
    } else if (data === " Sandy"){
        this.message = " is normal ";
    } else if (data === 4){
        this.message = " is below 10 ";
    }else if (data === " Pepper"){
        this.message = " is more than 5 characters";
    } else if (data === 15){
        this.message = " the number is exactly 15";
    } else if (data === " Jocastah "){
        this.message = " is more than 5 characters";
    } else if (data === 12) {
        this.message = " is normal ";
    }
    this.ele = document.createElement("div");
    this.color = " The value is " + data + " and " + this.message;
    this.elecolor = document.createElement("div");
    this.elecolor.innerHTML = this.color;
    this.elevalue = document.createElement("div");
    this.ele.addEventListener("click", function () {
        that.changeColor();
    });
    document.body.appendChild(this.ele);
    this.ele.appendChild(this.elecolor);
    this.ele.appendChild(this.elevalue);
}
Line.prototype.changeColor = function () {
    this.elecolor.style.color = "blue";
};
for (let i = 0; i < stringers.length; i++) {
    elements.push(new Line(stringers[i]));
}


