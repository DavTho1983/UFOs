import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UfoComponent } from "./ufo-component/ufo-component.component";

import { DoughnutChartComponent } from "angular-d3-charts";

@NgModule({
  declarations: [AppComponent, UfoComponent, DoughnutChartComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
