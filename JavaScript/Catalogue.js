$(document).ready(function () {
    //navmanu dropdown
    const items = $("#navlinks")
    $("#Logo").mouseenter(function () {
        $(items).slideDown("slow").animate({
            fontSize: "18px"
        })
    })

    $("#navlinks").mouseleave(function () {
        $(items).animate({
            fontSize: "10px"
        }).slideUp("slow")
    })
})




//table varibles
const clk1 = $("#click1")
const clk2 = $("#click2")
const clk3 = $("#click3")
const clk4 = $("#click4")
const clk5 = $("#click5")
const clk6 = $("#click6")
const clk1Extra = $("#click1Extra")
const clk2Extra = $("#click2Extra")
const clk3Extra = $("#click3Extra")
const clk4Extra = $("#click4Extra")
const clk5Extra = $("#click5Extra")
const clk6Extra = $("#click6Extra")
const dialog = $("#displayOption")
const clear = $(".extraInfo")
//cart variables
const checkAll = document.getElementById("checkAll")
const check1 = document.getElementById("check1")
const check2 = document.getElementById("check2")
const check3 = document.getElementById("check3")
const check1Price = parseInt(check1.getAttribute("value"))
const check2Price = parseInt(check2.getAttribute("value"))
const check3Price = parseInt(check3.getAttribute("value"))
const extraPrice = document.getElementById("extraValue")
const total = document.getElementById("totalValue")

// all menu functions nested with each click event (start here) 
$(clk1).click(function () {
    clear.remove()
    dialog.fadeIn("slow").css("display", "grid")
    clk1Extra.appendTo(dialog).fadeIn("slow")
    check1.checked = true
    check2.checked = true
    check3.checked = true
    checkAll.checked = true
    extraPrice.setAttribute("value", check1Price + check2Price + check3Price)
    total.setAttribute("value", 9600 + parseInt(extraPrice.getAttribute("value")))
})

$(clk2).click(function () {
    clear.remove()
    dialog.fadeIn("slow").css("display", "grid")
    clk2Extra.appendTo(dialog).fadeIn("slow")
    total.setAttribute("value", 1500)
    check1.checked = false
    check2.checked = false
    check3.checked = false
    checkAll.checked = false
    extraPrice.setAttribute("value", 0)
})

$(clk3).click(function () {
    clear.remove()
    dialog.fadeIn("slow").css("display", "grid")
    clk3Extra.appendTo(dialog).fadeIn("slow")
    total.setAttribute("value", 1800)
    check1.checked = false
    check2.checked = false
    check3.checked = false
    checkAll.checked = false
    extraPrice.setAttribute("value", 0)
})

$(clk4).click(function () {
    clear.remove()
    dialog.fadeIn("slow").css("display", "grid")
    clk4Extra.appendTo(dialog).fadeIn("slow")
    total.setAttribute("value", 850)
    check1.checked = false
    check2.checked = false
    check3.checked = false
    checkAll.checked = false
    extraPrice.setAttribute("value", 0)
})

$(clk5).click(function () {
    clear.remove()
    dialog.fadeIn("slow").css("display", "grid")
    clk5Extra.appendTo(dialog).fadeIn("slow")
    total.setAttribute("value", 300)
    check1.checked = false
    check2.checked = false
    check3.checked = false
    checkAll.checked = false
    extraPrice.setAttribute("value", 0)
})

$(clk6).click(function () {
    clear.remove()
    dialog.fadeIn("slow").css("display", "grid")
    clk6Extra.appendTo(dialog).fadeIn("slow")
    total.setAttribute("value", 950)
    check1.checked = false
    check2.checked = false
    check3.checked = false
    checkAll.checked = false
    extraPrice.setAttribute("value", 0)
})
// all menu functions nested with each click event (END here)






//cart section START Here

checkAll.addEventListener("click", function () {
    let current = parseInt(extraPrice.getAttribute("value"))
    if (checkAll.checked) {
        extraPrice.setAttribute("value", check1Price + check2Price + check3Price)
        check1.checked = true
        check2.checked = true
        check3.checked = true
    } else if (check1.checked || check2.checked || check3.checked) {
        check1.checked = false
        check2.checked = false
        check3.checked = false
        extraPrice.setAttribute("value", current - check1Price - check2Price - check3Price)
    }
    let totalValue = parseInt(total.getAttribute("value")) + parseInt(extraPrice.getAttribute("value"))
    total.setAttribute("value", totalValue - current)

    //console.log(totalValue)

})





