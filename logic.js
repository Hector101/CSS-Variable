var inputs = Array.from(document.querySelectorAll(".container input"));
//handle update function to change the values of the css variables on call
function handleUpdate(){
	var suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
//Listen to Events and call the handleUpdate function on Event trigger
inputs.forEach(function(input){
	return input.addEventListener("change", handleUpdate);
});
inputs.forEach(function(input){
	return input.addEventListener("mouseover", handleUpdate);
});