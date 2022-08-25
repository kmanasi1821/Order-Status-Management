/*
			Order placed 
			After 2s -> Chef received the order and started preparing
			After 10s -> Pizza Sauce added
			After 5s -> First layer of cheeze added
			After 12s -> Toppings added
			After 5s -> Second layer of cheeze added
			After 15s -> Pizza baked!
			After 8s -> Oregano added and packed
			After 2s -> Package received at counter
			The order is ready and handed over to the Zomato delivery guy!
*/
let orderStatus = document.getElementsByClassName('order-status-btn')
const executOrder = () => {
    let orderId = document.getElementById('order-id').value
    document.getElementById('order-id').value = ''
    document.getElementById('order-status-id').innerHTML = `Order status for Id : ${orderId}` 

    orderStatus[0].classList.remove('btn-light')
    orderStatus[0].classList.add('btn-success')
			chefReceived()
				.then(pizzaSauceAdded)
				.then(firstLayerOfCheezeAdded)
				.then(toppingsAdded)
				.then(secondLayerOfCheezeAdded)
				.then(pizzaBaked)
				.then(oreganoAddedAndPacked)
				.then(packageReceivedAtCounter)
				.then(() => {
                    orderStatus[9].classList.remove('btn-light')
                    orderStatus[9].classList.add('btn-success')
                })
				.catch((err) => console.log(err))
}
const chefReceived = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[1].classList.remove('btn-light')
            orderStatus[1].classList.add('btn-success')
            resolve()
        }, 2000)
    })
}

const pizzaSauceAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[2].classList.remove('btn-light')
            orderStatus[2].classList.add('btn-success')
            resolve()
        }, 10000)
    })
}

const firstLayerOfCheezeAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[3].classList.remove('btn-light')
            orderStatus[3].classList.add('btn-success')
            resolve()
        }, 5000)
    })
}

const toppingsAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[4].classList.remove('btn-light')
            orderStatus[4].classList.add('btn-success')
            resolve()
        }, 12000)
    })
}

const secondLayerOfCheezeAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[5].classList.remove('btn-light')
            orderStatus[5].classList.add('btn-success')
            resolve()
        }, 5000)
    })
}

const pizzaBaked = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[6].classList.remove('btn-light')
            orderStatus[6].classList.add('btn-success')
            resolve()
        }, 15000)
    })
}

const oreganoAddedAndPacked = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[7].classList.remove('btn-light')
            orderStatus[7].classList.add('btn-success')
            resolve()
        }, 8000)
    })
}

const packageReceivedAtCounter = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[8].classList.remove('btn-light')
            orderStatus[8].classList.add('btn-success')
            resolve()
        }, 2000)
    })
}