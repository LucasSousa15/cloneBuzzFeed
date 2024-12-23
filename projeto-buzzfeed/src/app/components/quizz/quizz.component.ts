import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  title:string = '';

  questions:any = '';
  questionSelected:any = '';

  answers:string[] = [];
  answerSelected:string = '';

  questionIndex:number = 0;
  questionMaxInder:number = 0;

  finished:boolean = false;


}
