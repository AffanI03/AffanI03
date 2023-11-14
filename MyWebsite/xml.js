async function fetchData() {
    try {
      let prom = await fetch('https://moxie.foxnews.com/google-publisher/latest.xml');
      let text = await prom.text();
      console.log(text.substring(0, 100));
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  
  async function fetchDataAndParse() {
    try {
      let prom = await fetch('https://moxie.foxnews.com/google-publisher/latest.xml');
      let text = await prom.text();
  
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(text, "application/xml");
  
      console.log(xmlDoc);
  
      const items = xmlDoc.querySelectorAll("item");
      console.log('items:', items);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchDataAndParse();
  
  async function fetchDataAndParse() {
    try {
      let prom = await fetch('https://moxie.foxnews.com/google-publisher/latest.xml');
      let text = await prom.text();
  
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(text, 'application/xml');
  
      const items = xmlDoc.querySelectorAll('item');
  
      items.forEach((el) => {
        let title = el.querySelector('title').textContent;
        let description = el.querySelector('description').textContent;
        let guid = el.querySelector('guid').textContent;
  
        console.log('title:', title);
        console.log('description:', description);
        console.log('guid:', guid);
  
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
          <h2>${title}</h2>
          <p>${description}</p>
        `;
        if (guid) div.innerHTML += `<a href='${guid}'>LINK</a>`;
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchDataAndParse();