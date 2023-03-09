import { Controller, Get, Post } from "@nestjs/common";
import { FirestoreService } from "./firestore.service";

@Controller('auth')
export class FirestoreController{

    constructor(private firestoreService:FirestoreService){}

    @Post('signup')
    signup(){
        return this.firestoreService.signup()
    }
}