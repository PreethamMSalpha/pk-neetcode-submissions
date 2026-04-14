class Twitter {
    constructor() {
        this.timestamp = 0;
        this.follows = new Map();
        this.tweets = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweets.has(userId)){
            this.tweets.set(userId, []);
        }

        this.tweets.get(userId).push([tweetId, this.timestamp++]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let users = new Set([userId]);

        if(this.follows.get(userId)){
            for(const f of this.follows.get(userId)) users.add(f);
        }

        let maxHeap = new Heap((a,b) => b[0] - a[0]);

        for(const userId of users){
            if(!this.tweets.get(userId)) continue;

            let userTweet = this.tweets.get(userId);
            let userLastTweetIdx = userTweet.length - 1;

            const [tweetId, timeStamp] = userTweet[userLastTweetIdx];

            maxHeap.push([timeStamp, tweetId, userId, userLastTweetIdx]);
        }

        let res = [];

        while(maxHeap.size() && res.length < 10){
            let [timeStamp, tweetId, userId, userLastTweetIdx] = maxHeap.pop();

            res.push(tweetId);

            if(userLastTweetIdx - 1 >= 0){
                const [newTweetId, newTimeStamp] = this.tweets.get(userId)[userLastTweetIdx - 1];
                maxHeap.push([newTimeStamp, newTweetId, userId, userLastTweetIdx - 1]);
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.follows.has(followerId)){
            this.follows.set(followerId, new Set());
        }

        this.follows.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.follows.has(followerId)){
            return;
        }

        this.follows.get(followerId).delete(followeeId);
    }
}

class Heap{
    constructor(comparator){
        this.heap = [];
        this.cmp = comparator;
    }

    size(){
        return this.heap.length;
    }

    push(val){
        this.heap.push(val);
        this.heap.sort(this.cmp);
    }

    pop(){
        if(!this.size()) return null;

        let top = this.heap.shift();

        if(this.size()){
            this.heap.sort(this.cmp);
        }

        return top;
    }
}