check1.addEventListener("click", function () {
    let current = parseInt(extraPrice.getAttribute("value"))
    if (check1.checked) {
        let newPrice = current + check1Price
        extraPrice.setAttribute("value", newPrice)
        if (check2.checked && check3.checked) {
            checkAll.checked = true
        }
    } else {
        let newPrice = current - check1Price
        //console.log(newPrice)
        extraPrice.setAttribute("value", newPrice)
        if (check2.checked && check3.checked) {
            checkAll.checked = false
        }
    }
    let totalValue = parseInt(total.getAttribute("value")) + parseInt(extraPrice.getAttribute("value"))
    total.setAttribute("value", totalValue - current)
})

check2.addEventListener("click", function () {
    let current = parseInt(extraPrice.getAttribute("value"))
    let totalPrice = parseInt(total.getAttribute("value"))
    //console.log(totalPrice)
    if (check2.checked) {
        let newPrice = current + check2Price
        extraPrice.setAttribute("value", newPrice)
        if (check1.checked && check3.checked) {
            checkAll.checked = true
        }
    } else {
        let newPrice = current - check2Price
        extraPrice.setAttribute("value", newPrice)
        if (check1.checked && check3.checked) {
            checkAll.checked = false
        }
        let newTotal = current + newPrice
    }
    let totalValue = parseInt(total.getAttribute("value")) + parseInt(extraPrice.getAttribute("value"))
    total.setAttribute("value", totalValue - current)
})

check3.addEventListener("click", function () {
    let current = parseInt(extraPrice.getAttribute("value"))
    if (check3.checked) {
        let newPrice = current + check3Price
        extraPrice.setAttribute("value", newPrice)
        if (check1.checked && check2.checked) {
            checkAll.checked = true
        }
    } else {
        let newPrice = current - check3Price
        //console.log(newPrice)
        extraPrice.setAttribute("value", newPrice)
        if (check1.checked && check2.checked) {
            checkAll.checked = false
        }
    }
    let totalValue = parseInt(total.getAttribute("value")) + parseInt(extraPrice.getAttribute("value"))
    total.setAttribute("value", totalValue - current)
})

$("#closeExtra").click(function () {
    $("#displayOption").fadeOut("slow")
    total.setAttribute("value", 0)
    checkAll.setAttribute("value", 0)
    checkAll.checked = false
    check1.checked = false
    check2.checked = false
    check3.checked = false

})





let cartValue = 0
$("#addCart").click(function () {
    var cartItems = [] // Declare empty var for items + constructor
    let total = 0 //declare total for alerting cart price
class Package {
    constructor(name, extra1, extra2, extra3, dateBooked, price) {
        this.name = name
        this.extra1 = extra1
        this.extra2 = extra2 //(checkboxes) used value attributes for prices on boolean of .checked
        this.extra3 = extra3
        this.date = dateBooked
        this.price = price
    }
}
    if (localStorage.getItem("hascoderun") === null) {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("hascoderun", true)
    } else {
        cartItems = JSON.parse(localStorage.getItem("cartItems"))
    }
    let newItem = new Package(
        document.getElementById("displayOption").querySelector("p").getAttribute("name"),
        document.getElementById("check1").checked,
        document.getElementById("check2").checked,
        document.getElementById("check3").checked,
        document.getElementById("dateBooked").value,
        document.getElementById("totalValue").value,
    )
    cartItems.push(newItem)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    clear.remove()
    dialog.fadeOut("slow")
    cartItems.forEach(cartItems => {
        total += parseInt(cartItems.price)
    })
   cartValue = total
   alert("Total price is now R" + cartValue)
})
//cart section END here







//book a call menu
$("#callUs").click(function () {
    $("#displayOption").fadeOut("slow")
    total.setAttribute("value", 0)
    checkAll.setAttribute("value", 0)
    checkAll.checked = false
    check1.checked = false
    check2.checked = false
    check3.checked = false
    $("#booking").toggle("slow")
})

$("#close").click(function () {
    $("#booking").hide("slow")
})