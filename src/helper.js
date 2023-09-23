const nameList = [
  'Muskan', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Kim', 'Jack', 'ReginaPhalenge', 'Ross' , 'Joey', 'Monica', 'Chandler', 'Paul',
  'Naruto', 'Sasuke', 'Sakura','Itachi', 'Ace', 'Kira', 'Light', 'L', 'Luffy', 'Sanji', 'Nami'
  
];

const commentList = [
'OP bhai OP', ' are wah bhimya ', 'omposition ki chaal', 'very nice video', 'Idk, Whts going on :)', 'Hi','Woaahh !!',
'I am under water, too much raining','tum andhe hoke aaye ho mere gaon mein','thoda thoda hindi ata'
];

export function generateRandomName() {
return  nameList[Math.floor(Math.random() * nameList.length)];
};


export function makeRandomString() {
return  commentList[Math.floor(Math.random() * commentList.length)];
}

export  function getDatetimeDifference(datetimeStr) {
  const timeDiff = Date.now() - new Date(datetimeStr);
  const units = ['year', 'month', 'day', 'hour', 'minute', 'second'];
  const divisors = [31536000000, 2592000000, 86400000, 3600000, 60000, 1000];
  
  for (let i = 0; i < divisors.length; i++) {
      const diff = Math.floor(timeDiff / divisors[i]);
      if (diff >= 1) {
          return `${diff}${units[i]}${diff > 1 ? 's' : ''} ago`;
      }
  }
  
  return "Just now";
}

export function formatCountDifference(count) {
if (count >= 1e9) {
    return (count / 1e9).toFixed(1) + 'B';
} else if (count >= 1e6) {
    return (count / 1e6).toFixed(1) + 'M';
} else if (count >= 1e3) {
    return (count / 1e3).toFixed(1) + 'K';
}
return count.toString();
}