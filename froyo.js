const flavors = prompt("Please enter a list of flavors separated by commas");

const inputFlavors = flavors.split(",");

const froyo={};

for(let i=0; i<inputFlavors.length; i++){
    let flavor = inputFlavors[i].trim();

    if(froyo[flavor]){
        froyo[flavor]++;
    } else{
        froyo[flavor]=1;
    }
}

console.table(froyo);