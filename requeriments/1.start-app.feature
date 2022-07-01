Feature: Start na plataforma
Deve iniciar tudo

Scenario: Start na aplicação
Dado O start na aplicação
A plataforma de iniciar o servidor
Então deve ser iniciado dotenv, graphql (typeDefs e resolver) e database.