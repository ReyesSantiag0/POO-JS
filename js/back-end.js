class Empleado {
    constructor(Nombre, Apellido, Genero, FechaNac, FechaIngr, Foto) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Genero = Genero;
        this.FechaNac = FechaNac;
        this.FechaIngr = FechaIngr;
        this.Foto = Foto;
    }
    visualizarInfoEmp() {
        return (
            "Nombre: " +
            this.Nombre +
            "\n" +
            "Apellido" +
            this.Apellido +
            "\n" +
            "Genero" +
            this.Genero +
            "\n"
        );
        "FechaNac" + this.FechaNac + "\n";
        "FechaIngr" + this.FechaIngr + "\n";
        "Foto" + this.Foto + "\n";
    }
    actualizarSalario() {
        let Salario = parseFloat(document.getElementById("salario").value);
        return Salario;
    }
    
    calcularAntig() {


    }
    calcularPrestac() {


    }
}
// function alerta(){
//     alert('H
function calcularEdad() {

    let Calcular_Edad = document.getElementById("fechaNac");
    alert(Calcular_Edad);
}
