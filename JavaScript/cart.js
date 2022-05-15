var cartItems = [] // Declare empty var for items + constructor
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



$(document).ready(function () {
    //navmanu dropdown NB this dropdown is  home page, cart and catalogue
    const items = $("#navlinks")
    items.hide("fast")
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

    $("#checkOut").hide("fast")
})
//Cart section


//Initialize cart
// values are global to access for discount coupon ( returns NaN after updating input fields )
let vatInteger = 0
let totalInteger = 0

function cartPage() {
    let total = 0
    let totalPrice = document.getElementById("cartTotal")
    let vat = document.getElementById("vat")
    if (localStorage.getItem("hascoderun") === null) {
        document.getElementById("cartDisplay").innerText = "Your cart seems to be empty, head to bookings under the logo to check out our packages"
    } else {
        cartItems = JSON.parse(localStorage.getItem("cartItems"))
        cartItems.forEach(cartItems => {
            const itemList = document.getElementById("cartDisplay")
            const addItem = document.createElement("button")
            let i = 0
            addItem.value = i
            addItem.innerHTML = cartItems.name + ", R" + cartItems.price
            itemList.appendChild(addItem)
            total += parseInt(cartItems.price)
            i + 1
        });
        totalPrice.value = "R" + total
        let vatAmount = total * 14 / 100
        vat.value = "R" + vatAmount + " VAT"
        // set global values for use in discount and delivery forms
        totalInteger = total
        vatInteger = vatAmount
    }
    let checkout = document.createElement("button")
    checkout.innerHTML = "Check Out"
    checkout.setAttribute("style", "float:right;")
    document.getElementById("cartDisplay").appendChild(checkout).addEventListener("click", function () {
        $("#checkOut").show("slow")
        $("#address").hide("fast")
    })
}


//apply discount
$("#discountCoupon").click(function () {
    $("#discountForm").show("slow")
})

$("#submit").click(function () {
    let totalPrice = document.getElementById("cartTotal")
    let couponNumber = document.getElementById("couponNumber").value
    if (couponNumber == 1234) {
        let discount = totalInteger * 10 / 100
        let discounted = totalInteger - discount
        totalPrice.value = "R" + discounted
    } else {
        alert("Invalid coupon number")
    }
})

$("#close").click(function () {
    $("#discountForm").fadeOut("slow")
})

class Order {
    constructor(nameSurname, price, address, refNumber) {
        this.nameSurname = nameSurname
        this.price = price
        this.address = address
        this.refNumber = refNumber
    }
}



//delivery forms
$("#delivery").change(function () {
    let currentOption = document.getElementById("delivery").value;
    if (currentOption <= 0) {
        $("#address").hide("slow")
    } else {
        $("#address").show("slow")
        let checkOutValue = parseInt(totalInteger) + parseInt(currentOption)
        document.getElementById("cartTotal").value = "R" + checkOutValue
    }
})



$("#checkOutFinal").click(function () {
    orders = []
    let customerName = document.getElementById("yourName").value
    let customerSurname = document.getElementById("surname").value
    let reference = ""
    let checkOutPrice = document.getElementById("cartTotal").value
    let address = document.getElementById("address").value
    let refNumber = cartItems.forEach(cartItems => {
        let names = cartItems.name
        reference += names.charAt(0)
    })
    reference += customerName.charAt(0) + customerSurname.charAt(0)
    let newOrder = new Order(
        document.getElementById("yourName").value += document.getElementById("surname").value,
        checkOutPrice,
        address,
        reference
    )
    orders.push(newOrder)
    localStorage.setItem("Orders", JSON.stringify(orders))
    alert("success, your Reference number is " + reference)
})