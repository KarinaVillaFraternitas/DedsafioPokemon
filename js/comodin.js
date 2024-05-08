document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('pricingTablesContainer');

    fetch('public/src/images.json')
        .then(response => response.json())
        .then(data => {
            data.images.forEach((item, index) => {
                const colDiv = document.createElement('div');
                const pricingTable = document.createElement('div');
                const pricingDetails = document.createElement('div');
                const link = document.createElement('a'); // Crea un elemento de enlace
                const img = document.createElement('img');

                const colClass = index > 2 ? 'col-lg-3 col-md-3 col-xs-12 mt-1 mb-1' : 'col-lg-3 col-md-3 col-xs-12';
                colDiv.className = colClass;
                pricingTable.className = 'pricing-table text-center';
                pricingDetails.className = 'pricing-details';

                link.href = item.src; // URL de la imagen de alta resolución
                link.setAttribute('data-lightbox', 'image-gallery');
                link.setAttribute('data-title', item.description);

                img.src = item.src; // URL de la miniatura
                img.alt = item.description;
                img.title = item.description;

                link.appendChild(img); // Añade la imagen al enlace
                pricingDetails.appendChild(link); // Añade el enlace a pricingDetails
                pricingTable.appendChild(pricingDetails);
                colDiv.appendChild(pricingTable);
                container.appendChild(colDiv);
            });
        })
        .catch(error => console.error('Error loading the images:', error));
});