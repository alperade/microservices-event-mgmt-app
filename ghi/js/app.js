function createCard(name, description, pictureUrl) {
    return `
    <div class="col-sm-4">

      <div class="card" style="margin-bottom: 18px; box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
      </div>
    `;
  }

  window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
      } else {
        const data = await response.json();
        console.log(data.conferences)
        for (let conference of data.conferences) {
            const detailUrl = `http://localhost:8000${conference.href}`;
            const detailResponse = await fetch(detailUrl);
            if (detailResponse.ok) {
                const details = await detailResponse.json();
                const name = details.conference.name;
                console.log(details);
                const description = details.conference.description;
                const pictureUrl = details.conference.location.picture_url;
                const html = createCard(name, description, pictureUrl);
                const row = document.querySelector('.row');
                row.innerHTML += html;
          }
        }

      }
    } catch (e) {
        console.error('error', e)
    }

  });
