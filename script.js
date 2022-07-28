const calculationOpts = document.getElementById('calculationOpts');
const { children } = calculationOpts;
const output = document.getElementById('output')
let equation = '';

for(let i = 0;i<children.length;i++) {
    const child = children.item(i);
    child.addEventListener("click", () => {
        let isExplicit = child.id.toUpperCase() == child.id;
        if(isExplicit) {
           
            switch(child.id.toLowerCase()) {
                case "c":
                    equation = '';
                    output.textContent = '';
                break;
                case "del":
                    equation = equation.slice(0,equation.length - 1)
                    output.textContent = equation
                break
            }
            return;
        };
       equation += child.textContent;
       console.log(equation);
       output.textContent = equation
    })
};

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        const evaled = eval(equation);
        try { 
            output.textContent = evaled
        }catch {

        }
    }
});
