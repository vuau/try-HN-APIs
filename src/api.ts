export type TItemDetailBase = {
  "by": string,
  "id": number,
  "time": number,
  "score": number
}
export type TItemDetailStory = {
  "descendants": number,
  "kids": number[],
  "score": number,
  "title": string,
  "type": 'story',
  "url": string
} & TItemDetailBase

export type TItemDetailJob = {
  "descendants": number,
  "kids": number[],
  "score": number,
  "title": string,
  "type": 'job',
  "url": string
} & TItemDetailBase

export type TItemDetailComment = {
  "parent": number,
  "kids": number[],
  "text": string,
  "type": "comment",
  "deleted": boolean
} & TItemDetailBase

export type TItemDetail = TItemDetailStory | TItemDetailJob | TItemDetailComment

export const getTopStories = async (): Promise<number[]> => {
  try {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log('getTopStories', error);
    throw error;
  }
}

export const getItemDetail = async (id: number): Promise<TItemDetail> => {
  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log('getItemDetail', error);
    throw error;
  }
}

export const getPageInReaderView = async (url: string): Promise<string> => {
  try {
    const response = await fetch(`/api/handler?url=${url}`);
    return await response.text();
  } catch (error) {
    console.log('getPageInReaderView', error);
    throw error;
  }
}
