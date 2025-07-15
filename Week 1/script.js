if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready after DOMContentLoaded!");
    initializeCode();
  });
}

function initializeCode() {
  const breeds = [
    "akita",
    "cardigan welsh corgi",
    "dalmatian dog",
    "shiba inu",
    "siberian husky"
  ];

  const dogApiBreedMap = {
    "akita": "akita",
    "cardigan welsh corgi": "corgi/cardigan",
    "dalmatian dog": "dalmatian",
    "shiba inu": "shiba",
    "siberian husky": "husky"
  };

  async function fetchData(breed) {
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(breed)}`);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const fetchedData = await response.json();
      return fetchedData.extract || "No information available.";
    } catch (error) {
      console.error("ERROR (wiki): ", error);
      return "Failed to fetch Wikipedia info.";
    }
  }

  async function fetchImage(breed) {
    try {
      const apiBreed = dogApiBreedMap[breed];
      const response = await fetch(`https://dog.ceo/api/breed/${apiBreed}/images/random`);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const fetchedImage = await response.json();
      return fetchedImage.message; // actual image URL
    } catch (error) {
      console.error("ERROR (image): ", error);
    }
  }

  function createContainer(breed, info, image) {
    const wikiItem = document.createElement("div");
    wikiItem.className = "wiki-item";

    const wikiHeader = document.createElement("h1");
    wikiHeader.className = "wiki-header";
    wikiHeader.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);

    const wikiContent = document.createElement("div");
    wikiContent.className = "wiki-content";

    const wikiText = document.createElement("p");
    wikiText.className = "wiki-text";
    wikiText.textContent = info;

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    const wikiImage = document.createElement("img");
    wikiImage.className = "wiki-img";
    wikiImage.src = image;
    wikiImage.alt = `${breed} image`;

    imgContainer.appendChild(wikiImage);
    wikiContent.appendChild(wikiText);
    wikiContent.appendChild(imgContainer);
    wikiItem.appendChild(wikiHeader);
    wikiItem.appendChild(wikiContent);
    document.getElementById("wiki-container").appendChild(wikiItem);
  }

  async function generateItems() {
    for (const breed of breeds) {
      const [info, image] = await Promise.all([fetchData(breed), fetchImage(breed)]);
      createContainer(breed, info, image);
    }
  }

  generateItems();
}