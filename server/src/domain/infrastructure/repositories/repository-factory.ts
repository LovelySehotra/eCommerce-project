import { GenericRepository } from "./generic-Repository";

function getRepository<T>(model: new () => T): GenericRepository<T> {
    return new GenericRepository<T>(model);
}

export { getRepository };
