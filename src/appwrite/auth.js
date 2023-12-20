
import { account,ID } from "./Client";


export class AuthService {
    account

   constructor(){
    this.account=account

   }



async createAccount({email, password, name})
{
    try {
       const userAccount= await this.account.create(ID.unique(),
        email, password, name);

        if (userAccount) {
           // call another method 
          return this.login({email, password})

        } else {
            userAccount;
        }

    } catch (error) {
       throw error 
    }
}

async login({email, password})
{
    try {
        return await this.account.createEmailSession(email, password);
    } catch (error) {
        throw error
    }
}

// async logout({})
// {

//     try {
        
//     } catch (error) {
//         throw error;
//     }

// }

async getCurrentUser()
{
try {
    return await this.account.get();
} catch (error) {
    console.log("Appwrite serive :: getCurrentUser :: error", error);
}

}

async logout(){
    try {
        await this.account.deleteSessions()
    } catch (error) {
        console.log("Appwrite Service error ", error);  
    }
}


}

const authService = new AuthService();

export default authService