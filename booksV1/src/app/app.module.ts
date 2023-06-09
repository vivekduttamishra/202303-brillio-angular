import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app-component/app.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { BookDetailsScreenComponent } from "./components/book-details-screen/book-details-screen";
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { RatingAdvisePipe } from './pipes/rating-advise.pipe';
import { RangeComponent } from './components/range/range.component';
import { FormsModule } from "@angular/forms";
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ShowIfDirective } from './directives/show-if.directive';
import { SimpleBookService } from "./services/simple-book-service";
import { BorderDirective } from './directives/border.directive';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        BookDetailsScreenComponent,
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        BookListComponent,
        BookAddComponent,
        UpperCasePipe,
        RatingAdvisePipe,
        RangeComponent,
        StarRatingComponent,
        ShowIfDirective,
        BorderDirective,
        HighlightDirective
    ],
    providers:[
        SimpleBookService
    ],
    bootstrap:[
        AppComponent,
    ]
})
export class AppModule{

}