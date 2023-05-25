export const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 2;
  let day = new Date().getDate() + 1;

  const difference = +new Date(`${year}-${month}-${day}`) - +new Date();

    let timeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};