function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        iniciar() {
            this.clickButton();
        },
        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Inálida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Inálida');
                return;
            }
        },
        clearDisplay() {
            this.display.value = ' ';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        display: document.querySelector('.display'),
        clickButton() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.realizaConta();
                    }
                });
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora()
calculadora.iniciar();