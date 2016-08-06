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
var Task = (function () {
    function Task(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
    }
    return Task;
}());
var TaskRepository = (function () {
    function TaskRepository() {
        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
    }
    TaskRepository.prototype.save = function (task) {
        this.db.tasks.save(JSON.stringify(task));
    };
    return TaskRepository;
}());
//# sourceMappingURL=Task.js.map