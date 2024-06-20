import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf.js";
// * Authenthecation Service
class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(conf.appwriteEndpoint).setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }
  // * Get a user's account details
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error: appwrite > auth > getCurrentUser : " + error);
    }
    return null;
  }
  // * Create a new account
  async createAccount(name, email, password) {
    try {
      return await this.account.create(ID.unique, email, password, name);
      // TODO: If user SingUp then call Login with email and password
    } catch (error) {
      console.log("Error: appwrite > auth > createAccount :");
      throw error;
    }
  }
  // * Create a new session or login
  async createSession(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error: appwrite > auth > createSession : ");
      throw error;
    }
  }
  // * Delete a session or logout
  async deleteSession() {
    return await this.account.deleteSessions();
  }
  catch(error) {
    console.log("Error: appwrite > auth > deleteSession : ");
    throw error;
  }
}
const appwriteAuthService = new AuthService();
export default appwriteAuthService;
