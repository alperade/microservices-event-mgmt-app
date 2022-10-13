window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');
    const url = 'http://localhost:8000/api/conferences/';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      alert('Response not ok!', 'danger');
      throw new Error('Response not ok');
    } else {
      const data = await response.json();
      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }

      // Here, add the 'd-none' class to the loading icon
      const loading = document.getElementById('loading-conference-spinner');
      loading.classList.add("d-none");

      // Here, remove the 'd-none' class from the select tag
      const conf = document.getElementById('conference');
      conf.classList.remove("d-none");

    }
  } catch (e) {
      alert('Error', 'warning');
      console.error('error', e)
  }

  });

    const formTag = document.getElementById('create-attendee-form');
    formTag.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(formTag);
    console.log(formData)
    const json = JSON.stringify(Object.fromEntries(formData));
    const locationUrl = 'http://localhost:8001/api/attendees/';
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
        // Here, add the 'd-none' class to the form
        const loading = document.getElementById('create-attendee-form');
        loading.classList.add("d-none");

        // Here, remove the 'd-none' class from the success alert
        const conf = document.getElementById('success-message');
        conf.classList.remove("d-none");
        }
    });
