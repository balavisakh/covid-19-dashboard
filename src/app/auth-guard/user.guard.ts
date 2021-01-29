import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: CovidService, private router: Router){}
  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
    return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
