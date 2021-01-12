var customerName = "bob"

function upperCaseCustomerName() {
    return customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = "not bob"
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return bestCustomer
}

const leastFavoriteCustomer = "Willow"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Clark"
    return leastFavoriteCustomer
}