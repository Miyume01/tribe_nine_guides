function handleTabClick(event) {
    const tabs = document.querySelectorAll('nav a');

    tabs.forEach(tab => {
        tab.classList.remove('bg-tribe-nav-purple-bar-light');
        tab.classList.add('hover:bg-tribe-nav-purple-bar-dark');
    });

    const clickedTab = event.currentTarget;
    clickedTab.classList.remove('hover:bg-tribe-nav-purple-bar-dark');
    clickedTab.classList.add('bg-tribe-nav-purple-bar-light');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
});