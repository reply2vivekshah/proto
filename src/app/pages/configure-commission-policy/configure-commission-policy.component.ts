import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-commission-policy',
  templateUrl: './configure-commission-policy.component.html',
  styleUrls: ['./configure-commission-policy.component.scss'],
})
export class ConfigureCommissionPolicyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  fieldSelected = {};
  selectedPolicyFields = new Array();
  fieldValues = new Array();
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

  selectPolicyField() {
    if (this.fieldValues.length === 0) {
      this.fieldValues.push({});
    }
    for (var index in this.policyFields) {
      for (var detailIndex in this.policyFields[index].fieldsDetails) {
        if (
          this.policyFields[index].fieldsDetails[detailIndex].id ==
          this.fieldSelected
        ) {
          this.selectedPolicyFields.push(
            this.policyFields[index].fieldsDetails[detailIndex]
          );
        }
      }
    }
  }

  addPolicyField() {
    this.fieldValues.push({});
  }
}
