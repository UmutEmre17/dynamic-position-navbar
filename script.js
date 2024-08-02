document.addEventListener('DOMContentLoaded', function () {
    const placementButtons = document.querySelectorAll('.placement-grid button');
    const sidebar = document.querySelector('.ins-sidebar');
    const openSettingsButton = document.getElementById('open-settings');
    const closeSettingsButton = document.getElementById('close-settings');
    const settingsPanel = document.querySelector('.settings-panel');

    let currentPosition = 'middle-left';
    let topMargin = 0;
    let bottomMargin = 0;
    let leftMargin = 0;
    let rightMargin = 0;

    // Event listeners for position buttons
    placementButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Button clicked:', this.getAttribute('data-position'));
            placementButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentPosition = this.getAttribute('data-position');
            applyPlacement();
        });
    });

    // Event listeners for margin inputs
    document.getElementById('top-margin').addEventListener('input', function () {
        topMargin = parseInt(this.value);
        applyPlacement();
    });

    document.getElementById('bottom-margin').addEventListener('input', function () {
        bottomMargin = parseInt(this.value);
        applyPlacement();
    });

    document.getElementById('left-margin').addEventListener('input', function () {
        leftMargin = parseInt(this.value);
        applyPlacement();
    });

    document.getElementById('right-margin').addEventListener('input', function () {
        rightMargin = parseInt(this.value);
        applyPlacement();
    });

    openSettingsButton.addEventListener('click', function () {
        settingsPanel.style.display = 'block';
    });

    // Event listener for closing settings panel
    closeSettingsButton.addEventListener('click', function () {
        settingsPanel.style.display = 'none';
    });

    function applyPlacement() {
        console.log('Applying placement:', currentPosition);
        sidebar.style.top = '';
        sidebar.style.right = '';
        sidebar.style.bottom = '';
        sidebar.style.left = '';
        sidebar.style.transform = '';

        
        sidebar.classList.remove('position-left', 'position-right');

        switch (currentPosition) {
            case 'top-left':
                sidebar.style.top = `${topMargin}px`;
                sidebar.style.left = `${leftMargin}px`;
                sidebar.style.transform = 'translateY(0)';
                sidebar.classList.add('position-left');
                break;
            case 'top-center':
                sidebar.style.top = `${topMargin}px`;
                sidebar.style.left = `calc(50% + ${leftMargin}px - ${rightMargin}px)`;
                sidebar.style.transform = 'translateX(-50%)';
                break;
            case 'top-right':
                sidebar.style.top = `${topMargin}px`;
                sidebar.style.right = `${rightMargin}px`;
                sidebar.style.transform = 'translateY(0)';
                sidebar.classList.add('position-right');
                break;
            case 'middle-left':
                sidebar.style.top = `calc(50% + ${topMargin}px - ${bottomMargin}px)`;
                sidebar.style.left = `${leftMargin}px`;
                sidebar.style.transform = 'translateY(-50%)';
                sidebar.classList.add('position-left');
                break;
            case 'middle-center':
                sidebar.style.top = `calc(50% + ${topMargin}px - ${bottomMargin}px)`;
                sidebar.style.left = `calc(50% + ${leftMargin}px - ${rightMargin}px)`;
                sidebar.style.transform = 'translate(-50%, -50%)';
                break;
            case 'middle-right':
                sidebar.style.top = `calc(50% + ${topMargin}px - ${bottomMargin}px)`;
                sidebar.style.right = `${rightMargin}px`;
                sidebar.style.transform = 'translateY(-50%)';
                sidebar.classList.add('position-right');
                break;
            case 'bottom-left':
                sidebar.style.bottom = `${bottomMargin}px`;
                sidebar.style.left = `${leftMargin}px`;
                sidebar.style.transform = 'translateY(0)';
                sidebar.classList.add('position-left');
                break;
            case 'bottom-center':
                sidebar.style.bottom = `${bottomMargin}px`;
                sidebar.style.left = `calc(50% + ${leftMargin}px - ${rightMargin}px)`;
                sidebar.style.transform = 'translateX(-50%)';
                break;
            case 'bottom-right':
                sidebar.style.bottom = `${bottomMargin}px`;
                sidebar.style.right = `${rightMargin}px`;
                sidebar.style.transform = 'translateY(0)';
                sidebar.classList.add('position-right');
                break;
        }
    }

    applyPlacement();
});
