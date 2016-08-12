/*
* THE  CLASS DOESN'T FOLLOW THE SRP PRINCIPLE
*/
//class Task {
//    private db: Database;
//    constructor(private title: string, private deadline: Date) {
//        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
//    }
//    getTitle() {
//        return this.title + "(" + this.deadline + ")";
//    }
//    save() {
//        this.db.tasks.save({ title: this.title, date: this.deadline });
//    }
//}
class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
    }
    getTitle() {
        return this.title + "(" + this.deadline + ")";
    }
}
class TaskRepository {
    constructor() {
        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
    }
    save(task) {
        this.db.tasks.save(JSON.stringify(task));
    }
}
//# sourceMappingURL=Task.js.map