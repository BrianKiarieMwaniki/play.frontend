import axios  from "axios";

export async function getAllCatalogItemsAsync(){
    try {
        const {data} = await axios.get(`${window.CATALOG_ITEMS_API_URL}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}