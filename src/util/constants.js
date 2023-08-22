export const KEY="AIzaSyCMXKSM-mENLXgbzV4VDeaQukmbYEWkHpY";
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+KEY;

export const CATEGORY_API ="https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key="+KEY;
export const YOUTUBE_RELATED_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=IN&order=relevance&maxResults=15&key=${KEY}&topicId=`;
export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=15&order=relevance&key=${KEY}&videoId=`;
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&order=relevance&type=video&key=${KEY}&q=`;
export const VIDEO_DETAILS_FROM_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${KEY}&id=`;


export const OFFSET_LIVE_CHAT=20;

