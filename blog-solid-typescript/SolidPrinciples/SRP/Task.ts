
/*
* THE COMMENTED CLASS DOESN'T FOLLOW THE SRP PRINCIPLE
*/
//class Task {
//    private db: Database;

//    constructor(private title: string, private deadline: Date) {
//        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
//    }

//    save() {
//        this.db.tasks.save({ title: this.title, date: this.deadline });
//    }
//}



class Task {
    private db: Database;

    constructor(private title: string, private deadline: Date) {
        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
    }
}


class TaskRepository {
    private db: Database;

    constructor() {
        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
    }

    save(task: Task) {
        this.db.tasks.save(JSON.stringify(task));
    }
}