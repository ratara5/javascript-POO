class App{
    constructor(nombre,descargas,puntuacion, peso){
        this.nombre=nombre
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }
    abrir(){
        if(this.instalada==true){
            if (this.iniciada==false){
                this.iniciada=true;
                alert("app iniciada");
            }
        }else{
            alert("la app aún no está instalada");
        }
    }
    cerrar(){
        if(this.instalada==true){
            if (this.iniciada==true){
                this.iniciada=false;
                alert("app cerrada");
            }
        } else {
            alert("la app aún no está instalada");
        }
    }
    instalar(){
        if(this.iniciada==false){
            if (this.instalada==false){
                this.instalada=true;
                if(this.instalada==true){ //validación
                    alert("app instalada correctamente");
                } else {
                    alert("ha ocurrido un error");
                }
            }
        } else {
            alert("la aplicación está abierta, no se puede desinstalar")
        }
    }
    desinstalar(){
        if (this.instalada==true){
            this.instalada=false;
            if (this.instalada==false){ //validación
                alert("app desinstalada correctamente");

            } else {
                alert("ha ocurrido un error");
            }
        }
    }
    appInfo(){
        return `
        Nombre:<b>${this.nombre}</b></br>
        Descargas:<b>${this.descargas}</b></br>
        Puntuación:<b>${this.puntuacion}</b></br>
        Peso:<b>${this.peso}</b></br>
        Instalada:<b>${this.instalada}</b></br></br>  
        `
    }
}

const app1=new App("app1","3M", "4.2", "25MB");
const app2=new App("app2","2M", "4.0", "20MB");
const app3=new App("app3","1M", "4.7", "15MB");
const app4=new App("app4","1M", "4.7", "15MB");
const app5=new App("app5","1M", "3.2", "5MB");
const app6=new App("app6","1M", "3.8", "100MB");
const app7=new App("app7","10M", "3.9", "40MB");

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

app2.abrir();
app2.cerrar();
app2.desinstalar();

app3.cerrar();
app3.desinstalar();

app4.desinstalar();

document.write(app1.appInfo());
document.write(app2.appInfo());
document.write(app3.appInfo());
document.write(app4.appInfo());
document.write(app5.appInfo());
document.write(app6.appInfo());
document.write(app7.appInfo());