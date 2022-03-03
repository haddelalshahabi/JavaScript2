//et objekt kan inneholde en eller flere  metode(r) eller funksjon (er),men det blir ikke i praktisk bruk
//så kalt objkter i js fodri vi kan kabsjele inn variabel

const kunde1 ={
    navn : "Per Hasan",
    adreese : "Osloveien 54"
};

const kunde2 = {
    navn : "Line Jensen",
    adresse : "Askerveien 82"
};

//legge objektene inn i arrays
let kundene = [];
kundene.push(kunde1);
kundene.push(kunde2);

//skrive de ut i en vanlig for-løkke
for (let i = 0; i < kundene.length; i ++){
    console.log(kundene[i].navn + " "  + kundene[i].adreese);
}

for (let kunde of kundene){
    console.log(kunde.navn + " " + kunde.adreese);
}

