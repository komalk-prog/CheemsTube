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