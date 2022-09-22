//CLASE QUE REALIZA EL TRATAMIENTO DE LA INFORMACION PERSONAL DEL EMPLEADO

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
    return (this.Salario = parseFloat(
      document.getElementById("salario").value
    ));
  }
  toStringFoto() {
    return (this.Foto = document.getElementById("imagen").files[0]);
  }

  calcularEdad() {
    let Calcular_Edad = document.getElementById("fechaNac").value;
    let anio = parseInt(Calcular_Edad.substr(6, 4));
    let eda = 2022 - anio;
    return eda;
  }
  calcularAntig() {
    let Fecha_Ingreso = document.getElementById("fIngreso").value;
    let ingreso = parseInt(Fecha_Ingreso.substr(6, 4));
    let antiguedad = 2022 - ingreso;
    return antiguedad;
  }
  calcularPrestac() {
    let anti = this.calcularAntig();
    let sal = this.toStringSalario();
    let prestaciones = (anti * sal) / 12;
    return prestaciones.toFixed(2);
  }
}

//INVOCACION DE METODOS A TRAVES DE SUS FUNCIONES DE LA CLASE EMPLEADO

//Funcion para visualizar la informacion del empleado
let verinfo = new Empleado();

function mostrar_datos() {
  var reader = new FileReader();
  if (imagen) {
    reader.readAsDataURL(verinfo.toStringFoto());
    reader.onloadend = function () {
      document.getElementById("foto").src = reader.result;
    };
  }

  document.getElementById("nomMos").innerHTML = verinfo.toStringNombre();
  document.getElementById("apeMos").innerHTML = verinfo.toStringApellido();
  document.getElementById("genMost").innerHTML = verinfo.toStringGenero();
  document.getElementById("fechaNacMos").innerHTML = verinfo.toStringFechaNac();
  document.getElementById("fechaIngMos").innerHTML = verinfo.toStringFechaIng();
  document.getElementById("salMos").innerHTML = verinfo.toStringSalario();
}
//Funcion para conocer la edad actual del empleado
function edad_emple() {
  var emp = new Empleado();
  let Edad = emp.calcularEdad();
  document.getElementById("inpedad").innerHTML = Edad;
}
//Funcion para visualizar los años que ha trabajado en la organzacion
function antiguedad() {
  var emple = new Empleado();
  let Antigu = emple.calcularAntig();
  document.getElementById("antig").innerHTML = Antigu;
}
//Funcion para visualizar la informacion del empleado
function prestacion() {
  var emplea = new Empleado();
  let Antigu = emplea.calcularPrestac();
  document.getElementById("presta").innerHTML = Antigu;
}
/////////////////////////////////////////////////////////////////////////////////////

//CLASE QUE CALCULA LOS VALORES CORRESPONDIENTES A LA SEGURIDAD SOCIAL DE UN EMPLEADO

class seguridad_social {
  constructor(salud, pension, arl, total) {
    this.salud = 0.125;
    this.pension = 0.16;
    this.arl = arl;
    this.total = total;
  }

  calcularSalud() {
    var obj = new Empleado();
    let salar = obj.toStringSalario();
    let resS = this.salud * salar;
    return resS;
  }
  calcularPension() {
    var obj = new Empleado();
    let pens = obj.toStringSalario();
    let resP = this.pension * pens;
    return resP;
  }
  calcularArl() {
    var obj = new Empleado();
    this.arl = parseFloat(document.getElementById("nivelR").value);
    let SalArl = obj.toStringSalario();
    let resA = this.arl * SalArl;
    return resA;
  }
  totalPago() {
    this.total =
      this.calcularSalud() + this.calcularPension() + this.calcularArl();
    return this.total;
  }
}

//INVOCACION DE METODOS A TRAVES DE SUS FUNCIONES DE LA CLASE EMPLEADO

//Creacion de funciones para interactuar con el Front-End a traves del DOM

function mostrarSegSocial() {
  var resul = new seguridad_social();
  var salEmp = new Empleado();
  this.arl = parseFloat(document.getElementById("nivelR").value);
  this.Salario = parseFloat(document.getElementById("salario").value);

  if (this.arl == 0) {
    alert("El Factor de actividad es un campo obligatorio");
  } else {
    document.getElementById("salud").innerHTML = resul.calcularSalud();
    document.getElementById("pension").innerHTML = resul.calcularPension();
    document.getElementById("arl").innerHTML = resul.calcularArl().toFixed(2);
    document.getElementById("total").innerHTML = resul.totalPago();
  }
}
///////////////////////////////////////////////////////////////////////////////

//CLASE QUE CALCULA EL MONTO GANADO AL TRABAJAR POR HORAS EXTRAS DE FORMA DIURNA

class horasExtra {
  constructor(
    salarioMes,
    valorHoraOrdinariaSalario,
    valorEquivalenteHora,
    valorOchoHoras
  ) {
    this.valorHoraOrdinariaSalario = 4166;
    this.valorEquivalenteHora = 1.25;
    this.valorOchoHoras = 33328;
    this.salarioMes = salarioMes;
  }

  totalPagoHoras() {
    let numHorasExtra = parseInt(document.getElementById("numHoras").value);
    let calculo =
      numHorasExtra *
      (this.valorEquivalenteHora * this.valorHoraOrdinariaSalario);

    let totalLiquidacion = calculo + this.valorOchoHoras;
    return totalLiquidacion;
  }

  totalHoras() {
    let numHorasExtra = parseInt(document.getElementById("numHoras").value);
    return numHorasExtra;
  }

  totalSalarioMes() {
    var newObj = new Empleado();
    let pens = newObj.toStringSalario();
    this.salarioMes = this.totalPagoHoras() + pens;
    return this.salarioMes;
  }
}

//Definicion de funciones para interactuar enviar la informacion resultante al usuario

let totalPagoHorasDiurnas = new horasExtra();

function totalPagoHoras() {
  document.getElementById("numHorasExtra").innerHTML =
    totalPagoHorasDiurnas.totalHoras();

  document.getElementById("totalLiquidacion").innerHTML =
    totalPagoHorasDiurnas.totalPagoHoras();

  document.getElementById("totalSalario").innerHTML =
    totalPagoHorasDiurnas.totalSalarioMes();
}

///////////////////////////////////////////////////////////////////////////////////////
