import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

export class AppRouteReuseStrategy extends BaseRouteReuseStrategy {
  // override shouldDetach(route: ActivatedRouteSnapshot): boolean {
  //   return false;
  // }
  // store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
  //   throw new Error('Method not implemented.');
  // }
  // shouldAttach(route: ActivatedRouteSnapshot): boolean {
  //   throw new Error('Method not implemented.');
  // }
  // retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
  //   throw new Error('Method not implemented.');
  // }
  // public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  //   return (future.routeConfig === curr.routeConfig) || future.data['reuseComponent'];
  // }

  public override shouldReuseRoute(): boolean {
    return false;
  }
}

// export class AppRouteReuseStrategy implements BaseRouteReuseStrategy {
//   public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//     return (future.routeConfig === curr.routeConfig) || future.data.reuseComponent;
//   }
// }
