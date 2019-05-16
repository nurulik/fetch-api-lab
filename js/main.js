/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem:', error);
}


// Fetch JSON ----------
function fetchJSON() {
  fetch('examples/animals.json') //memanggil dan menyimpan data animals.json
  .then(validateResponse) //untuk mengetahui respon berhasil atau gagal
  .then(readResponseAsJSON) //untuk memebaca respon yang didapat
  .then(logResult) //menampilkan hasil ke console
  .catch(logError); //jika gagal ditampilkan pesan eror di console
}
const jsonButton = document.getElementById('json-btn'); 
//fungsi akan berjalan jika diklik tombol "json-btn"
jsonButton.addEventListener('click', fetchJSON);

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response)	{
		return	response.json();
} 

// Fetch Image ----------
function fetchImage() {
  	fetch('examples/fetching.jpg') //memanggil dan menyimpan data fetching.jpg
		.then(validateResponse) //untuk mengetahui respon berhasil atau gagal
		.then(readResponseAsBlob) //untuk memebaca respon yang didapat
		.then(showImage) //menampilkan gambar pada aplikasi
		.catch(logError); //jika gagal ditampilkan pesan eror di console
}
const imgButton = document.getElementById('img-btn'); 
//fungsi akan berjalan jika diklik tombol "img-btn"
imgButton.addEventListener('click', fetchImage);

function showImage(responseAsBlob)	{
	const container = document.getElementById('img-container');
	const imgElem = document.createElement('img');
	container.appendChild(imgElem);
	const imgUrl = URL.createObjectURL(responseAsBlob);
	imgElem.src = imgUrl;
}

function readResponseAsBlob(response) {
  return response.blob();
}

// Fetch text ----------
function fetchText()	{
		fetch('examples/words.txt') //memanggil dan menyimpan data words.txt
		.then(validateResponse) //untuk mengetahui respon berhasil atau gagal
		.then(readResponseAsText) //untuk memebaca respon yang didapat
		.then(showText) //menampilkan text pada aplikasi
		.catch(logError); //jika gagal ditampilkan pesan eror di console
}
const textButton = document.getElementById('text-btn'); 
//fungsi akan berjalan jika diklik tombol "text-btn"
textButton.addEventListener('click', fetchText);

function showText(responseAsText)	{
		var	message	=	document.getElementById('message');
		message.textContent	=	responseAsText;
}

function readResponseAsText(response) {
  return response.text();
}

//Fetch data ----------
function fetchData() {
  fetch('http://jsonplaceholder.typicode.com/users') //memanggil dan menyimpan data dari url tersebut
  .then(validateResponse) //untuk mengetahui respon berhasil atau gagal
  .then(readResponseAsData) //untuk memebaca respon yang didapat
  .then(logResult) //menampilkan hasil ke console
  .catch(logError); //jika gagal ditampilkan pesan eror di console
}
const dataButton = document.getElementById('data-btn'); 
//fungsi akan berjalan jika diklik tombol "data-btn"
dataButton.addEventListener('click', fetchData);

function readResponseAsData(response)	{
		return	response.json();
} 