import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  
  private capitalizeTitle(title: string): any {
    // return  title.toLowerCase().substr(0,1).toUpperCase().concat(title.substring(1));
    return title.toUpperCase();
  }

  transform(title: string): any {
    let tokens = title.split(" ");
    tokens[0] = this.capitalizeTitle(tokens[0]);
    const prepositions = ["the","of"];

    for  (let i = 0; i < tokens.length; i++){
      let newToken: string = '';
      if ( !prepositions.includes(tokens[i]) )
        tokens[i] = this.capitalizeTitle(tokens[i]);
      else
        tokens[i] = tokens[i].toLowerCase();

    }      

    return tokens.join(' ');

    ;
  }

}
