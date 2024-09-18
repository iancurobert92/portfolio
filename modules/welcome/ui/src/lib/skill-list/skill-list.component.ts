import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { Skill } from '../skill/skill.model';

@Component({
  selector: 'lib-skill-list',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss',
})
export class SkillListComponent {
  @Input() data: Skill[] = [];
}
