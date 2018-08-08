import { Task3Module } from './task3.module';

describe('Task3Module', () => {
  let task3Module: Task3Module;

  beforeEach(() => {
    task3Module = new Task3Module();
  });

  it('should create an instance', () => {
    expect(task3Module).toBeTruthy();
  });
});
