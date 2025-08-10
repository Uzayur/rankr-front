import { type Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { authRoutes } from "./auth/auth.routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  ...authRoutes,

  // TODO: Add a 404 page
  {
    path: "**",
    redirectTo: "dashboard"
  }
];
