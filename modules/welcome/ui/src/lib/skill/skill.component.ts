import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'lib-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input({ required: true }) data!: Skill;

  readonly gap = 2;

  counter(length: number) {
    return new Array(length);
  }

  getSegmentStyle(index: number, maximumLevel: number, gap: number) {
    const level = index + 1;
    return {
      width: `calc(${100 / maximumLevel}% - ${gap}px`,
      'margin-left': index > 0 ? `${gap}px` : '0',
      'background-color': level < maximumLevel ? '#044caa' : 'black',
    };
  }
}
