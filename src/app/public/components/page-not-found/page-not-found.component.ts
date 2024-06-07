import { Component, OnInit } from '@angular/core';
import { HttpCode } from '../../interfaces/http-code';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {

  private httpCodeErrorByRoute: string | null;
  
  public printedMessagePage: HttpCode;

  private readonly httpErrorList: Array<HttpCode> = [
    { code: 400, error: "Bad Request", message: "Não foi possível processar sua requisição." },
    { code: 401, error: "Unauthorized", message: "Não foi possível processar sua requisição." },
    { code: 402, error: "Payment Required", message: "Não foi possível processar sua requisição." },
    { code: 403, error: "Forbidden", message: "Não foi possível processar sua requisição." },
    { code: 404, error: "Not Found", message: "Não foi possível processar sua requisição." },
    { code: 405, error: "Method Not Allowed", message: "Não foi possível processar sua requisição." },
    { code: 406, error: "Not Acceptable", message: "Não foi possível processar sua requisição." },
    { code: 407, error: "Proxy Authentication Required", message: "Não foi possível processar sua requisição." },
    { code: 408, error: "Request Timeout", message: "Não foi possível processar sua requisição." },
    { code: 409, error: "Conflict", message: "Não foi possível processar sua requisição." },
    { code: 410, error: "Gone", message: "Não foi possível processar sua requisição." },
    { code: 411, error: "Length Required", message: "Não foi possível processar sua requisição." },
    { code: 412, error: "Precondition Failed", message: "Não foi possível processar sua requisição." },
    { code: 413, error: "Payload Too Large", message: "Não foi possível processar sua requisição." },
    { code: 414, error: "URI Too Long", message: "Não foi possível processar sua requisição." },
    { code: 415, error: "Unsupported Media Type", message: "Não foi possível processar sua requisição." },
    { code: 416, error: "Range Not Satisfiable", message: "Não foi possível processar sua requisição." },
    { code: 417, error: "Expectation Failed", message: "Não foi possível processar sua requisição." },
    { code: 418, error: "I'm a Teapot", message: "Não foi possível processar sua requisição." },
    { code: 419, error: "Page Expired", message: "Não foi possível processar sua requisição." },
    { code: 420, error: "Method Failure or Enhance Your Calm", message: "Não foi possível processar sua requisição." },
    { code: 421, error: "Misdirected Request", message: "Não foi possível processar sua requisição." },
    { code: 422, error: "Unprocessable Entity", message: "Não foi possível processar sua requisição." },
    { code: 423, error: "Locked", message: "Não foi possível processar sua requisição." },
    { code: 424, error: "Failed Dependency", message: "Não foi possível processar sua requisição." },
    { code: 425, error: "Too Early", message: "Não foi possível processar sua requisição." },
    { code: 426, error: "Upgrade Required", message: "Não foi possível processar sua requisição." },
    { code: 427, error: "Locked", message: "Não foi possível processar sua requisição." },
    { code: 428, error: "Precondition Required", message: "Não foi possível processar sua requisição." },
    { code: 429, error: "Too Many Requests", message: "Não foi possível processar sua requisição." },
    { code: 430, error: "HTTP Status Code", message: "Não foi possível processar sua requisição." },
    { code: 431, error: "Request Header Fields Too Large", message: "Não foi possível processar sua requisição." },
    { code: 440, error: "Login Time-Out", message: "Não foi possível processar sua requisição." },
    { code: 444, error: "No Response", message: "Não foi possível processar sua requisição." },
    { code: 449, error: "Retry With", message: "Não foi possível processar sua requisição." },
    { code: 450, error: "Blocked by Windows Parental Controls", message: "Não foi possível processar sua requisição." },
    { code: 451, error: "Unavailable For Legal Reasons", message: "Não foi possível processar sua requisição." },
    { code: 460, error: "Client Closed Connection Prematurely", message: "Não foi possível processar sua requisição." },
    { code: 463, error: "Too Many Forwarded IP Addresses", message: "Não foi possível processar sua requisição." },
    { code: 464, error: "Incompatible Protocol", message: "Não foi possível processar sua requisição." },
    { code: 494, error: "Request Header Too Large", message: "Não foi possível processar sua requisição." },
    { code: 495, error: "SSL Certificate Error", message: "Não foi possível processar sua requisição." },
    { code: 496, error: "SSL Certificate Required", message: "Não foi possível processar sua requisição." },
    { code: 497, error: "HTTP Request Sent to HTTPS Port", message: "Não foi possível processar sua requisição." },
    { code: 498, error: "Invalid Token", message: "Não foi possível processar sua requisição." },
    { code: 499, error: "Token Required or Client Closed Request", message: "Não foi possível processar sua requisição." },
  ]

  constructor ( private _activatedRoute: ActivatedRoute, private _router: Router, private _title: Title ) { 
    this.httpCodeErrorByRoute = this._activatedRoute.snapshot.paramMap.get('id');
   
    if (this.httpCodeErrorByRoute) {
      this.printedMessagePage = this.httpErrorList.filter( (error) => error.code === Number(this.httpCodeErrorByRoute) )[0];
    } else {
      this.printedMessagePage = this.httpErrorList.filter( (error) => error.code === 404 )[0];
    }

  }
  
  ngOnInit(): void {
    if (!this.printedMessagePage) {
      this.printedMessagePage = this.httpErrorList.filter( (error) => error.code === 404 )[0];
      
      this._router.navigate(["/ops", "404"]);
    }

    this._title.setTitle(this.printedMessagePage.error + " | Reinternals LABs");
  }

}
