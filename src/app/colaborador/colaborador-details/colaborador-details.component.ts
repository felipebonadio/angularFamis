import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService } from '../../service/collaborator.service';
import { ModalService } from '../../service/modal.service';
import { Colaborador } from '../../model/colaborador';

@Component({
  selector: 'app-collaborator-details',
  templateUrl: './colaborador-details.component.html',
  styleUrls: ['./colaborador-details.component.css'],
})
export class ColaboradorDetailsComponent implements OnInit {
  error: Error | undefined;
  colaborador: Colaborador;

  constructor(
    private colaboradorService: CollaboratorService,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private router: Router
  ) {
    this.colaborador = {} as Colaborador;
  }

  ngOnInit(): void {
    const paramId = String(this.route.snapshot.paramMap.get('id'));
    this.colaboradorService
      .getCollaboratorById(paramId)
      .subscribe((collaborator) => (this.colaborador = collaborator));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onDelete(collaborator: Colaborador) {
    this.colaboradorService.deleteCollaborator(collaborator.id).subscribe(
      (response) => {
        this.colaborador = {} as Colaborador;
        this.closeModal('delete'), this.openModal('deleteOk');
      },
      (error) => (this.error = error as any)
    );
    window.alert('Excluído com sucesso!');
    this.router.navigateByUrl('/collaborators');
  }
}
