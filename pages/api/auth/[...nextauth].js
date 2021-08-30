import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        jwt: true,
   
    },
    jwt: {
        
        secret: process.env.JWT_SECRE
    }

    // A database is optional, but required to persist accounts in a database
    //database: process.env.DATABASE_URL,
})