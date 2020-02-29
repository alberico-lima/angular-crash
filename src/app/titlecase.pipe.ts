import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  
  private capitalizeTitle(title: string): any {
    return  title.substr(0,1).toUpperCase().concat(title.substring(1));
  }

  transform(title: string): any {
    let tokens = title.split(' ');
    // tokens[0] = this.capitalizeTitle(tokens[0]);
    const prepositions = ["the","of"];

    for  (let i = 0; i < tokens.length; i++){
      let token: string = tokens[i].toLowerCase();
      console.log(token);
      let newToken: string = '';
      if (i> 0 && !prepositions.includes(tokens[i]))
        tokens[i] = this.capitalizeTitle(token);
      else
        tokens[i] = tokens[i].toLowerCase();

    }      

    return tokens.join(' ');

    ;
  }

}
