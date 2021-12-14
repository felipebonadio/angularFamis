import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CollaboratorService } from '../collaborator/collaborator.service';
import { Collaborator } from '../model/collaborator';

@Component({
  selector: 'app-collaborator-details',
  templateUrl: './collaborator-details.component.html',
  styleUrls: ['./collaborator-details.component.css']
})
export class CollaboratorDetailsComponent implements OnInit {

  collaborator: Collaborator;
  constructor(private collaboratorService: CollaboratorService, private route: ActivatedRoute, private formBuilder: FormBuilder ) {
    this.collaborator = {} as Collaborator;
   }

  ngOnInit(): void {
    const paramId = String(this.route.snapshot.paramMap.get("id"));
    this.collaboratorService.getCollaboratorById(paramId).subscribe(collaborator => this.collaborator = collaborator);
  }

}
