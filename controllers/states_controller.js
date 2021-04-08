const fetch = require('node-fetch');
module.exports.getData = function(req, res){
    fetch('https://api.covid19india.org/state_district_wise.json').then((result) => {
        return result.json();
    }).then((actualData) => {
        console.log(actualData[req.body.state].districtData[req.body.district]);
        return res.render('state_district_tally', {
            district: actualData[req.body.state].districtData[req.body.district],
            state: req.body.state,
            district_name: req.body.district
        });
    }).catch((err) => {
        if(err)
        {
            console.log(err);
            return res.json(500, {
                message: 'Invalid server error'
            });
        }
    });
}