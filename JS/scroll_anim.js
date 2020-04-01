let home_grid = document.querySelector(".home-grid")
let scroll_last_position = 0;


/*window.addEventListener('scroll', function(e) {
    scroll_last_position = window.scrollY;
    console.log(scroll_last_position)
    console.log("TRUC " + home_grid.scrollTop)
});*/

let waypoint = new Waypoint({
    element: document.querySelector("#line1 .line-container .border-bottom"),
    handler: function() {
        let target = document.querySelector("#line1 .line-container .border-bottom")
        let target2 = document.querySelector("#rubrique1")
        target.classList.add("line-appear")
        target2.classList.add("opaque-rubrique")
    },
    offset: '110%'
})

let waypoint2 = new Waypoint({
    element: document.querySelector("#line2 .line-container .border-bottom"),
    handler: function() {
        let target = document.querySelector("#line2 .line-container .border-bottom")
        let target2 = document.querySelector("#rubrique2")
        target.classList.add("line-appear-reverse")
        target2.classList.add("opaque-rubrique")
    },
    offset: '110%'
})

let waypoint3 = new Waypoint({
    element: document.querySelector("#line3 .line-container .border-bottom"),
    handler: function() {
        let target = document.querySelector("#line3 .line-container .border-bottom")
        let target2 = document.querySelector("#rubrique3")
        target.classList.add("line-appear")
        target2.classList.add("opaque-rubrique")
    },
    offset: '110%'
})

let waypoint4 = new Waypoint({
    element: document.querySelector("#line4 .line-container .border-bottom"),
    handler: function() {
        let target = document.querySelector("#line4 .line-container .border-bottom")
        let target2 = document.querySelector("#rubrique4")
        target.classList.add("line-appear-reverse")
        target2.classList.add("opaque-rubrique")
    },
    offset: '110%'
})

