import { config } from 'dotenv'
import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/mix'
import mongoose from 'mongoose'

class App {
    public server: ApolloServer

    constructor(){
        config()
        this.server = new ApolloServer({
            typeDefs,
            resolvers,
        })

        this.database()
    }

    private database(){
        mongoose.connect('mongodb://localhost:27017/database-shop')
    }
}

new App().server.listen(process.env.PORT).then(() => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})