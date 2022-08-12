export class calculationLogic {


    constructor() {

        const keys = document.querySelector('.keys');
        keys?.addEventListener('click', (e) => {
            let target = e.target as HTMLInputElement
            if (target.value != undefined) {


                if (target.value == "+") {
                    this.dislpay(target.value)
                    this.Calculate()
                } else if (target.value == "-") {
                    this.dislpay(target.value)
                    this.Calculate()
                }
                else if (target.value == "Clear") {
                    this.dislpay(target.value)
                    this.clearScreen()
                }
                else if (target.value == "*") {
                    this.dislpay(target.value)
                    this.Calculate()
                }
                else if (target.value == "/") {
                    this.dislpay(target.value)
                    this.Calculate()
                }
                else if (target.value == "=") {
                    this.Calculate()
                }
                else {
                    this.dislpay(target.value)
                }
            }
        })

    }

    private dislpay(value: any) {
        const input = document.getElementById('results') as HTMLInputElement
        input.value += value

    }
    private clearScreen() {
        const input = document.getElementById('results') as HTMLInputElement
        input.value = ""
        const History = document.getElementById('history') as HTMLInputElement
        History.value = ""

    }

    private Calculate() {
        const input = document.getElementById('results') as HTMLInputElement
        let Data = input.value
        let result = eval(Data)
        input.value = result

    }
}