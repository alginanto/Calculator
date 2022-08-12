export class Calculator {
    constructor() {
        let begining = document.getElementById('app-root')
        begining?.insertAdjacentHTML("beforeend", this.baseclass())
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

    private baseclass() {
        return `
    <div class="container">
        <div class="top">
            <input type="text" name="history" id="history" class="history">
            <input type="text" name="results" id="results" class="result">
        </div>
        <div class="bottom keys">
            <input type="button" value="7">
            <input type="button" value="8">
            <input type="button" value="9">
            <input type="button" class="clear"  class="operator" value="Clear">
            <input type="button" value="4">
            <input type="button" value="5">
            <input type="button" value="6">
            <input type="button" class="operator" value="-">
            <input type="button" value="1">
            <input type="button" value="2">
            <input type="button" value="3">
            <input type="button" value="+">
            <input type="button" value="*" style="font-size:18px;">
            <input type="button" value="0">
            <input type="button" value="/">
            <input type="button" class="equalto" value="=">
        </div>
    </div>
        `
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