import express, { Application } from 'express';
import morgan from 'morgan';

//ROUTES
import UserRoutes from './routes/user.routes';
import ListRoutes from './routes/list.routes';
import ListPackagesRoutes from './routes/list.packages.routes';

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    //Configurando puerto para poder consumir mi API
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    //Configurando los middlewares
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        // this.app.use(express.urlencoded({extended: false}));
    }

    //Configurando mis rutas
    routes() {
        this.app.use('/user', UserRoutes);
        this.app.use('/list', ListRoutes);
        this.app.use('/listpackages', ListPackagesRoutes);
    }

    //Configurando el puerto donde va a escuchar
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}