import { MinutesPipe } from './minutes.pipe';

describe('MinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
