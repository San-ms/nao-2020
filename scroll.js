
$(document).on("scroll", function () {

var pixels = $(document).scrollTop()

$(".fondo").css("left", (100 + (-0.1 * pixels) + "vw"))

// $(".fondo").css("opacity", 0.1 * pixels)
// Si lo multiplico por -1 va mas rapido, debo disminuir el heigth del body

})
