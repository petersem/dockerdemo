import {Express, Request, Response} from 'express';
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import {} from './package.json'

const options = {
definition: {
    openapi: "3.0.0",
    info: {
        title: "REST API Docs",
        version
    }
},
apis
}