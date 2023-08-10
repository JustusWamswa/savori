export const submitForm = async (firstName, lastName, email, phone, message, created_at) => {
    let res = await fetch("/api/inquiries", {
        method: "POST",
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            created_at: created_at,
        }),
    })
    res = await res.json();

    return res
}


export const getGeoapify = async (apiKey, lat, lng) => {
    let res = await fetch("/api/geoapify", {
        method: "POST",
        body: JSON.stringify({
            lat: lat,
            lng: lng,
            apiKey: apiKey,
        }),
    })
    res = await res.json()
    return res
}

export const getYelp = async (apiKey, lat, lng) => {
    let res = await fetch("/api/yelp", {
        method: "POST",
        body: JSON.stringify({
            lat: lat,
            lng: lng,
            apiKey: apiKey,
        }),
    })
    res = await res.json()
    return res

}
