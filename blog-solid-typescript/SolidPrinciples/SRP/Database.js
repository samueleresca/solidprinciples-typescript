var Database = (function () {
    function Database(connectionString, repository) {
        this.connectionString = connectionString;
        this.repository = repository;
    }
    Database.connect = function (connectionString, repository) {
        return new Database(connectionString, repository);
    };
    return Database;
}());
var Entity = (function () {
    function Entity() {
    }
    Entity.prototype.save = function (jsonEntity) {
        //SAVING DATA
        return true;
    };
    return Entity;
}());
//# sourceMappingURL=Database.js.map