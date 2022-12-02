var button = document.querySelector(".openfile");
button.addEventListener("click",
(e)=>{
  var [fileHandle] = await window.showOpenFilePicker()
  var writable = await fileHandle.createWritable();
  await writable.write(window.prompt("書き込むの入力しろ"));
  await writable.close();
}); 
