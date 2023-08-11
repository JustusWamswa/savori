export default async (req, res) => {
    try {
        const {apiKey, lat, lng } = JSON.parse(req.body)

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        }

        const response = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=52.5200&longitude=13.4050&categories=food&sort_by=best_match&limit=50`, options)
        const data = await response.json()
        res.json({ status: 200, data: data })
    } catch (error) {
        console.log(error)
    }

}