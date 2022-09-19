class Empleado {
    constructor(Nombre, Apellido, Genero, FechaNac, FechaIngr, Foto, Salario) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Genero = Genero;
        this.FechaNac = FechaNac;
        this.FechaIngr = FechaIngr;
        this.Foto = Foto;
        this.Salario = Salario;
    }
    toStringNombre() {
        return (this.Nombre = document.getElementById("nombre").value);
    }
    toStringApellido() {
        return (this.Apellido = document.getElementById("apellido").value);
    }
    toStringGenero() {
        return (this.Genero = document.querySelector(
            'input[name="gen"]:checked'
        ).value);
    }
    toStringFechaNac() {
        return (this.FechaNac = document.getElementById("fechaNac").value);
    }
    toStringFechaIng() {
        return (this.FechaIngr = document.getElementById("fIngreso").value);
    }
    toStringSalario() {
        return (this.Salario = parseFloat(document.getElementById("salario").value));
    }
    toStringFoto() {
        return (this.Foto = document.getElementById("imagen").files[0]);
    }

  

    calcularEdad() {
        let Calcular_Edad = document.getElementById("fechaNac").value;
        let anio = parseInt(Calcular_Edad.substr(6, 4));
        let eda = 2022 - anio;
    }
    calcularAntig() {
        let Fecha_Ingreso = document.getElementById("fIngreso").value;
        let ingreso = parseInt(Fecha_Ingreso.substr(6, 4));
        let antiguedad = 2022 - ingreso;
        return antiguedad;
    }
    calcularPrestac() {
        let anti = new this.calcularAntig();
        let sal = new this.actualizarSalario();
        let prestaciones = (anti * sal) / 12;
        return prestaciones;
    }
}


let verinfo = new Empleado();

function mostrar_datos() {
    var reader = new FileReader();
    if (imagen) {
      reader.readAsDataURL(verinfo.toStringFoto());
      reader.onloadend = function () {
        document.getElementById("foto").src = reader.result;
      }
    }
    document.getElementById("nomMos").innerHTML = verinfo.toStringNombre();
    document.getElementById("apeMos").innerHTML = verinfo.toStringApellido();
    document.getElementById("genMost").innerHTML = verinfo.toStringGenero();
    document.getElementById("fechaNacMos").innerHTML = verinfo.toStringFechaNac();
    document.getElementById("fechaIngMos").innerHTML = verinfo.toStringFechaIng();
    document.getElementById("salMos").innerHTML = verinfo.toStringSalario();
}

class seguridad_social {
    constructor(salud, pension, arl, total) {
        this.salud = 0.125;
        this.pension = 0.16;
        this.arl = arl;
        this.total = total;
    }

    calcularSalud() {
        var obj = new Empleado();
        let salar = obj.actualizarSalario();
        let resS = this.salud * salar;
        return resS;
    }
    calcularPension() {
        var obj = new Empleado();
        let pens = obj.actualizarSalario();
        let resP = this.pension * pens;
        return resP;
    }
    calcularArl() {
        var obj = new Empleado();
        this.arl = parseFloat(document.getElementById("nivelR").value);
        let SalArl = obj.actualizarSalario();
        let resA = this.arl * SalArl;
        return resA;
    }
    totalPago() {
        this.total =
            this.calcularSalud() + this.calcularPension() + this.calcularArl();
        return this.total;
    }
}

let resul = new seguridad_social();
function mos() {
    document.getElementById("salud").innerHTML = resul.calcularSalud();
    document.getElementById("pension").innerHTML = resul.calcularPension();
    document.getElementById("arl").innerHTML = resul.calcularArl();
    document.getElementById("total").innerHTML = resul.totalPago();
}

