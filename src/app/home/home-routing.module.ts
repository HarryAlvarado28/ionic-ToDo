import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../pages/about/about.component";
import { SkillsComponent } from "../pages/skills/skills.component";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "skill",
    component: SkillsComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  // {
  //   path: "tabs",
  //   component: TabsComponent,
  //   children: [
  //     {
  //       path: "schedule",
  //       children: [
  //         {
  //           path: "",
  //           loadChildren: "../schedule/schedule.module#ScheduleModule",
  //         },
  //       ],
  //     },
  //     {
  //       path: "",
  //       redirectTo: "/app/tabs/schedule",
  //       pathMatch: "full",
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
