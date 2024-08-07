function calcularGastos() {
    let impuestos = [];
    let servicios = [];

    // Solicitar impuestos
    do {
        let impuestosCategoriaInput = prompt("Ingrese la categoría del impuesto (por ejemplo, 'METROGAS') o 'cancelar' para salir: ");
        if (impuestosCategoriaInput === null || impuestosCategoriaInput.toLowerCase() === 'cancelar') {
            break;
        }

        let impuestosValorInput = prompt(`Ingrese el monto mensual de ${impuestosCategoriaInput}:`);
        if (impuestosValorInput === null) {
            break;
        }
        let impuestosValor = parseFloat(impuestosValorInput);
        if (isNaN(impuestosValor)) {
            alert("Por favor ingrese un número válido para el monto mensual de impuestos.");
            continue;
        }

        impuestos.push({categoria: impuestosCategoriaInput, valor: impuestosValor});
    } while (true);


    do {
        let serviciosInput = prompt("Ingrese el nombre del servicio (por ejemplo, 'MOVISTAR') o 'cancelar' para salir: ");
        if (serviciosInput === null || serviciosInput.toLowerCase() === 'cancelar') {
            break;
        }

        let serviciosValorInput = prompt(`Ingrese el monto mensual de ${serviciosInput}:`);
        if (serviciosValorInput === null) {
            break;
        }
        let serviciosValor = parseFloat(serviciosValorInput);
        if (isNaN(serviciosValor)) {
            alert("Por favor ingrese un número válido para el monto mensual de servicios.");
            continue;
        }

        servicios.push({nombre: serviciosInput, valor: serviciosValor});
    } while (true);

 // Calcular total de gastos
 let totalImpuestos = 0;
 let totalServicios = 0;
 let resultadoHTML = "<h3>Total de Gastos Mensuales:</h3>";

 for (let i = 0; i < impuestos.length; i++) {
     resultadoHTML += `<p>${impuestos[i].categoria}: $${impuestos[i].valor.toFixed(2)}</p>`;
     totalImpuestos += impuestos[i].valor;
 }

 for (let i = 0; i < servicios.length; i++) {
     resultadoHTML += `<p>${servicios[i].nombre}: $${servicios[i].valor.toFixed(2)}</p>`;
     totalServicios += servicios[i].valor;
 }

 let totalGastos = totalImpuestos + totalServicios;
 resultadoHTML += `<p><strong>Total Impuestos: $${totalImpuestos.toFixed(2)}</strong></p>`;
 resultadoHTML += `<p><strong>Total Servicios: $${totalServicios.toFixed(2)}</strong></p>`;
 resultadoHTML += `<p><strong>Total Gastos: $${totalGastos.toFixed(2)}</strong></p>`;

 document.getElementById("resultado").innerHTML = resultadoHTML;
}