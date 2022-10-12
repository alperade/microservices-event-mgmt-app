window.addEventListener('DOMContentLoaded', async () => {
  const url = 'http://localhost:8000/api/locations/';

  try {
      const response = await fetch(url);

      if (!response.ok) {
        alert('Response not ok!', 'danger');
        throw new Error('Response not ok');
      } else {
        const data = await response.json();
        const location = document.getElementById("location");
        for (let loc of data.locations) {
          var option = document.createElement("option");
          option.value = loc.id
          option.innerHTML = loc.name
          location.appendChild(option);
        }
      }
    } catch (e) {
        alert('Error', 'warning');
        console.error('error', e)
    }

    });

        const formTag = document.getElementById('create-conference-form');
        formTag.addEventListener('submit', async event => {
            event.preventDefault();
            const formData = new FormData(formTag);
            console.log(formData)
            const json = JSON.stringify(Object.fromEntries(formData));
            const locationUrl = 'http://localhost:8000/api/conferences/';
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
