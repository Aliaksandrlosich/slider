const Photo = ["./img/photo0.jpg",
"./img/photo1.jpg",
"./img/photo2.jpg"];
let num = 0;
let slider = document.getElementById("slider");
function next() {
num++;
console.log(num);
if(num >= Photo.length) {
	num=0;
	console.log(num);
}
	slider.src=Photo[num];
}
function prev() {
num--;
if(num < 0) {
	num = Photo.length-1;
}
	slider.src=Photo[num];

}