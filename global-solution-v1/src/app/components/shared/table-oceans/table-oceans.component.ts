import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { PoButtonModule, PoTableModule } from '@po-ui/ng-components';
import { Ocean } from '../../../interface/ocean';
import { OceanService } from '../../../services/ocean.service';

@Component({
  selector: 'app-table-oceans',
  standalone: true,
  imports: [CommonModule, PoTableModule, PoButtonModule],
  templateUrl: './table-oceans.component.html',
  styleUrls: ['./table-oceans.component.css'],
})
export class TableOceansComponent implements OnInit {
  constructor(private oceanService: OceanService) {}

  oceans: Ocean[] = [
    {
      regiao: 'string',
      temperaturaAgua: 0,
      pH: 0,
      nivelPoluicao: 'string',
      especies: [
        {
          nome: 'string',
          status: 'string',
        },
      ],
      projetosConservacao: [
        {
          nomeProjeto: 'string',
          tipoProjeto: 'string',
          tipoParticipacao: 'string',
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.getOceans();
  }

  getOceans() {
    this.oceanService.getOceans().subscribe((ocean) => {
      this.oceans = ocean;
    });
  }

  columns = [
    { property: 'regiao', label: 'Região' },
    { property: 'temperaturaAgua', label: 'C°' },
    { property: 'pH', label: 'PH' },
    { property: 'nivelPoluicao', label: 'Nv Poluição' },
    { property: '', label: 'Especies' },
  ];

  getEspecie() {}

  onClick() {}
}
