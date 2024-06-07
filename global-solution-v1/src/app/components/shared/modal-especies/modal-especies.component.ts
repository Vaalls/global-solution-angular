import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { PoModalModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-modal-especies',
  standalone: true,
  imports: [CommonModule, PoModalModule],
  templateUrl: './modal-especies.component.html',
  styleUrls: ['./modal-especies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEspeciesComponent implements OnInit {
  ngOnInit(): void {}
}
