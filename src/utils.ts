
const counter:HTMLParagraphElement | null = document.querySelector('#counter');
let fruitNb: number = 0;
const btn:HTMLButtonElement | null = document.querySelector('#addBtn');
const select:HTMLSelectElement | null= document.querySelector('#fruitSelect')
const list:HTMLUListElement | null = document.querySelector('#fruitList')
let fruitArray: Array<string> = [];
    export function addFruit(){
        if(btn !== null && select !== null && counter !== null && list !== null){
            btn.addEventListener('click', ()=>{
                if(!fruitArray.includes(select.value)){

                    const newFruit:HTMLLIElement = document.createElement("li");
                    newFruit.innerHTML = select.value;
                    list.appendChild(newFruit);

                    fruitNb += 1;
                    counter.innerHTML =  "Total : " + fruitNb + " fruit(s)";

                    let fruit1: Fruit = new Fruit(select.value);
                    console.log(fruit1.describe());

                    fruitArray.push(select.value);
                }
            });
        }

    }

 export class Fruit {
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

     describe(): string{
            return 'Le fruit choisi est : ' + select?.value + ".";
     }

 }
