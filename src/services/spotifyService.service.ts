import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {

constructor(private http: HttpClient) { }


clientId = '2f3ffec77c75497a9c5ff90334fd58b6';
clientSecret = '1be221afede34b8b9b28cc50afd1a799';

login() {
    const authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    const body = 'grant_type=client_credentials';
    return this.http.post(authorizationTokenUrl, body, {
        headers: new HttpHeaders({
            Authorization:
                'Basic  ' + Buffer.from(this.clientId + ':' + this.clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded;',
        }),
    });
}

}


