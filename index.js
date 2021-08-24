module.exports = function sortCategoriesForInsert (inputJson) {
    let parent = inputJson.filter(val => val.parent_id === null);
    let children = inputJson.filter(val => val.parent_id !== null);
    for(let val of children){
        let index = parent.findIndex(obj => obj.id === val.parent_id);
        parent.splice(index+1, 0, val);
    }
    return parent
}
