export class User{
    private _code:string|null = ''
    constructor(private _fname:string|null,private _lname:string|null, private _email:string|null, private _password:string|null){}
    static isSignedIn:boolean = false
    set code(code){
        this._code = code
    }
    get fname(){
        return this._fname
    }
    get lname(){
        return this._lname
    }
    get email(){
        return this._email
    }
    get password(){
        return this._password
    }
    get code(){
        return this._code
    }
}