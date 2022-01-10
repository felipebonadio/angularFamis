import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService } from '../../service/collaborator.service';
import { ModalService } from '../../service/modal.service';
import { Collaborator } from '../../model/collaborator';

@Component({
  selector: 'app-collaborator-details',
  templateUrl: './collaborator-details.component.html',
  styleUrls: ['./collaborator-details.component.css'],
})
export class CollaboratorDetailsComponent implements OnInit {
  error: Error | undefined;
  collaborator: Collaborator;

  constructor(
    private collaboratorService: CollaboratorService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private router: Router
  ) {
    this.collaborator = {} as Collaborator;
  }

  ngOnInit(): void {
    const paramId = String(this.route.snapshot.paramMap.get('id'));
    this.collaboratorService
      .getCollaboratorById(paramId)
      .subscribe((collaborator) => (this.collaborator = collaborator));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onDelete(collaborator: Collaborator) {
    this.collaboratorService.deleteCollaborator(collaborator.id).subscribe(
      (response) => {
        this.collaborator = {} as Collaborator;
        this.closeModal('delete'), this.openModal('deleteOk');
      },
      (error) => (this.error = error as any)
    );
    window.alert('Excluído com sucesso!');
    this.router.navigateByUrl('/collaborators');
  }
}
