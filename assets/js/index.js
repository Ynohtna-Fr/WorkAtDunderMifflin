const playIcons = document.querySelectorAll('.audioClip')
playIcons.forEach(icons => {
  icons.addEventListener('click', (e) => {
    const audioClip = e.currentTarget.lastElementChild
    const svgIcon = e.currentTarget.firstElementChild
    if (audioClip.getAttribute('playing') === 'true') {
      audioClip.pause()
      audioClip.setAttribute('playing', 'false')
      svgIcon.innerHTML = '<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>'
    } else {
      audioClip.play()
      audioClip.setAttribute('playing', 'true')
      svgIcon.innerHTML = '<path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>'
    }
  })

  icons.lastElementChild.addEventListener('ended', (e) => {
    icons.firstElementChild.innerHTML = '<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>'
  })
})
