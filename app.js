// let url = "http://api.weatherapi.com/v1/current.json?key=49372a938fda4449bad82832221012&q={}&aqi=no"
// °
const placeHeading = document.querySelector("#placeHeading");
const weatherImage = document.querySelector("#weatherImage");
const tempratureData = document.querySelector("#tempratureData");
const weatherName = document.querySelector("#weatherName");
const inputbox = document.querySelector("#inputBox");
const searchbutton = document.querySelector("#searchButton");

const search = () => {
	let place = inputbox.value;
	inputbox.value = "";
	let url = `http://api.weatherapi.com/v1/current.json?key=49372a938fda4449bad82832221012&q=${place}&aqi=no`;
	const res = axios.get(url);
	res.then((res) => {
		const data = res.data;
		placeHeading.innerText = data.location.name;
		tempratureData.innerText = `${data.current.temp_c}° C`;
		weatherName.innerText = data.current.condition.text;

		// image part
		let iUrl = data.current.condition.icon;
		let imgUrl = `pics/${iUrl.slice(35)}`;
		imgUrl = imgUrl.slice(49);
		console.log(imgUrl);
		weatherImage.src = imgUrl;
	});
};

searchbutton.addEventListener("click", search);

// 34 indexes to be removed.
