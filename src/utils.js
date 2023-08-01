export function getData(label) {
    if (window && window.localStorage){
    const data = window && window.localStorage.getItem(label);
    return data
    }
}

export function setData(label, data) {
    if (window && window.localStorage)
        localStorage.setItem(label, JSON.stringify(data));
}