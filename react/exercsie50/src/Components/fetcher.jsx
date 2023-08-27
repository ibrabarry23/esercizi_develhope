export default async function fetcher(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}
