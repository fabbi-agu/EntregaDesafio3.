import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Persona } from '../persona';
@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent {
  useForm: FormGroup;
  numTramite: String ='asd';
  seVe: boolean = true;
  personas:Persona[]=[];
  constructor(private formBuilder: FormBuilder ){
    
    this.useForm= this.formBuilder.group({
      mail:this.formBuilder.control(''),
      apellido:this.formBuilder.control(''),
      nombre:this.formBuilder.control(''),
      nacionalidad:this.formBuilder.control('Argentina'),
      edad:this.formBuilder.control(1)
    })
    
  }

  get nombreControl(){
    return this.useForm.controls['nombre']
  }
  get apellidoControl(){
    return this.useForm.controls['apellido']
  }
  get mailControl(){
    return this.useForm.controls['mail']
  }
  get nacionalidadControl(){
    return this.useForm.controls['nacionalidad']
  }

  generarResultado() {
    this.seVe=false;
    console.log(this.nombreControl.value)
    const min = 100000; 
    const max = 999999; 
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    this.numTramite = `TRAM-${numeroRandom}`;
    this.agregarUsuario(this.numTramite);
  }
  agregarUsuario(numTramite:String) {
    let nuevoUsuario = new Persona(this.nombreControl.value,this.apellidoControl.value, this.mailControl.value,this.nacionalidadControl.value,numTramite)
    this.personas.push(nuevoUsuario);
  }



}
