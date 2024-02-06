import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'grade'
})
export class CustomPipe implements PipeTransform {

  transform(marks: number, ..._args: number[]): any{
  
    if (marks < 0 || marks > 100) {
        return "Invalid Marks";
      } else if (marks < 32) {
        return "F";
      } else if (marks < 40) {
        return "D";
      } else if (marks < 45) {
        return "D+";
      } else if (marks < 50) {
        return "C";
      } else if (marks < 60) {
        return "C+";
      } else if (marks < 65) {
        return "B";
      } else if (marks < 70) {
        return "B+";
      } else if (marks < 75) {
        return "A";
      } else if (marks < 80) {
        return "A+";
      } else {
        return "A++";
      }
   }
}