export const KEY="AIzaSyACv7GSJFIjzBP1PrugIuZ-cFomK9Q45Jw";
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+KEY;

export const CATEGORY_API ="https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key="+KEY;
export const YOUTUBE_RELATED_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&key=${KEY}&relatedToVideoId=`;
export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=15&order=relevance&key=${KEY}&videoId=`;
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${KEY}&q=`;
export const VIDEO_DETAILS_FROM_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${KEY}&id=`;


export const OFFSET_LIVE_CHAT=20;

export const comment=[
   { name:"komal kushwha",
     text:"1st layer ",
     replies:[{
      name:"komal kushwha",
      text:"second layer",
      replies:[{
        name:"komal kushwha",
        text:"3rd layer ",
        replies:[{
          name:"komal kushwha",
          text:"4th layer",
          replies:null
        }]
      }]
     },
     {
      name:"komal kushwha",
      text:"Est voluptas pariatur ad quia beatae qui aperiam ipsa sit asperiores ",
      replies:[{
        name:"komal kushwha",
        text:"Est voluptas pariatur ad quia beatae qui aperiam ipsa sit asperiores ",
        replies:[{
          name:"komal kushwha",
          text:"Est voluptas pariatur ad quia beatae qui aperiam ipsa sit asperiores ",
          replies:null
        }]
      }]
     }]
  },
  { name:"komal kushwha",
  text:"Est voluptas pariatur ad quia beatae qui aperiam ipsa sit asperiores ",
     replies:[{
      name:"komal kushwha",
      text:"Est voluptas pariatur ad quia beatae qui aperiam ipsa sit asperiores ",
      replies:[{
        name:"komal kushwha",
        text:"Est voluptas pariatur ad quia beatae qui aperiam ipsa sit asperiores ",
        replies:[{
          name:"komal kushwha",
          text:"Est voluptas pariatur ad quia beatae qui aperiam ipsa sit asperiores ",
          replies:null
        }]
      }]
     }]
  },


];