import { ConfigureRuleComponent } from './../configure-rule/configure-rule.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-configure-commission-policy',
  templateUrl: './configure-commission-policy.component.html',
  styleUrls: ['./configure-commission-policy.component.scss'],
})
export class ConfigureCommissionPolicyComponent implements OnInit {
  constructor(private _modal: NgbModal) {}

  ngOnInit(): void {}

  rules = [
    {
      field: {
        type: 1,
        label: 'Plan name',
      },
      fieldValues: [
        {
          id: 1,
          value: '100 MBPS Plan',
        },
        {
          id: 2,
          value: '200 MBPS Plan',
        },
      ],
    },
    {
      field: {
        type: 2,
        label: 'Customer Category',
      },
      fieldValues: [
        {
          id: 1,
          value: 'Student',
        },
      ],
    },
  ];

  rules1 = [
    {
      field: {
        type: 1,
        label: 'Plan name',
      },
      fieldValues: [
        {
          id: 1,
          value: '50 MBPS Plan',
        },
      ],
    },
    {
      field: {
        type: 2,
        label: 'Customer Category',
      },
      fieldValues: [
        {
          id: 1,
          value: 'Government',
        },
      ],
    },
  ];



  openRuleConfig() {
    const modalRrf = this._modal.open(ConfigureRuleComponent, {
      size: 'md',
      backdrop: 'static',
      keyboard: false,
      centered: false,
    });
    modalRrf.result.then(
      (bData) => {},
      (bDismissed) => {}
    );
  }
}
