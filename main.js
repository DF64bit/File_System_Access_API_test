var button = document.querySelector(".openfile");
button.addEventListener("click",
(e)=>{
  var [fileHandle] = window.showOpenFilePicker({ multiple: false});
  var writable = fileHandle.createWritable();
  await writable.write(window.prompt("書き込むの入力しろ"));
  await writable.close();
}); 
