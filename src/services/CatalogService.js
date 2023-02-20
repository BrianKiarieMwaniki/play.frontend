import axios  from "axios";

export async function getAllCatalogItems(){
    try {
        const {data} = await axios.get(`${window.CATALOG_ITEMS_API_URL}`);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}