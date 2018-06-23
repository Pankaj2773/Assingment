import { Component } from '@angular/core';
//decoretor
@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
     {{ title }}!
  </h1>
  <h2>“Educating for better tomorrow”.</h2>

</div>`

})
export class AppComponent 
{
  title = 'Marvellous Infosystem';
}
