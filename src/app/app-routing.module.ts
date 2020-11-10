import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyComponent, PageNotFoundComponent } from "./shared/components";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: EmptyComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
