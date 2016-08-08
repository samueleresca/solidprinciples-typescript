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
var Task = (function () {
    function Task(title, deadline) {
        this.title = title;
        this.deadline = deadline;
    }
    Task.prototype.getTitle = function () {
        return this.title + "(" + this.deadline + ")";
    };
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