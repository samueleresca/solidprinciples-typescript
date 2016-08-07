class Database {
    constructor(connectionString, repository) {
        this.connectionString = connectionString;
        this.repository = repository;
    }
    static connect(connectionString, repository) {
        return new Database(connectionString, repository);
    }
}
class Entity {
    save(jsonEntity) {
        //SAVING DATA
        return true;
    }
}
//# sourceMappingURL=Database.js.map