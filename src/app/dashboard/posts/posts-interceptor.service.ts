import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()

export class PostsInterceptorService implements HttpInterceptor {
    apiKey: string = environment.apiKey;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('request on way');
        const modifiedReq = req.clone({ headers: req.headers.append('api-key', this.apiKey) });

        return next.handle(modifiedReq);
    }   
}