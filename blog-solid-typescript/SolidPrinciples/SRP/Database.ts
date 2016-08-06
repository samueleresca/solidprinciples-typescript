class Database {

    public  connectionString: String;
    public repository: Array<String>;

    public tasks: Entity;



    constructor(connectionString: String, repository:Array<String>) {
        this.connectionString = connectionString;
        this.repository = repository;
    }

    public static connect( connectionString :String , repository : Array<String>): Database{
        return new Database(connectionString, repository);
    }
}


class Entity {

    public save(jsonEntity: Object): Boolean {
        //SAVING DATA
        return true;
    }
}