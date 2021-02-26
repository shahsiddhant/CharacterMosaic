import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterInfo } from '../character-summary/character-summary.component';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  @Input() characterInfo: CharacterInfo;
  public downloadForm: FormGroup;
  private url = `https://script.google.com/a/macros/siddhant.design/s/AKfycbx6Rd44kNlFP6GPuUhhWu7hssV-hxUgkGoz_B7-JA7QaW5tufbC_Vvp/exec`;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
    this.downloadForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  openDownloadModal(content) {
    this.modalService.open(content).result.then(
      (result) => {
        if (result === 'download') {
          // download the character
          if (this.downloadForm.valid) {
            const details = {
              firstName: this.downloadForm.controls['firstName'].value,
              lastName: this.downloadForm.controls['lastName'].value,
              email: this.downloadForm.controls['email'].value,
            };

            let formBody: any = [];
            for (const property of Object.keys(details)) {
              const encodedKey = encodeURIComponent(property);
              const encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            console.log(formBody);

            this.http
              .post(this.url, formBody, {
                headers: {
                  'Content-Type':
                    'application/x-www-form-urlencoded; charset=UTF-8',
                },
              })
              .subscribe((res: any) => {
                if (res.result === 'success') {
                  if (this.characterInfo.downloadUrl) {
                    window.location.href = this.characterInfo.downloadUrl;
                  }
                }
              });
          }
        }
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
