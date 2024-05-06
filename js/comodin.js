document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('pricingTablesContainer');
    for (let i = 0; i <= 21; i++) {
        const imageNumber = i.toString().padStart(3, '0');
        const imagePath = `img/comodines/${imageNumber}.png`;
        const colClass = i > 2 ? 'col-lg-3 col-md-3 col-xs-12 mt-1 mb-1' : 'col-lg-3 col-md-3 col-xs-12';

        const colElement = `
            <div class="${colClass}">
                <div class="pricing-table text-center">
                    <div class="pricing-details">
                        <img src="${imagePath}" alt="">
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += colElement;
    }
});
