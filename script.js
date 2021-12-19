class Animal{
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info=`Soy de la especie ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    verInfo(){
        document.write(this.info+"<br><br>");
    }
    // ladrar(){
    //     if(this.especie=="perro"){
    //         document.write("¡WaW!");
    //     }else{
    //         document.write("No puede ladrar ya que es "+this.especie)
    //     }
    // }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color); // los atributos que toma de la clase que da la herencia
        this.raza=raza; // los atributos propios de la clase heredera
    }
    static ladrar(){ //Este método no requiere la creación de un objeto
        alert('¡WaW!'); //En esta instrucción no se hace referencia a ningún atributo
    }
    set setRaza(nueNom){
        this.raza=nueNom;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Animal("canina",5,"rojo")
const gato = new Animal("felina",1,"blanco")
const pajaro = new Animal("pinzón",2,"azul")

// document.write(perro.info+"<br><br>")
// document.write(gato.info+"<br><br>")
// document.write(pajaro.info+"<br><br>")
// console.log(perro)

// Esto no me funcionó.¿Por q? //
// const contenido=document.getElementById('contenido');
// contenido.children[1].innerText=perro.info; 

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

// gato.ladrar();

Perro.ladrar();

const blue=new Perro("canina",1,"negro","labrador");
document.write(blue.especie+"<br>");
document.write(blue.raza+"<br>");

blue.setRaza="criollo";
document.write(blue.getRaza);
