export default {
    getComments(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(_comments);
            }, 100);
        });
    }
}

// mock data
const _comments = {};