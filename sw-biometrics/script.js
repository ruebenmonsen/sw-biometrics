((appenv) => {

    appenv.getAPI = function (event) {
        event.preventDefault();
        
        const userInput = document.querySelector('input').value;


        let fullUri = "https://www.swapi.tech/api/people/?name=" + userInput;
        userFeedback('Loading...');
        fetch(fullUri)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                let dataString = `Value 1: ${data.result[0].properties.height}, Value 2: ${data.result[0].properties.mass}, Value 3: ${data.result[0].properties.gender}, Value 4: ${data.result[0].properties.hair_color}`;
                outputData(dataString);
                userFeedback('Success');

            })
            .catch(err => {
                console.log(err);
                userFeedback('Failed to load data.')
            });
    }

    const outputData = dataString => {
        document.querySelector('textarea').innerHTML = dataString;
    }

    const userFeedback = message => {
        document.querySelector('div').innerHTML = message;
    }



})(window.appenv = window.appenv || {});

document.querySelector('button').addEventListener('click', appenv.getAPI)