class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        let matches = 0; 

        const a = 'a'.charCodeAt(0);
        // console.log('a -> ', a);

        // count freq of s1
        for(const ch of s1) s1Count[ch.charCodeAt(0) - a]++;

        // count freq of s2 till s1.length
        for(let i = 0; i<s1.length; i++) s2Count[s2[i].charCodeAt(0) - a]++;

        // init comparse s1count and s2count
        for(let i=0; i<26; i++){
            if(s1Count[i] == s2Count[i]) matches++;
        }
        
        if(matches == 26) return true;

        // use 2pointer apprach to solve this problem
        // starting from s1.length bec we have already pre calculated s1.len in s2count
        for(let i=s1.length; i<s2.length; i++){ 
            // we are not doing i-s1.len-1 bec we want extra element which we can remove of
            let leftChar = s2[i - s1.length].charCodeAt(0) - a; 
            let rightChar = s2[i].charCodeAt(0) - a;

            // add new char
            s2Count[rightChar]++;
            if(s2Count[rightChar] == s1Count[rightChar]) matches++;
            // Before I added this character, were the frequencies equal? If yes → I just broke a match.
            else if(s2Count[rightChar]-1 == s1Count[rightChar]) matches--;

            // remove old char
            s2Count[leftChar]--;
            if(s2Count[leftChar] == s1Count[leftChar]) matches++;
            // Before I removed this character, were the frequencies equal? If yes → I just broke a match.
            else if(s2Count[leftChar]+1 == s1Count[leftChar]) matches--;

            if(matches == 26) return true;
        }

        return false;
    }
}
