const fs = require('fs');
const SimpleROC = require(__dirname + '/SimpleROC');

for (let i = 1; i <= 5; i++) {
    let datas = fs.readFileSync(__dirname + `/files/origPasswordSecurity.csv`, 'utf8');
    datas = datas.split('\n');

    let zxcvbn = [];
    let luds = [];
    let leven = [];
    let labels = [];
    datas.map((data, index) => {
        if (index == 0) {
            return;
        }
        zxcvbn.push(parseInt(data.split(',')[1]));
        luds.push(parseInt(data.split(',')[2]));
        leven.push(parseInt(data.split(',')[3]));
        labels.push(parseInt(data.split(',')[4]));
    });

    let zxcvbnTemp = SimpleROC.simpleROC(zxcvbn, labels, 100);
    let ludsTemp = SimpleROC.simpleROC(luds, labels, 100);
    let levenTemp = SimpleROC.simpleROC(leven, labels, 100);

    console.log(zxcvbnTemp[2]);
    console.log(ludsTemp[2]);
    console.log(levenTemp[2]);

    fs.writeFileSync(__dirname + `/GraphData/zxcvbnGraphDataX.txt`, ``, 'utf8');
    fs.writeFileSync(__dirname + `/GraphData/zxcvbnGraphDatay.txt`, ``, 'utf8');
    for (let j = 0; j < zxcvbnTemp[0].length; j++) {
        fs.appendFileSync(__dirname + `/GraphData/zxcvbnGraphDataX.txt`, `${zxcvbnTemp[0][j]}`, 'utf8');
        fs.appendFileSync(__dirname + `/GraphData/zxcvbnGraphDataY.txt`, `${zxcvbnTemp[1][j]}`, 'utf8');

        if (zxcvbnTemp[0].length - 1 != j) {
            fs.appendFileSync(__dirname + `/GraphData/zxcvbnGraphDataX.txt`, `,`, 'utf8');
            fs.appendFileSync(__dirname + `/GraphData/zxcvbnGraphDataY.txt`, `,`, 'utf8');
        }
    }

    fs.writeFileSync(__dirname + `/GraphData/ludsGraphDataX.txt`, ``, 'utf8');
    fs.writeFileSync(__dirname + `/GraphData/ludsGraphDatay.txt`, ``, 'utf8');
    for (let j = 0; j < ludsTemp[0].length; j++) {
        fs.appendFileSync(__dirname + `/GraphData/ludsGraphDataX.txt`, `${ludsTemp[0][j]}`, 'utf8');
        fs.appendFileSync(__dirname + `/GraphData/ludsGraphDataY.txt`, `${ludsTemp[1][j]}`, 'utf8');

        if (ludsTemp[0].length - 1 != j) {
            fs.appendFileSync(__dirname + `/GraphData/ludsGraphDataX.txt`, `,`, 'utf8');
            fs.appendFileSync(__dirname + `/GraphData/ludsGraphDataY.txt`, `,`, 'utf8');
        }
    }

    fs.writeFileSync(__dirname + `/GraphData/levenGraphDataX.txt`, ``, 'utf8');
    fs.writeFileSync(__dirname + `/GraphData/levenGraphDatay.txt`, ``, 'utf8');
    for (let j = 0; j < ludsTemp[0].length; j++) {
        fs.appendFileSync(__dirname + `/GraphData/levenGraphDataX.txt`, `${levenTemp[0][j]}`, 'utf8');
        fs.appendFileSync(__dirname + `/GraphData/levenGraphDataY.txt`, `${levenTemp[1][j]}`, 'utf8');

        if (ludsTemp[0].length - 1 != j) {
            fs.appendFileSync(__dirname + `/GraphData/levenGraphDataX.txt`, `,`, 'utf8');
            fs.appendFileSync(__dirname + `/GraphData/levenGraphDataY.txt`, `,`, 'utf8');
        }
    }
}
