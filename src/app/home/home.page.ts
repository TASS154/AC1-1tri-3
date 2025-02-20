import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  constructor() {}

  modalAbertoTemp = false;
  modalAbertoTriangulo = false;
  modalAbertoMedia = false;


  openModal(tipo: string) {
    if (tipo === 'temp') {
      this.modalAbertoTemp = true;
    } else if (tipo === 'triangulo') {
      this.modalAbertoTriangulo = true;
    } else if (tipo === 'media') {
      this.modalAbertoMedia = true;
    }
  }
  closeModal(tipo: string) {
    if (tipo === 'temp') {
      this.modalAbertoTemp = false;
    } else if (tipo === 'triangulo') {
      this.modalAbertoTriangulo = false;
    } else if (tipo === 'media') {  // Fechando o modal de média
      this.modalAbertoMedia = false;
    }
  }



  //converter temperatura
  f = 0;
  c = 0;
  convertido = 0;

 FC() {
  this.convertido = parseFloat(((9 * this.c + 160) / 5).toFixed(2));
  }

  CF() {
    this.convertido = parseFloat(((this.f - 32) * (5 / 9)).toFixed(2));
  }

  tipoConversao: string = 'FC';
       //reset
  resetar() {
    this.f = 0;
    this.c = 0;
    this.convertido = 0;
  }

     //reset
  //triangulo

  A=0;
  B=0;
  C=0;
  ver=false;
  tipo='';


  trianguloVer() {

    if (this.A + this.B > this.C && this.B + this.C > this.A && this.A + this.C > this.B) {
      this.ver = true
      console.log('verdadeiro')
    } else {
      this.ver = false
      console.log('falso')
    }

    }

    tipoVer() {
  if (this.ver === true){
    if(this.A === this.B && this.B === this.C) {
      this.tipo = 'Equilatero'
      console.log('equi')
    } else if (this.A === this.B || this.A === this.C || this.B === this.C) {
      this.tipo = 'Isosceles'
      console.log('iso')
    } else if(this.A !== this.B && this.B !== this.C && this.A !== this.C) {
      this.tipo = 'Escaleno'
      console.log('esc')
    }
    } else{
      this.tipo = ''
    }
  }

  //reset2
  resetar2() {
  this.A=0;
  this.B=0;
  this.C=0;
  this.ver=false;
  this.tipo='';
  }


  //nota

  nota1=0
  nota2=0
  nota3=0
  nota4=0
  media=0
  status=''

  calcMedia() {
    this.media = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4

    if (this.media <= 3 ) {
      this.status='retido'
    } else if (this.media > 3 && this.media < 5.9 ) {
      this.status='recuperação'
    } else if (this.media >= 6) {
      this.status='aprovado'
    } else {
      this.status='resultado inválido! verifique as notas e tente novamente'
    }
  }

    //reset3
    resetar3() {
      this.nota1=0;
      this.nota2=0;
      this.nota3=0;
      this.nota4=0;
      this.media=0;
      this.status='';
      }


}


