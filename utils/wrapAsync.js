<<<<<<< HEAD
module.exports = (fn) => {
    return(req, res, next) => {
        fn(req, res, next).catch(next);
    }
=======
module.exports = (fn) => {
    return(req, res, next) => {
        fn(req, res, next).catch(next);
    }
>>>>>>> 59f73547b03df34273dfaa7c6d4455c0c0482eb2
}