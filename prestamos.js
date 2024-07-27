class Prestamo {
    constructor(monto, intereses, plazo) {
        this.monto = monto;
        this.intereses = intereses;
        this.plazo = plazo;
    }

    calcularCuotaMensual() {
        const interesMensual = this.intereses / 100 / 12;
        const cuota = this.monto * interesMensual / (1 - Math.pow(1 + interesMensual, -this.plazo));
        return cuota.toFixed(2); 
    }

    calcularTotalAPagar() {
        return (this.calcularCuotaMensual() * this.plazo).toFixed(2);
    }
}

function simularPrestamo() {
    const monto = parseFloat(document.getElementById('monto').value);
    const intereses = parseFloat(document.getElementById('intereses').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    const prestamo = new Prestamo(monto, intereses, plazo);

    const cuotaMensual = prestamo.calcularCuotaMensual();
    const totalAPagar = prestamo.calcularTotalAPagar();

    document.getElementById('cuotaMensual').textContent = cuotaMensual;
    document.getElementById('totalAPagar').textContent = totalAPagar;

    document.getElementById('tituloCuotaMensual').textContent = "Cuota mensual de:$ars";
    document.getElementById('tituloTotalAPagar').textContent = "Monto total a devolver:$ars";

    setTimeout(() => {
        if (confirm('Simular nuevo prestamo')) {
            location.reload();
        }
    }, 2000); 
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('simularBtn').addEventListener('click', simularPrestamo);
});