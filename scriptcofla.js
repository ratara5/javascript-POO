class Celular{
    constructor(color, peso, tamano, resolCamara, ram){
        this.color=color;
        this.peso=peso;
        this.tamano=tamano;
        this.resolCamara=resolCamara;
        this.ram=ram;
        this.encendido=false;
    }
    presionarBtnPower(){
        if(this.encendido==false){
            this.encendido==true;
            alert("celular prendido");  
        } else {
            this.encendido=false;
            alert("celular apagado");
        }
    }
    reiniciar(){
        if(this.encendido=true){
            alert("reiniciando el celular");
        } else {
            alert("celular apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resol de: ${this.resolCamara}`);   
    }
    grabarVideo(){
        alert(`Grabando video en una resol de: ${this.resolCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br/>
        Peso: <b>${this.peso}</b><br/>
        Tamaño: <b>${this.tamano}</b><br/>
        Resolución Cámara: <b>${this.resolCamara}</b><br/>
        Ram: <b>${this.ram}</b><br/>
        `;

    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamano, resolCamara, ram, resolCamaraExtra){
        super(color, peso, tamano, resolCamara, ram);
        this.resolCamaraExtra=resolCamaraExtra;
    }
    grabarVideoLento(){
        alert(`Estas grabando en cámara lenta`);
    }
    reconocimientoFacial(){
        alert(`Vamos a iniciar un reconocimiento facial`);
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución Cámara Extra: <b>${this.resolCamaraExtra}</b><br/>`
    }
}

const celular1=new Celular("rojo","150 g","5 pulg","hd","1GB");
const celular2=new Celular("negro","155 g","5.4 pulg","full hd","2GB");
const celular3=new Celular("blanco","146 g","5.9 pulg","full hd","2GB");

const celular4=new CelularAltaGama("gris","130 g","6 pulg","4K","3GB","full hd");
const celular5=new CelularAltaGama("silver","140 g","5.5 pulg","4K","4GB","4K");

// celular1.presionarBtnPower();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBtnPower();

document.write(`
    ${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>
    <br> ALTA GAMA <br>
    ${celular4.infoAltaGama()}<br>
    ${celular5.infoAltaGama()}<br>
`);


