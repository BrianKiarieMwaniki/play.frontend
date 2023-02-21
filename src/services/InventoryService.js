import axios from "axios";

export async function getAllInventoryItemsByUserIdAsync(userId) {
  try {
    const { data } = await axios.get(
      `${window.INVENTORY_ITEMS_API_URL}?userId=${userId}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
