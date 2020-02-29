import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
                {{bigString | summary:50}} <br/>
                {{course.title | titlecase}} <br/>
                {{course.students | number }} <br/>
                {{course.rating | number: '2.2-5'}} <br/>
                {{course.price | currency:'BRL':true:'4.2-2'}} <br/>                
                {{course.releaseDate | date:'mediumDate' }} <br/><br/>

                <h2> {{title}} </h2>
                <ul>
                    <li *ngFor="let course of courses"> 
                        {{ course }} 
                    </li>
                </ul>

                <img [src]="imageUrl" />
                <table> 
                    <tr>
                        <td [attr.colSpan]="colSpan">kkk</td>
                        <td [attr.colSpan]="colSpan">iiiii</td>
                    </tr>
                </table>   
                <div (click)="onDivClick()">
                    <button class="btn btn-primary" (click)="onSave($event)">Save</button> 
                </div>
                <button  class="btn btn-primary" [style.backgroundColor]=" isActive ? 'blue' : 'red' ">Cancel</button>     
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>        
              `
})
export class CoursesComponent {
    bigString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus metus sit amet enim accumsan, eget iaculis justo convallis. Cras vel mauris eu est placerat iaculis vel vitae mauris. Suspendisse potenti. Quisque dictum ultricies accumsan. Pellentesque justo purus, volutpat scelerisque nisi quis, euismod vehicula lorem. Sed leo ipsum, rhoncus scelerisque elit et, auctor viverra mauris. Vivamus at ultricies urna. In eros nisl, tempus vel quam vitae, pharetra sollicitudin turpis.

    Quisque laoreet, erat eu convallis venenatis, felis odio interdum diam, consequat tempor orci sapien nec ligula. Aliquam dignissim volutpat maximus. Aliquam non risus fringilla, auctor dolor id, finibus justo. Integer urna elit, cursus nec tempus vitae, viverra sit amet eros. Mauris dolor tellus, malesuada quis placerat id, sollicitudin tempus justo. Nunc congue ante eget diam venenatis dignissim. Quisque vulputate elit nec nibh bibendum, id imperdiet justo laoreet. Sed vitae commodo sapien. Quisque posuere pretium ante eu dictum. Donec semper eros bibendum elit lobortis feugiat.
    
    Pellentesque pellentesque quam et ultricies viverra. Donec quis felis id dui placerat ullamcorper ac sit amet risus. Aliquam eu sapien sit amet tellus maximus pharetra. Aenean in libero ut urna ultrices hendrerit non id lectus. Morbi id pulvinar dui, nec aliquam leo. Cras neque justo, dapibus in est ac, pellentesque blandit risus. Proin pulvinar tellus eget ligula finibus, id vestibulum ante pulvinar. Aenean felis nisi, interdum nec tincidunt id, ultricies ut velit. Nam pulvinar, metus ultricies faucibus lobortis, lacus felis tristique ipsum, nec euismod ligula felis cursus justo.
    
    Suspendisse imperdiet vitae quam quis faucibus. Sed ac sagittis diam. Sed commodo ullamcorper ipsum, sit amet scelerisque nisi rhoncus vel. Duis tempor iaculis ligula nec ullamcorper. Phasellus nisl neque, feugiat sed diam sit amet, tristique condimentum risus. Quisque sem ex, dapibus quis venenatis a, pretium vitae elit. Donec in libero malesuada, tincidunt sapien ac, sagittis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vitae tellus ut dui rutrum facilisis. Ut tellus quam, faucibus sit amet scelerisque ac, consequat id libero. Cras et interdum nisi, elementum scelerisque risus. Morbi elit nulla, euismod bibendum scelerisque ac, sagittis vulputate velit. Nullam elementum velit nec eros condimentum luctus.
    
    Donec velit purus, venenatis nec venenatis eget, sodales sit amet nulla. Suspendisse semper nibh quis magna dapibus ornare. Nullam non est porta tortor sollicitudin pellentesque ac a orci. Mauris a mattis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut risus consequat, faucibus purus sit amet, pretium diam. Donec suscipit sollicitudin nibh vitae vestibulum. In hac habitasse platea dictumst. Donec vel tortor eu purus auctor pellentesque. Cras egestas, justo ac ultricies lobortis, quam mauris sagittis tortor, ac auctor odio erat sit amet est. Sed varius lectus eu scelerisque accumsan. Nulla facilisi. Donec dictum risus eu tortor efficitur, vestibulum euismod nisi interdum. Morbi sit amet nulla vel erat venenatis consequat. Fusce porta neque magna.
    `;
    course = {
        title: "the Complete Angular of the Of THE Course",
        rating: 4.975,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2020,2,10)
    };

    title = "List of Courses!!";
    courses;
    imageUrl;
    colSpan;
    isActive=false;
    email="me.example.com";
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.imageUrl = "";
        this.colSpan = 2;

    }
    onSave($event) {
        $event.stopPropagation();
        console.log("Save button was clicked",$event);
    }

    onDivClick(){
        console.log("Div clicked")
    }
    onKeyUp() {
        console.log(this.email)
    }
}