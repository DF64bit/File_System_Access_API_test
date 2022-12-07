var button = document.querySelector(".openfile");
button.addEventListener("click",
(e)=>{
  var [fileHandle] = await window.showOpenFilePicker({ multiple: false});
  var writable = await fileHandle.createWritable();
  writable.write(window.prompt("書き込むの入力しろ"));
  writable.close();
}); 
