import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz__questions from '../../assets/data/quizz_questions.json'


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

  constructor () {}

  ngOnInit(): void {
    if(quizz__questions) {
      this.finished = false
      this.title = quizz__questions.title

      this.questions = quizz__questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxInder = this.questions.length
      console.log(this.questionIndex)
      console.log(this.questionMaxInder)
    }
  }

  playerChoice(value:string) {
    this.answers.push(value)
    this.nextStep()
    console.log(this.answers)
  }

  async nextStep (){
    this.questionIndex+=1;

    if (this.questionMaxInder > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }

    else{
      const finalAnswer: string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quizz__questions.results[finalAnswer as keyof typeof quizz__questions.results]
      console.log(this.answerSelected)
    }
  }

  async checkResult (answers:string[]) {
    const result = answers.reduce((previous, current, i, arr)=> {
      if (
        arr.filter(item => item === previous).length > 
        arr.filter(item => item === current).length 
      ) {
        return previous
      }

      else {
        return current}
    } )

       return result
       console.log('Aqui o' + result)
  }

}
