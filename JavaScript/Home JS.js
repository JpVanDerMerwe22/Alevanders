//table of photos
class Photo {
    constructor(name, source) {
        this.name = name
        this.source = source
    }
}

let photo1 = new Photo("photo1", "./Images/_DSC0903.jpg")
let photo2 = new Photo("photo2", "./Images/_DSC0961.jpg")
let photo3 = new Photo("photo3", "./Images/DSC_0117.jpg")
let photo4 = new Photo("photo4", "./Images/DSC_0101.jpg")
let photo5 = new Photo("photo5", "./Images/DSC_0751(2).jpg")
let photo6 = new Photo("photo6", "./Images/DSC_0181.jpg")
let photo7 = new Photo("photo7", "./Images/DSC_0293.jpg")
let photo8 = new Photo("photo8", "./Images/DSC_0315.jpg")
let photo9 = new Photo("photo9", "./Images/DSC_0645.jpg")
let photo10 = new Photo("photo10", "./Images/DSC_0904.jpg")

//table of photos change function
var photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10]
var block1 = 0
var block2 = 2
var block3 = 5
var block4 = 7

function loadPhotos() {
    block1++
    block2++
    block3++
    block4++
    if (block1 > 2) {
        block1 = 0
    }
    if (block2 > 5) {
        block2 = 3
    }
    if (block3 > 8) {
        block3 = 6
    }
    if (block4 >= 10) {
        block4 = 7
    }
    $("#photo1").fadeOut("slow", function () {
        $(this).attr("src", photos[block1].source).fadeIn("slow")
    })
    $("#photo2").fadeOut("slow", function () {
        $(this).attr("src", photos[block2].source).fadeIn("slow")
    })
    $("#photo3").fadeOut("slow", function () {
        $(this).attr("src", photos[block3].source).fadeIn("slow")
    })
    $("#photo4").fadeOut("slow", function () {
        $(this).attr("src", photos[block4].source).fadeIn("slow")
    })
}

$(document).ready(function () {
    //initialize cart

    //load 1st photos into table
    $("#photo1").attr("src", photos[block1].source)
    $("#photo2").attr("src", photos[block2].source)
    $("#photo3").attr("src", photos[block3].source)
    $("#photo4").attr("src", photos[block4].source)


    //hide bookings
    const booking1 = $("#booking1")
    const booking2 = $("#booking2")
    const booking3 = $("#booking3")
    const booking4 = $("#booking4")
    const booking5 = $("#booking5")
    const booking1Description = $("#booking1Description")
    const booking2Description = $("#booking2Description")
    const booking3Description = $("#booking3Description")
    const booking4Description = $("#booking4Description")
    const booking5Description = $("#booking5Description")

    $("#booking1Description").hide("fast", function () {
        $(booking1).mouseenter(function () {
            $(booking1).css("font-size", "32px")
            $(booking1Description).show("slow").mouseleave(function () {
                $(this).hide("slow")
                $(booking1).css("font-size", "16px")
            })
        })
    })

    $(booking2Description).hide("fast", function () {
        $(booking2).mouseenter(function () {
            $(booking2).css("font-size", "32px")
            $(booking2Description).show("slow").mouseleave(function () {
                $(this).hide("slow")
                $(booking2).css("font-size", "16px")
            })
        })
    })

    $(booking3Description).hide("fast", function () {
        $(booking3).mouseenter(function () {
            $(booking3).css("font-size", "32px")
            $(booking3Description).show("slow").mouseleave(function () {
                $(this).hide("slow")
                $(booking3).css("font-size", "16px")
            })
        })
    })

    $(booking4Description).hide("fast", function () {
        $(booking4).mouseenter(function () {
            $(booking4).css("font-size", "32px")
            $(booking4Description).show("slow").mouseleave(function () {
                $(this).hide("slow")
                $(booking4).css("font-size", "16px")
            })
        })
    })

    $(booking5Description).hide("fast", function () {
        $(booking5).mouseenter(function () {
            $(booking5).css("font-size", "32px")
            $(booking5Description).show("slow").mouseleave(function () {
                $(this).hide("slow")
                $(booking5).css("font-size", "16px")
            })
        })
    })

    //initialize cart
    if (localStorage.getItem("hascoderun") === null) {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("hascoderun", true)
    } else {
        cartItems = JSON.parse(localStorage.getItem("cartItems"))
    }
})



$("#cart1").click(function () {
    let total = 0
    let newItem = new Package(
        document.getElementById("booking1").innerHTML,
        "",
        "",
        "",
        "",
        8000,
    )
    cartItems.push(newItem)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    cartItems.forEach(cartItems => {
        total += parseInt(cartItems.price)
    })
    cartValue = total
    alert("Total price is now R" + cartValue)
})

$("#cart2").click(function () {
    let total = 0
    let newItem = new Package(
        document.getElementById("booking2").innerHTML,
        "",
        "",
        "",
        "",
        2000,
    )
    cartItems.push(newItem)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    cartItems.forEach(cartItems => {
        total += parseInt(cartItems.price)
    })
    cartValue = total
    alert("Total price is now R" + cartValue)
})
$("#cart3").click(function () {
    let total = 0
    let newItem = new Package(
        document.getElementById("booking3").innerHTML,
        "",
        "",
        "",
        "",
        1500,
    )
    cartItems.push(newItem)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    cartItems.forEach(cartItems => {
        total += parseInt(cartItems.price)
    })
    cartValue = total
    alert("Total price is now R" + cartValue)
})
$("#cart4").click(function () {
    let total = 0
    let newItem = new Package(
        document.getElementById("booking4").innerHTML,
        "",
        "",
        "",
        "",
        800,
    )
    cartItems.push(newItem)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    cartItems.forEach(cartItems => {
        total += parseInt(cartItems.price)
    })
    cartValue = total
    alert("Total price is now R" + cartValue)
})
$("#cart5").click(function () {
    let total = 0
    let newItem = new Package(
        document.getElementById("booking5").innerHTML,
        "",
        "",
        "",
        "",
        1000,
    )
    cartItems.push(newItem)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    cartItems.forEach(cartItems => {
        total += parseInt(cartItems.price)
    })
    cartValue = total
    alert("Total price is now R" + cartValue)
})