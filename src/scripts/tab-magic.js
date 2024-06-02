
let dockTitle = document.title;
let value = 0

    window.addEventListener("blur", () =>{
    document.title = "Возвращайся 😀";
    })
    window.addEventListener("focus", ()=>{
    document.title = dockTitle;
})
