const xlsx = require('node-xlsx');
const fs = require('fs');


function readDataXLSX() {
    const data = xlsx.parse(__dirname + '/data/data.xlsx');
    return data[0].data;
}

function listProducts(list) {
    const products = []

    for (let index = 0; index < list.length; index++) {
        const model = String(list[index][0]);
        const version = String(list[index][1]);

        const product =  {
            device: model + " "+ version,
            value: list[index][2]
        };
        
        products.push(product);
    }

    return products;
}

function createJsonFile(list) {

    const jsonFile = {
        products: list
    }
    const json = JSON.stringify(jsonFile);

    fs.writeFile(__dirname + '/data/jsonfile.json', json, function(err) { if (err) throw err; });

}

const elements =  readDataXLSX();

const listProduct = listProducts(elements);

createJsonFile(listProduct);