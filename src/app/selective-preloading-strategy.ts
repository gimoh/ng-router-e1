import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (!route.data || !route.data['preload']) {
            return Observable.of(null)
        }

        // add route path to preloaded modules array TODO: why?
        this.preloadedModules.push(route.path);

        // log the route path
        console.log('Preloaded:', route.path);

        return load();
    }
}
