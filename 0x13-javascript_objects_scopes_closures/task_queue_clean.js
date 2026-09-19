class TaskQueue {
    constructor(name) {
       this.queueName = name;
       this.tasks = [];
       this.isProcessing = false;
    }

addTask(taskFn, priority) {
	if (!taskFn || typeof taskFn !== 'function') {
	   console.error('Task must be a function.');
	   return;
	}

       this.tasks.push({
	   taskFn: taskFn,
	   priority: priority,
	   timestamp: Date.now()
	});

	this.notifyHighPriority(priority);
	this.startQueue();
      }

      notifyHighPriority(priority) {
	if (priority > 9) {
	     console.warn(
	       `High priority task added to ${this.queueName}.`
	);
     }
}
     startQueue() {
       if (this.tasks.length === 1) {
	    console.log(`Starting queue ${this.queueName}.`);
	    this._startProcessing();
	}
     }

     _startProcessing() {
	this.isProcessing = true;
	// Logic to process tasks goes here
	     // }
