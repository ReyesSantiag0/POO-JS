class Empleado {
    constructor(Nombre, Apellido, Genero, FechaNac, FechaIngr, Foto) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Genero = Genero;
        this.FechaNac = FechaNac;
        this.FechaIngr = FechaIngr;
        this.Foto = Foto;
    }
    toStringNombre(){
        return this.Nombre;
    }
    toStringApellido(){
        return this.Apellido;
    }
    toStringGenero(){
        return this.Genero;
    }
    
    visualizarInfoEmp(nom) {
        this.Nombre
        // return (
        //     "Nombre: " +
        //     this.Nombre +
        //     "\n" +
        //     "Apellido" +
        //     this.Apellido +
        //     "\n" +
        //     "Genero" +
        //     this.Genero +
        //     "\n"
        // );
        // "FechaNac" + this.FechaNac + "\n";
        // "FechaIngr" + this.FechaIngr + "\n";
        // "Foto" + this.Foto + "\n";
    }
    actualizarSalario() {
        let Salario = parseFloat(document.getElementById("salario").value);
        return Salario;
    }
    calcularEdad() {

        let Calcular_Edad = document.getElementById("fechaNac").value;
        let anio = parseInt(Calcular_Edad.substr(6, 4));
        let eda = 2022-anio;
    }
    calcularAntig() {
        let Fecha_Ingreso = document.getElementById("fIngreso").value;
        let ingreso = parseInt(Fecha_Ingreso.substr(6, 4));
        let antiguedad = 2022-ingreso;
        return antiguedad;
    }
    calcularPrestac() {

        let anti = new this.calcularAntig();
        let sal = new this.actualizarSalario();
        let prestaciones = (anti*sal)/12;
        return prestaciones;
    }
}
// function alerta(){
//     alert('H
// function calcularEdad() {


//     alert(calcularPrestac());

// }
let verinfo = new Empleado();

function mostrar_datos(){
    let nombreN = document.getElementById("nombre").value;
    
    //let apellido = document.getElementById("apellido").value;
    let nom = verinfo.toStringNombre(nombreN);
    alert(nom);
    //document.getElementById('visnombre').innerHTML = nom;
}

class seguridad_social{

   
    constructor(salud,pension,arl,total){
        this.salud = 0.125;
        this.pension = 0.16;
        this.arl = arl;
        this.total =total;
        
    }

    calcularSalud(){
        var obj = new Empleado();
        let salar = obj.actualizarSalario();
        let resS = this.salud*salar;
        return resS;
    }
    calcularPension(){
        var obj = new Empleado();
        let pens = obj.actualizarSalario();
        let resP = this.pension*pens;
        return resP;
    }
    calcularArl(){
        var obj = new Empleado();
        this.arl = parseFloat(document.getElementById("nivelR").value);
        let SalArl = obj.actualizarSalario();
        let resA = this.arl*SalArl;
        return resA;
    }
    totalPago(){
        this.total = this.calcularSalud()+this.calcularPension() + this.calcularArl();
        return this.total;
    }

    
}

let resul = new seguridad_social();
function mos(){

    document.getElementById('salud').innerHTML = resul.calcularSalud();
    document.getElementById('pension').innerHTML = resul.calcularPension();
    document.getElementById('arl').innerHTML = resul.calcularArl();
    document.getElementById('total').innerHTML = resul.totalPago();
}