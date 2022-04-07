import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-configure-rule',
  templateUrl: './configure-rule.component.html',
  styleUrls: ['./configure-rule.component.scss'],
})
export class ConfigureRuleComponent implements OnInit {
  constructor(private _activeModal: NgbActiveModal) {}

  fieldValue: any;

  selectedFieldId = {};
  selectedFieldDetailId = {};

  selectedField: any;
  selectedFieldDetail: any;

  policyFields = [
    {
      id: 1,
      label: 'Plan',
      fieldsDetails: [
        {
          id: 1,
          label: 'Plan Name',
          type: 'dropdown',
          items: [
            { id: 1, label: '50 MBPS Plan' },
            { id: 2, label: '100 MBPS Plan' },
            { id: 3, label: '150 MBPS Plan' },
          ],
        },
        {
          id: 2,
          label: 'Product Group',
          type: 'dropdown',
          items: [
            { id: 1, label: 'Group A' },
            { id: 2, label: 'Group B' },
            { id: 3, label: 'Group C' },
          ],
        },
      ],
    },
    {
      id: 2,
      label: 'Customer',
      fieldsDetails: [
        {
          id: 3,
          label: 'Customer Category',
          type: 'dropdown',
          items: [
            { id: 1, label: 'Student' },
            { id: 2, label: 'Government' },
          ],
        },
        {
          id: 4,
          label: 'Area',
          type: 'text',
        },
      ],
    },
  ];

  ngOnInit(): void {}

  dismiss() {
    this._activeModal.close(false);
  }

  save() {
    this._activeModal.close(false);
  }

  changeField() {
    this.selectedFieldDetail = undefined;
    for (var index in this.policyFields) {
      if (this.policyFields[index].id == this.selectedFieldId) {
        this.selectedField = this.policyFields[index];
      }
    }
  }

  changeFieldDetails() {
    this.fieldValue = undefined;
    for (var detailIndex in this.selectedField.fieldsDetails) {
      if (
        this.selectedField.fieldsDetails[detailIndex].id ==
        this.selectedFieldDetailId
      ) {
        this.selectedFieldDetail =
          this.selectedField.fieldsDetails[detailIndex];
      }
    }
  }

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.selectedFieldDetail.items
              .filter(
                (v: { id: number; label: string }) =>
                  v.label.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );

  search1: OperatorFunction<string, readonly { id: number; label: String }[]> =
    (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        map((term) =>
          term === ''
            ? []
            : this.selectedFieldDetail.items
                .filter(
                  (v: { label: string }) =>
                    v.label.toLowerCase().indexOf(term.toLowerCase()) > -1
                )
                .slice(0, 10)
        )
      );

  formatter = (x: { label: string }) => x.label;

  addRule() {}
}
