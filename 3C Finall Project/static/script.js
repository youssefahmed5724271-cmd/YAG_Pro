function edit(id){
const row = document.getElementById(id)
const viewElements = row.querySelectorAll(".view_mode")
const editElements = row.querySelectorAll(".edit_mode")

viewElements.forEach(Element => Element.style.display= 'none' )
editElements.forEach(Element => Element.style.display= 'inline-block' )
}