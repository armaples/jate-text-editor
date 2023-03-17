const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // stores any event triggered
    window.deferredPrompt = event;

    // removes hidden class from button so install is possible
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    // if not prompt event is triggered then the function stops here
    if (!promptEvent) {
        return;
    }

    // this shows the prompt to install
    promptEvent.prompt();

    // resets deferred prompt variable
    window.deferredPrompt = null;

    // this adds the hidden class back to the button
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log('Success!', 'appinstalled', event);
});
