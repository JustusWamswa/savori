
export default async function getGeoapify(req, res) {
    try {
        const { apiKey, lat, lng } = JSON.parse(req.body)
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        }

        const response = await fetch(`https://api.geoapify.com/v2/place-details?lat=${lat}&lon=${lng}&features=radius_500,radius_500.restaurant&apiKey=${apiKey}`)
        const data = await response.json();
        res.json({ status: 200, data: data });
    } catch (e) {
        console.error(e)
    }

}