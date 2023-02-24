/* mobile button */

const mobileButton = document.querySelector("[data-mobile-button]")
const visibleElements = document.querySelectorAll('[data-menu]')

mobileButton.addEventListener('click', () => {
	visibleElements.forEach(e => e.toggleAttribute('data-visible'))
})

const changeActiveButton = (button) => {
  const navButtonsParent = document.querySelector('[data-nav-buttons]')
	const activeButton = navButtonsParent.querySelector('.active')
	if(activeButton) {
		activeButton.classList.remove('active')
	}

	button.classList.add('active')
	visibleElements.forEach(e => e.toggleAttribute('data-visible'))
}

const changeSection = (index) => {
	const sectionParents = document.querySelector('[data-main]')
	const activeSection = sectionParents.querySelector('[data-section].active')
	if(activeSection) {
		activeSection.classList.remove('active')
	}

	sectionParents.children[index + 1].classList.add('active')
}

const navButtons = document.querySelectorAll('[data-nav-button]')

navButtons.forEach((button, index) => {
	button.addEventListener('click', () => {
		changeActiveButton(button)
		changeSection(index)
	})
})