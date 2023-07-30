export const getTime = (minutes: number): {time: number, timeUnit: string } => {
  const hour: number = Math.floor(minutes / 60) % 24;
  const day: number = Math.floor(minutes / 24 / 60);

  const time = day || hour || minutes;

  const uniIndex: number = [day, hour, minutes].lastIndexOf(time);
  const timeUnit: string = ['days', 'hours', 'minutes'][uniIndex];

  return { time, timeUnit}
}


