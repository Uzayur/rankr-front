import { type Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: "auth",
    loadComponent: () => import("./auth-wrapper/auth-wrapper.component").then(
      (m) => m.AuthWrapperComponent
    ),
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },
      {
        path: "login",
        loadComponent: () => import("./login/login.component").then((m) => m.LoginComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./register/register.component").then((m) => m.RegisterComponent)
      }
    ]
  }
];
