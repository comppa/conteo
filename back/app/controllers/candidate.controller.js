const db = require("../models");
const Candidate = db.candidate;


getCandidates = (req, res) => {
    Candidate.find({},(err, candidates) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!candidates.length) {   
            return res
                .status(404)
                .json({ success: false, error: 'candidate not found' })
        }
    return res.status(200).json({ success: true, data: candidates})
    }).sort({ number: 1}).clone().catch(err => console.log(err))
};

module.exports = {
    getCandidates
};