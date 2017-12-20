const toggleClass = (
  element,
  className,
  state = !element.classList.contains(className)
) => {
  element.classList[state ? 'add' : 'remove'](className)
  return element
}

const tabs = ({element}) => {
  const headers = Array.from(element.querySelectorAll('nav > div'))
  const views = Array.from(element.querySelectorAll('main > article'))

  if (headers.length !== views.length) {
    throw new Error(`tabs: the ammount of tabs and views must be equal`)
  }

  const active = {
    tab: headers.filter(tab => tab.classList.contains('active'))[0],
    view: views.filter(tab => tab.classList.contains('active'))[0]
  }

  headers.forEach((tab, i) => {
    const view = views[i]
    tab.onclick = () => {
      toggleClass(active.tab, 'active', false)
      toggleClass(active.view, 'active', false)
      toggleClass(tab, 'active')
      toggleClass(view, 'active')
      active.tab = tab
      active.view = view
    }

    if (!active.tab) {
      active.tab = tab
      active.view = view
    }
  })
}

window.onload = () => {
  Array.from(document.querySelectorAll('.tabs'))
  .forEach(element => {
    tabs({element})
  })
}

export default tabs
