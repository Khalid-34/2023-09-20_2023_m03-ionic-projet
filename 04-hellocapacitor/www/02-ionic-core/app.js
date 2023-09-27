const ImgUrl = "https://devfest2018.gdgnantes.com/";
const devfest = "https://devfest-nantes-2018-api.cleverapps.io/blog";
const container = document.getElementById("container");

fetch(devfest)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((card) => {
      const cardElement = document.createElement("ion-card");
      cardElement.id = card.id;

      const imgElement = document.createElement("img");
      imgElement.src = `${ImgUrl}${card.image}`;
      imgElement.alt = "";
      cardElement.appendChild(imgElement);

      const cardHeader = document.createElement("ion-card-header");
      const cardTitle = document.createElement("ion-card-title");
      cardTitle.textContent = card.title;
      cardHeader.appendChild(cardTitle);
      cardElement.appendChild(cardHeader);

      const cardContent = document.createElement("ion-card-content");
      cardContent.textContent = card.brief;
      cardElement.appendChild(cardContent);

      const socialIconsRow = document.createElement("ion-row");
      socialIconsRow.className = "social-icons-row";

      const heartIconCol = document.createElement("ion-col");
      heartIconCol.size = "auto";
      heartIconCol.className = "social-icon-col";
      heartIconCol.innerHTML =
        '<ion-icon name="heart-outline" aria-label="Like"></ion-icon>';
      socialIconsRow.appendChild(heartIconCol);

      const shareIconCol = document.createElement("ion-col");
      shareIconCol.size = "auto";
      shareIconCol.className = "social-icon-col";
      shareIconCol.innerHTML =
        '<ion-icon name="share-social-outline" aria-label="Share"></ion-icon>';
      socialIconsRow.appendChild(shareIconCol);

      cardElement.appendChild(socialIconsRow);

      container.appendChild(cardElement);
    });
  })
  .catch((error) => {
    console.error("Il y a eu un problème avec l'opération fetch:", error);
  });
