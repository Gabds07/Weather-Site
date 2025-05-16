import findLatAndLon from "../controllers/LatAndLonController.ts";

async function getLocationData() {
    const response = await fetch(await findLatAndLon())
        .then(response => response.json())
        .then(data => {
            return `${data[0].name}, ${data[0].country}`
        });
    return response;
}

export default getLocationData;
