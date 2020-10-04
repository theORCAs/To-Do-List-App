import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: "localhost",
    username: 'postgres',
    password: 'tt123',
    port: 5432,
    ssl: false,
    database: "assessment",
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"]
}