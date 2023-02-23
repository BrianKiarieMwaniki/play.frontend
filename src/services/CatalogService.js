import httpService from "./httpService";

export async function getAllCatalogItemsAsync(){
    try {
        const {data} = await httpService.get(`${window.CATALOG_ITEMS_API_URL}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}