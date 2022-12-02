window.onload = function() {
    // store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === 'file') {
    window.alert("ああ、これはファイルですね。fcbd");
  } else if (fileHandle.kind === 'directory') {
    window.alert("ああ、これはディレクトリですね。fcbd");
  }

}
}
