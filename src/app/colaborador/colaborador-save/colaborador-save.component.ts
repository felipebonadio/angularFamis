import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/model/endereco';
import { Colaborador } from 'src/app/model/colaborador';
import { Restaurante } from 'src/app/model/restaurante';
import { AdminService } from 'src/app/service/admin.service';
import { CollaboratorService } from 'src/app/service/collaborator.service';

@Component({
  selector: 'app-collaborator-save',
  templateUrl: './colaborador-save.component.html',
  styleUrls: ['./colaborador-save.component.css']
})

export class CollaboratorSaveComponent implements OnInit {
  error: Error | undefined;
  colaborador: Colaborador = {} as Colaborador;;
  colaboradores: Colaborador[] =[];
  endereco: Endereco = {} as Endereco;;
  restaurante : Restaurante  = {} as Restaurante;;
  selected : Restaurante = {} as Restaurante;
  
  constructor(
    private formBuilder: FormBuilder,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private adminService: AdminService
  ) {  }

  ngOnInit(): void {
    this.adminService
      .getRestaurants()
      .subscribe((restaurant) => (this.restaurante = restaurant[0]));        
  }

  colaboradorForm = this.formBuilder.group({
    nome: '',
    sobrenome: '',
    telefone: '',
    cpf: '',
    funcao: '',
    email: '',
    senha: '',
    enderecoCep: '',
    enderecoLogradouro: '',
    enderecoNumero: '',
    enderecoBairro: '',
    enderecoLocalidade: '',
    enderecoUf: '',
  });

  onSave(collaborator: Colaborador) {
    if (this.colaboradorForm.value.name !== '') {
      this.colaborador.nome = this.colaboradorForm.value.nome;
      this.colaborador.sobrenome = this.colaboradorForm.value.sobrenome;
      this.colaborador.telefone = this.colaboradorForm.value.telefone;
      this.colaborador.cpf = this.colaboradorForm.value.cpf;
      this.colaborador.funcao = this.colaboradorForm.value.funcao;
      this.colaborador.email = this.colaboradorForm.value.email;
      this.colaborador.senha = this.colaboradorForm.value.senha;

      this.endereco.cep = this.colaboradorForm.value.enderecoCep;
      this.endereco.logradouro = this.colaboradorForm.value.enderecoLogradouro;
      this.endereco.numero = this.colaboradorForm.value.enderecoNumero;
      this.endereco.bairro = this.colaboradorForm.value.enderecoBairro;
      this.endereco.localidade = this.colaboradorForm.value.enderecoLocalidade;
      this.endereco.uf = this.colaboradorForm.value.enderecoUf;    
      

      this.colaborador.endereco = this.endereco;
      this.colaborador.restaurante = this.restaurante;     

      this.collaboratorService.createCollaborator(collaborator).subscribe(
        (newcollaborator) => {
          this.colaborador = newcollaborator;          
        },
        (error) => (this.error = error as any)
      );
      window.alert("Cadastrado com sucesso!")
      this.router.navigateByUrl("/admin")
    }
  }

}
