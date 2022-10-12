console.log("success")

window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/states/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
          alert('Response not ok!', 'danger');
          throw new Error('Response not ok');
        } else {
          const data = await response.json();
          const state = document.getElementById("state");
          for (let abb of data.states) {
            var option = document.createElement("option");
            option.value = abb.abbreviation
            option.innerHTML = abb.name
            state.appendChild(option);
          }
        }
      } catch (e) {
          alert('Error', 'warning');
          console.error('error', e)
      }

    });

        const formTag = document.getElementById('create-location-form');
        formTag.addEventListener('submit', async event => {
            event.preventDefault();
            const formData = new FormData(formTag);
            const json = JSON.stringify(Object.fromEntries(formData));
            const locationUrl = 'http://localhost:8000/api/locations/';
            const fetchConfig = {
                method: "POST",
                body: json,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(locationUrl, fetchConfig);
            if (response.ok) {
                formTag.reset();
                const newLocation = await response.json();
                }
                    });
