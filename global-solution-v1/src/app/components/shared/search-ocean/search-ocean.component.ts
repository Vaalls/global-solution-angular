import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { PoSearchModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-search-ocean',
  standalone: true,
  imports: [CommonModule, PoSearchModule],
  templateUrl: './search-ocean.component.html',
  styleUrls: ['./search-ocean.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchOceanComponent implements OnInit {
  ngOnInit(): void {}
}
