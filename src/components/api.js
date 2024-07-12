export const fetchData = async () => {
    const response = await fetch('URL_TO_FETCH_DATA_FROM');
    const data = await response.json();
    return data;
};