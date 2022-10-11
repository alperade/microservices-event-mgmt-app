var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}



function createCard(name, subtitle, description, pictureUrl, startDate, endDate) {
    return `
    <div class="col-sm-4">

      <div class="card" style="margin-bottom: 18px; box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
          <p class="card-text">${description}</p>
        </div>
        <div class="card-footer">
        ${startDate} - ${endDate}
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
        alert('Response not ok!', 'danger');
        throw new Error('Response not ok');
      } else {
        const data = await response.json();
        for (let conference of data.conferences) {
            const detailUrl = `http://localhost:8000${conference.href}`;
            const detailResponse = await fetch(detailUrl);
            if (detailResponse.ok) {
                const details = await detailResponse.json();
                const name = details.conference.name;
                const subtitle = details.conference.location.name;
                const description = details.conference.description;
                const pictureUrl = details.conference.location.picture_url;
                const startDate = new Date(details.conference.starts).toLocaleDateString()
                const endDate = new Date(details.conference.ends).toLocaleDateString()
                const html = createCard(name, subtitle, description, pictureUrl, startDate, endDate);
                const row = document.querySelector('.row');
                row.innerHTML += html;
          }
        }

      }
    } catch (e) {
        alert('Error', 'warning');
        console.error('error', e)
    }

  });
