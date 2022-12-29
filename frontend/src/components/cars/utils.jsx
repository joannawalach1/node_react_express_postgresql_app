import "isomorphic-fetch"

export function addName(car_name) {
    return fetch("http://localhost:4000/cars", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({car_name})
    })
}