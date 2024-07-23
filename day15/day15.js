window.onload = () => {
  const dropzone = document.getElementById("dropzone");
  const input = document.querySelector("input");

  dropzone.addEventListener("click", (e) => {
    input.click();
    input.onchange = () => {
      upload(e.target.files[0]);
    };
  });

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropzone.addEventListener("drop", async (e) => {
    e.preventDefault();
    console.log("File");
    if (e.dataTransfer.items[0].kind !== "file") {
      alert("Error: Not a File");
      throw new Error("Not a File");
    }

    if (e.dataTransfer.items.length > 1) {
      alert("Error: Cannot upload multiple files");
      throw new Error("Cannot upload multiple files");
    }

    const filesArray = [...e.dataTransfer.files];

    const isFile = await new Promise((resolve) => {
      const fr = new FileReader();
      fr.onprogress = (e) => {
        if (e.loaded > 50) {
          fr.abort();
          resolve(true);
        }
      };
      fr.onload = () => {
        resolve(true);
      };
      fr.onerror = () => {
        resolve(false);
      };

      fr.readAsArrayBuffer(e.dataTransfer.files[0]);
    });
    if (!isFile) {
      alert("Error: Not a File");
      throw new Error("Not a File");
    }

    upload(filesArray[0]);
  });
};

function upload(file) {
  const bar = document.getElementById("bar");
  const img = document.querySelector("img");
  const fileName = document.getElementById("fileName");
  const btn = document.getElementById("btn");

  bar.style.animation = "bar 2s linear forwards";
  img.style.display = "none";
  fileName.innerText = "Uploading...";
  btn.innerText = "Uploading...";
  setTimeout(() => {
    fileName.style.display = "none";
    img.src = "img/check-mark.png";
    img.style.display = "block";
    btn.innerText = "Done";
  }, 2000);
}
