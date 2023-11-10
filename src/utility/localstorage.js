const getStoredDonate = () => {
    const storedDonate = localStorage.getItem('donate');
    if (storedDonate) {
        return JSON.parse(storedDonate);
    }
    return [];
}


const saveDonate = id => {
    const getStoredDonates = getStoredDonate();
    const exists = getStoredDonates.find(donateId => donateId === id);
    if (!exists) {
        getStoredDonates.push(id);
        localStorage.setItem('donate', JSON.stringify(getStoredDonates))
    }
}
export { getStoredDonate, saveDonate }