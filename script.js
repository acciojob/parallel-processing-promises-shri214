//your JS code here. If required.

const images = [
  'https://picsum.photos/id/237/200/300' ,
  'https://picsum.photos/id/238/200/300' ,
  'https://picsum.photos/id/239/200/300' 
];
function downloadImages() {
	const promise=images.map(url => {
		return new Promise((res, rej) => {
			const img=new Image();
			img.onload=() => res(img);
			img.onerror=()=> rej(`Failed to load image's URL: ${url}`);
			img.src=url;
		});
   });
 Promise.all(promise).then(images => {
	 const output = document.getElementById("output");
	 images.forEach(image =>{
		 output.appendChild(image);
	 });
 }).catch(error => {
	 console.log(error);
 })
};

document.getElementById("download-images-button").addEventListener("click", downloadImages)