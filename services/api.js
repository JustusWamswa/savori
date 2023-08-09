export const submitForm = async (firstName, lastName, email, phone, message, created_at) => {
    let res = await fetch("http://localhost:3000/api/inquiries", {
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