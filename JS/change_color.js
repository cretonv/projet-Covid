let color = ["#23B5D3", '#007EA7', '#003459']
let current_index = 0

let element_to_change = document.querySelectorAll('.color-change')
let element_change = document.querySelectorAll('.element-color-change')

function change_color(){
    current_index ++
    if(current_index === color.length){
        current_index = 0
    }

    element_to_change.forEach(element => element.style.backgroundColor = color[current_index]);

    if(current_index === 2) {
        element_change.forEach(element => element.style.color = color[0])
    } else {
        element_change.forEach(element => element.style.color = color[2])
    }
}

export {change_color}