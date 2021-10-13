function deleteByElementId(id) {
    const target = document.querySelector(id);
    target.remove();
}

deleteByElementId("main");

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";



