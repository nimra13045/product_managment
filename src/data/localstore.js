export const saveProducts = (products) => {
    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
};

export const getProducts = () => {
    const data = localStorage.getItem("products");

    if (!data) {
        return [];
    }

    return JSON.parse(data);
};

export const saveRecord = (record) => {

    const records =
        JSON.parse(localStorage.getItem("records")) || [];

    records.push(record);

    localStorage.setItem(
        "records",
        JSON.stringify(records)
    );
};
export const getRecords = () => {
    return JSON.parse(localStorage.getItem("records")) || [];
};